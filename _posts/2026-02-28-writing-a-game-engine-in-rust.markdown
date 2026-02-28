---
layout: post
title: "Writing a Game Engine in Rust"
date: 2026-02-28
tags: [programming, project]
---

Six months into a hobby game engine in Rust. Not because the world needs another one — it doesn't — but because I wanted to understand how the pieces fit: ECS, render graphs, asset pipelines, the works. This is a checkpoint post.

## Entity Component System

The ECS is the heart of the engine. Entities are just IDs. Components are plain data. Systems iterate over entities that have a specific set of components.

```rust
#[derive(Debug)]
pub struct Transform {
    pub position: Vec3,
    pub rotation: Quat,
    pub scale:    Vec3,
}

#[derive(Debug)]
pub struct Velocity {
    pub linear:  Vec3,
    pub angular: Vec3,
}
```

Querying is done through a typed `Query<T>`:

```rust
fn integrate_velocities(
    mut transforms: Query<(&mut Transform, &Velocity)>,
    dt: Res<DeltaTime>,
) {
    for (transform, velocity) in transforms.iter_mut() {
        transform.position += velocity.linear * dt.0;
    }
}
```

The storage model is a **sparse set**: each component type has a dense array of values and a sparse array mapping entity IDs to indices. Random access is O(1), iteration is cache-friendly.

> I considered archetypes (the approach Bevy uses) but the implementation complexity felt unjustified for a solo project. Sparse sets are simpler and fast enough.

## Rendering with wgpu

The renderer uses `wgpu`, which compiles down to Vulkan, Metal, or DX12 depending on the platform. A simple forward-rendering pass looks like this:

```rust
let mut render_pass = encoder.begin_render_pass(&wgpu::RenderPassDescriptor {
    label: Some("forward pass"),
    color_attachments: &[Some(wgpu::RenderPassColorAttachment {
        view: &output_view,
        resolve_target: None,
        ops: wgpu::Operations {
            load: wgpu::LoadOp::Clear(wgpu::Color { r: 0.01, g: 0.01, b: 0.01, a: 1.0 }),
            store: wgpu::StoreOp::Store,
        },
    })],
    depth_stencil_attachment: Some(/* depth buffer */),
    ..Default::default()
});

render_pass.set_pipeline(&self.pipeline);
render_pass.set_bind_group(0, &self.scene_bind_group, &[]);

for mesh in &scene.meshes {
    render_pass.set_vertex_buffer(0, mesh.vertex_buf.slice(..));
    render_pass.set_index_buffer(mesh.index_buf.slice(..), wgpu::IndexFormat::Uint32);
    render_pass.draw_indexed(0..mesh.index_count, 0, 0..1);
}
```

Shadow mapping is working. The shadow pass renders the scene from the light's perspective into a depth texture, which is then sampled in the main pass.

## Asset Pipeline

Assets go through a simple two-stage process:

1. **Import** — raw files (GLTF, PNG, OGG) are parsed and converted to an internal binary format
2. **Load** — the binary format is `mmap`'d at runtime, zero-copy where possible

```rust
pub trait Importer {
    type Asset: Asset;
    fn import(&self, path: &Path) -> Result<Self::Asset>;
}

pub struct GltfImporter;

impl Importer for GltfImporter {
    type Asset = Mesh;

    fn import(&self, path: &Path) -> Result<Mesh> {
        let (doc, buffers, _) = gltf::import(path)?;
        // ... extract vertices, indices, materials
        Ok(mesh)
    }
}
```

Hot-reloading watches the source files with `notify` and re-imports on change. This was worth implementing early — iterating on shaders without restarting the process saves a lot of time.

## Current Feature Status

| Feature              | Status      |
|----------------------|-------------|
| ECS (sparse set)     | Done        |
| Forward renderer     | Done        |
| Shadow maps          | Done        |
| Asset hot-reload     | Done        |
| Physics integration  | In progress |
| Audio                | Not started |
| Scripting (Lua)      | Not started |
| Editor               | Not started |

## Lessons Learned

- **The borrow checker helps.** Systems that share mutable state are genuinely a source of bugs in C++ engines. The compiler makes you think about this upfront.
- **Asset hot-reload is worth doing early.** Shader iteration without it is miserable.
- **Premature optimisation is still a trap.** I spent a week optimising the ECS before profiling. The bottleneck was the GPU, not the ECS.
- **wgpu is excellent.** The API is verbose but correct. No mystery crashes.

---

Code is on GitHub. Requires a GPU that supports Vulkan 1.2 or Metal 2.

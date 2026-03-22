---
layout: post
title: "Setting Up Neovim for Rust Development"
date: 2026-01-10
tags: [programming]
---

Eight months ago I switched from VS Code to Neovim full-time. Here is what my Rust setup looks like, what works, and what I had to give up.

## Plugin Manager: lazy.nvim

`lazy.nvim` loads plugins on demand. Most never touch startup time at all:

```lua
-- ~/.config/nvim/lua/plugins/rust.lua
return {
  {
    "mrcjkb/rustaceanvim",
    version = "^5",
    ft = { "rust" },
  },
  {
    "saghen/blink.cmp",
    version = "^1",
    opts = {
      keymap = { preset = "default" },
      sources = {
        default = { "lsp", "path", "snippets", "buffer" },
      },
    },
  },
}
```

## LSP: rust-analyzer

`rust-analyzer` via `nvim-lspconfig`. The inlay hints are the killer feature — you see inferred types inline without hovering:

```rust
let config = Config::default();
//           ^^^^^^^^^^^^^^ Config
let items = config.items();
//          ^^^^^^^^^^^^^^ Vec<Item>
```

My LSP keymaps:

```lua
vim.keymap.set("n", "gd",         vim.lsp.buf.definition)
vim.keymap.set("n", "gr",         vim.lsp.buf.references)
vim.keymap.set("n", "K",          vim.lsp.buf.hover)
vim.keymap.set("n", "<leader>rn", vim.lsp.buf.rename)
vim.keymap.set("n", "<leader>ca", vim.lsp.buf.code_action)
vim.keymap.set("n", "<leader>e",  vim.diagnostic.open_float)
```

## rustaceanvim

`rustaceanvim` adds Rust-specific commands on top of the LSP. The most useful ones:

| Command                    | What it does                          |
|----------------------------|---------------------------------------|
| `:RustLsp expandMacro`     | Shows macro expansion inline          |
| `:RustLsp openDocs`        | Opens docs.rs for item under cursor   |
| `:RustLsp runnables`       | Lists and runs tests / binaries       |
| `:RustLsp explainError`    | Fetches the full compiler error text  |
| `:RustLsp codeAction`      | Rust-aware code actions               |

`expandMacro` in particular is something VS Code can't do well. Being able to see what `#[derive(Debug)]` or a proc macro expands to is genuinely useful for debugging.

## Formatting: conform.nvim

`rustfmt` on save, zero config needed:

```lua
{
  "stevearc/conform.nvim",
  opts = {
    format_on_save = { timeout_ms = 500 },
    formatters_by_ft = {
      rust = { "rustfmt" },
    },
  },
}
```

## Debugging: nvim-dap + codelldb

Install `codelldb` via `mason.nvim`, then:

```lua
local dap = require("dap")

dap.adapters.codelldb = {
  type = "server",
  port = "${port}",
  executable = {
    command = vim.fn.stdpath("data") .. "/mason/bin/codelldb",
    args = { "--port", "${port}" },
  },
}

dap.configurations.rust = {
  {
    name    = "Launch",
    type    = "codelldb",
    request = "launch",
    program = function()
      return vim.fn.input("Binary: ", vim.fn.getcwd() .. "/target/debug/", "file")
    end,
    cwd     = "${workspaceFolder}",
    stopOnEntry = false,
  },
}
```

Breakpoints, stepping, variable inspection all work. Not as seamless as VS Code's integrated debug UI, but functional.

## What I Miss

Honestly not much at this point. A few things:

- **Integrated terminal** — `tmux` panes solve this but it's a context switch
- **First-class remote development** — `VS Code + SSH` is still smoother than Neovim over SSH for unfamiliar machines
- **Extension marketplace discoverability** — finding Neovim plugins requires more research

> If you're considering the switch: the first two weeks are slow. After that, you stop noticing. After two months, VS Code feels slow.

---

My full config is in my dotfiles repo. The Rust-specific parts are in `lua/plugins/rust.lua` and `lua/plugins/dap.lua`.


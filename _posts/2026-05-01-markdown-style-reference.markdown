---
layout: post
title: "Markdown Style Reference"
date: 2026-05-01
tags: [programming]
---

This post exists to preview every markdown element in one place. Not meant to be read — meant to be looked at.

---

## Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

---

## Paragraphs and Inline Formatting

A regular paragraph. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.

**Bold text** sits next to *italic text* and ***bold italic text***. You can also use ~~strikethrough~~ for removed content. Inline `code` looks like this inside a sentence.

Here is a [link to somewhere](https://example.com) and here is another [link with a title](https://example.com "Example Domain").

---

## Blockquotes

A simple blockquote:

> This is a blockquote. It can span multiple sentences and will be styled with a left border. Use it for callouts, warnings, or quoted material.

A nested blockquote:

> Outer level of the blockquote.
>
> > Inner level, nested one level deeper.
> >
> > > And a third __level__, if you really need it.

---

## Lists

### Unordered

- First item
- Second item
- Third item
  - Nested item A
  - Nested item B
    - Doubly nested item
- Back to top level

### Ordered

1. First step
2. Second step
3. Third step
   1. Sub-step one
   2. Sub-step two
4. Fourth step

### Mixed

1. Set up the project
   - Create the directory
   - Initialise git
2. Install dependencies
   - Core packages
   - Dev tools
3. Configure the environment

---

## Code

### Inline

Use `cargo build --release` to compile, or `cargo test` to run the test suite.

### Fenced block (Rust)

```rust
use std::collections::HashMap;

#[derive(Debug, Clone)]
pub struct Config {
    values: HashMap<String, String>,
}

impl Config {
    pub fn new() -> Self {
        Self { values: HashMap::new() }
    }

    pub fn get(&self, key: &str) -> Option<&str> {
        self.values.get(key).map(|s| s.as_str())
    }

    pub fn set(&mut self, key: impl Into<String>, value: impl Into<String>) {
        self.values.insert(key.into(), value.into());
    }
}

fn main() {
    let mut config = Config::new();
    config.set("host", "localhost");
    config.set("port", "8080");

    if let Some(host) = config.get("host") {
        println!("Connecting to {host}...");
    }
}
```

### Fenced block (Bash)

```bash
#!/usr/bin/env bash
set -euo pipefail

TARGET="${1:-release}"
OUT_DIR="dist"

echo "Building target: $TARGET"
cargo build --profile "$TARGET"

mkdir -p "$OUT_DIR"
cp "target/$TARGET/myapp" "$OUT_DIR/"
echo "Done. Output in $OUT_DIR/"
```

### Fenced block (TOML)

```toml
[package]
name    = "myapp"
version = "0.1.0"
edition = "2021"

[dependencies]
serde       = { version = "1", features = ["derive"] }
tokio       = { version = "1", features = ["full"] }
anyhow      = "1"
tracing     = "0.1"

[profile.release]
opt-level = 3
lto       = true
strip     = true
```

### Fenced block (no language)

```
plain preformatted text
    indented line
        doubly indented
no syntax highlighting here
```

---

## Tables

### Simple table

| Name    | Type    | Default  |
|---------|---------|----------|
| width   | integer | 800      |
| height  | integer | 600      |
| title   | string  | "Untitled"|
| visible | boolean | true     |

### Aligned columns

| Left-aligned | Centre-aligned | Right-aligned |
|:-------------|:--------------:|--------------:|
| alpha        |     beta       |         gamma |
| one          |      two       |         three |
| longer entry |    middle      |         right |

### Wide table (horizontal scroll)

| ID  | First Name | Last Name   | Email                        | Department     | Role              | Location       | Start Date | Salary (€) | Active |
|-----|------------|-------------|------------------------------|----------------|-------------------|----------------|------------|------------|--------|
| 001 | Ada        | Lovelace    | ada@example.com              | Engineering    | Lead Engineer     | London         | 2019-03-12 | 95,000     | Yes    |
| 002 | Grace      | Hopper      | grace@example.com            | Engineering    | Principal Architect | Boston       | 2017-07-01 | 110,000    | Yes    |
| 003 | Alan       | Turing      | alan@example.com             | Research       | Research Lead     | Manchester     | 2020-01-15 | 102,000    | Yes    |
| 004 | Margaret   | Hamilton    | margaret@example.com         | Engineering    | Software Engineer | Cambridge, MA  | 2021-06-30 | 88,000     | Yes    |
| 005 | Linus      | Torvalds    | linus@example.com            | Infrastructure | Staff Engineer    | Helsinki       | 2018-11-04 | 120,000    | Yes    |
| 006 | Barbara    | Liskov      | barbara@example.com          | Research       | Fellow            | Boston         | 2016-02-20 | 135,000    | No     |
| 007 | Tim        | Berners-Lee | tim@example.com              | Platform       | Distinguished Eng | Geneva         | 2015-09-09 | 140,000    | Yes    |

---

## Horizontal Rules

Above this line.

---

Below that line. Above this one.

---

Below this line too.

---

## Images

![Alt text for a placeholder image](https://placehold.co/600x200/1e1e2e/cdd6f4?text=sample+image)

---

## Task Lists

- [x] Design the layout
- [x] Implement the sidebar
- [x] Add dark/light mode
- [x] Add colour palette switcher
- [ ] Write actual content
- [ ] Set up deployment
- [ ] Add RSS feed styling

---

## Footnotes

Here is a sentence with a footnote.[^1] And another one.[^note]

[^1]: This is the first footnote.
[^note]: This is a named footnote. It can be longer and contain more detail about the referenced text.

---

## Definition Lists

*(Not standard CommonMark, may not render depending on Jekyll config.)*

Term one
: Definition of term one.

Term two
: First definition of term two.
: Second definition of term two.

---

## Raw HTML

<kbd>Ctrl</kbd> + <kbd>S</kbd> to save. <kbd>Ctrl</kbd> + <kbd>Z</kbd> to undo.

<details>
  <summary>Click to expand a hidden section</summary>
  <p>This content is hidden by default. It uses raw HTML since standard Markdown has no collapsible syntax.</p>
  <pre><code>Code inside a details block also works.</code></pre>
</details>

---

## Everything Together

A paragraph with **bold**, *italic*, `code`, a [link](https://example.com), and ~~strikethrough~~ all in one sentence, followed by a blockquote:

> This blockquote immediately follows a dense paragraph. It references `inline code` and contains **bold text** to verify that inline formatting works inside blockquotes as well.

Then a short list:

1. First
2. Second
3. Third

Then a code block:

```rust
fn add(a: i32, b: i32) -> i32 {
    a + b
}
```

Then a table:

| Input A | Input B | Output |
|---------|---------|--------|
| 1       | 2       | 3      |
| 10      | 32      | 42     |
| -5      | 5       | 0      |

---

*End of style reference.*

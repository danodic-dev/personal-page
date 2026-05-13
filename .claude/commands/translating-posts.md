Translate a post or page into the two missing languages. Usage: `/translating-posts <path/to/file.lang.ext>`

## Language targets

Always produce exactly these three variants:

| Code | Language | Variant |
|------|----------|---------|
| `pt` | Portuguese | Brazilian Portuguese (pt-BR) |
| `en` | English | American English (en-US) |
| `es` | Spanish | Latin American Spanish, preferring Uruguayan register and expressions when a regional choice must be made |

---

## Step 1 — Parse the source file

From the filename, extract:
- **Base name**: everything before the language code (e.g. `_pages/about`, `_posts/2026-05-01-my-post`)
- **Source language**: the code between the last dot before the extension and the extension itself (e.g. `es` in `about.es.markdown`)
- **Extension**: `.md` or `.markdown` — preserve it exactly in output filenames
- **Output paths**: replace the source language code with each of the two missing codes, keeping the rest of the path and extension identical

Examples:
- `_pages/about.es.markdown` → produce `_pages/about.pt.markdown` and `_pages/about.en.markdown`
- `_posts/programming/1_post.pt.md` → produce `_posts/programming/1_post.en.md` and `_posts/programming/1_post.es.md`

If a target file already exists, read it first and ask the user whether to overwrite or skip before writing.

---

## Step 2 — Style analysis (do this before translating)

Read the entire source file and identify the following:

1. **Register**: formal, informal, or mixed? Note specific signals (use of "você/usted/you" address, sentence length, contractions, etc.).
2. **Tone**: technical, conversational, humorous, dry? Give one example sentence that best represents the tone.
3. **Person and address**: does the text address the reader directly? If so, how (e.g. second person informal "you / tu / vos / você", formal "usted", impersonal)?
4. **Any phrases that require a regional choice**: idiomatic expressions, culture-specific references, or vocabulary where Latin American Spanish variants differ meaningfully (River Plate / Rioplatense vs. generic LATAM).

Then, **before writing any file**, output a brief pre-translation report:

```
## Translation plan

Source: <path> (<language>)
Targets: <lang1> → <path1>, <lang2> → <path2>

**Register**: <formal/informal/mixed> — <brief evidence>
**Tone**: <description> — e.g. "<example sentence>"
**Reader address**: <how the reader is addressed in source>

**Style decisions I'm making:**
- [pt] <decision, e.g. "using 'você' throughout, not 'tu', because the source uses second person informally">
- [en] <decision>
- [es] <decision, e.g. "using 'vos' (Rioplatense) for informal address, as the source is informal and Uruguayan register is preferred">

**Uncertain choices — please confirm before I write the files:**
- <anything where the right call is genuinely unclear>
```

If there are uncertain choices, stop here and wait for the user to confirm before proceeding to Step 3. If everything is clear, say "Proceeding with translation — let me know if you want to adjust anything first." and continue.

---

## Step 3 — Translate

Translate the two missing variants. Strict rules:

### What to translate
- All prose text
- Front matter `title:` value (if it is a real title, not a proper noun or product name)
- Front matter `lang:` value — update it to the target language code
- Section headings (`## Heading`)
- Alt text in images

### What to never translate or modify
- Front matter keys (`layout`, `permalink`, `date`, `categories`, `tags`, etc.)
- Front matter `permalink:` value — keep the original path unchanged
- URLs and link targets (the `href` part of `[text](url)`)
- Code blocks (fenced ` ``` ` or indented), inline code (backtick), and Liquid/Jekyll tags (`{% %}`, `{{ }}`)
- Proper nouns: names of people, products, tools, companies, libraries
- File names or command names mentioned in prose

### Style rules
- Match the source's register exactly. Do not make it more formal, more polite, more literary, or more casual.
- Match sentence length and rhythm as closely as the target language allows.
- Do not add context, explanations, or parenthetical notes that are not in the source.
- Do not remove or condense content.
- Preserve all markdown formatting: bold, italic, lists, blockquotes, tables, footnotes.
- If the source has a typo or grammar error, translate the intended meaning correctly — do not carry the error across.

### Regional Spanish rules
- Prefer Uruguayan / Rioplatense vocabulary and expressions where a regional choice exists.
- Use **vos** (not tú) for informal second-person address, with the corresponding Rioplatense conjugation (e.g. "vos tenés", "vos sos", "vos sabés").
- Use **usted** only if the source text is clearly formal.
- Avoid Spain-specific vocabulary (ordenador, vosotros, etc.).

### Brazilian Portuguese rules
- Use **você** for second-person address (not tu, not o senhor/a senhora unless the source is very formal).
- Use Brazilian spelling conventions (e.g. "você" not "vocé", "ônibus" not "autocarro").
- Avoid European Portuguese vocabulary and constructions.

### American English rules
- Use American spelling (e.g. "color" not "colour", "realize" not "realise").
- Use natural, idiomatic American phrasing — avoid British idioms or overly formal constructions that would sound stiff to an American reader.

---

## Step 4 — Write the files

Create each output file. At the end, print a summary:

```
## Files written

| File | Language | Status |
|------|----------|--------|
| <path> | <lang> | created / updated |
| <path> | <lang> | created / updated |
```

If any file was skipped (user chose not to overwrite), note it with "skipped".

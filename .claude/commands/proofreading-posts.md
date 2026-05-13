Review the file provided as an argument (e.g. `/proofreading-posts _posts/my-post.md`) for language errors. If no file is given, ask the user which file to review and what the target language is.

## Your task

1. Read the file and detect the target language from context (front matter `lang:` field, or content).
2. Review every line of prose (skip YAML front matter, code blocks, URLs, and HTML tags).
3. Produce a structured report using the format below.

---

## Error codes

Assign one of the following codes to every error found:

| Code | Category | Description |
|------|----------|-------------|
| PT-VOC | Portuguese vocabulary | A Portuguese word was used instead of the target language equivalent |
| PT-STRUCT | Portuguese structure | A grammatical construction borrowed from Portuguese that does not exist in the target language |
| PT-ACC | Missing accent / diacritic | Accent mark required in the target language but absent or wrong (very common in PT→ES) |
| FALSE-FR | False friend | A word that looks like Portuguese but has a different meaning in the target language |
| AUX | Wrong auxiliary verb | Incorrect auxiliary (e.g. "hay" used instead of "ha" for the perfect tense in Spanish) |
| SYNTAX | Word order / pronoun placement | Wrong order of words, clitics, or pronouns |
| AGREE | Agreement error | Gender or number mismatch between noun, adjective, article, or verb |
| PREP | Wrong preposition | Incorrect preposition, often calqued from Portuguese |
| VOCAB | Poor word choice | The word exists but is the wrong register, overly formal, informal, or has an unintended meaning |
| SPELL | Spelling / typo | Misspelling unrelated to language interference |
| ENG | English interference | An English word or construction used instead of the target language equivalent |

---

## Report format

Start with a one-paragraph summary: target language detected, overall impression, and the dominant error pattern.

Then produce **one entry per error** in this exact format:

```
[CODE] Line <n> — "<original excerpt>"
  ✗ Wrong:   <explanation of what is wrong>
  ✓ Correct: <corrected form>
  🇧🇷 PT note: <how this compares to Brazilian Portuguese — is it a direct PT word, a PT structure, a false friend, etc.>
```

After all errors, produce two summary tables:

### Errors by line
A table with columns: Line | Code | Brief description | Correction

### Errors by category
A table with columns: Code | Category | Count | Most common example from this text

Finally, add a short **Learning tips** section (3–5 bullet points) with patterns the writer should watch for, specifically framed around the PT→[target language] transition.

---

## Review rules

- Be exhaustive: list every error, do not skip minor ones.
- Do not flag stylistic choices as errors unless they are clearly wrong.
- Do not flag proper nouns, code, URLs, or text inside backtick/code blocks.
- Preserve the exact original excerpt in quotes so the writer can locate it easily.
- If a line has multiple errors, produce one entry per error (same line number repeated).
- If the file mixes languages intentionally (e.g. a quote in another language), note it but do not flag it as an error.
- The PT note is mandatory for every error — even SPELL or ENG errors should mention whether Brazilian Portuguese has a similar issue or not.

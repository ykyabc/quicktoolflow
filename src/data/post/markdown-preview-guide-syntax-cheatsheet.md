---
title: 'Markdown Cheat Sheet with Live Preview'
excerpt: 'Learn practical Markdown syntax for headings, lists, tables, code blocks, links, images, and documentation drafts with a live preview tool.'
publishDate: 2026-05-26
category: 'Developer Tools'
tags:
  - markdown
  - writing
  - documentation
  - developer tools
  - cheatsheet
author: 'QuickToolFlow'
---

Markdown is a standard writing format for developers, technical writers, and content creators. GitHub, Stack Overflow, Reddit, and many documentation platforms all use Markdown or a Markdown-like flavor.

This cheat sheet covers every Markdown syntax you need.

## Headings

Use hash symbols for headings. More symbols mean smaller headings.

## Text Formatting

Use double asterisks for **bold text**.
Use single asterisks for _italic text_.
Use triple asterisks for **_bold and italic_**.
Use double tildes for ~~strikethrough~~.
Use backticks for inline code.

## Links

Use square brackets for the text and parentheses for the URL: [Link text](https://example.com)

## Images

Use an exclamation mark before square brackets with alt text, then parentheses with the image URL.

## Unordered Lists

Use hyphens or asterisks followed by a space for unordered list items. Indent with two spaces for nested items.

## Ordered Lists

Use numbers followed by a period and a space for ordered list items.

## Task Lists

GitHub Flavored Markdown supports task lists. Use hyphen, space, then [x] for completed or [ ] for incomplete tasks.

## Code Blocks

Use triple backticks with an optional language name for fenced code blocks with syntax highlighting. Supported languages include javascript, python, css, html, bash, json, typescript, go, rust, and many more.

## Blockquotes

Use a greater-than sign at the start of a line for blockquotes. They can be nested by adding more greater-than signs.

## Tables

Use pipes to separate columns and hyphens for the header separator row. You can align columns using colons in the separator row for left, center, or right alignment.

## Horizontal Rules

Use three hyphens, three asterisks, or three underscores on a line by themselves to create a horizontal rule.

## Escaping Characters

Use a backslash before a character to display it literally instead of interpreting it as Markdown syntax. This works for asterisks, hash symbols, square brackets, and many other special characters.

## Markdown Flavors Are Not Identical

Markdown is not one single implementation. GitHub Flavored Markdown supports tables, task lists, autolinks, and fenced code blocks. Some documentation systems add frontmatter, MDX components, admonitions, footnotes, or custom syntax.

Before publishing important documentation, preview it in the same platform where it will be rendered. A table that works on GitHub may not work the same way in a stricter Markdown parser.

## Writing Better Technical Markdown

Readable Markdown is not only about syntax. A good document should have a clear heading structure, short paragraphs, consistent list formatting, and code fences with language labels.

For example:

````markdown
```json
{
  "tool": "Markdown Preview"
}
```
````

The language label helps syntax highlighting and makes code examples easier to scan.

## Where Markdown Is Used

| Platform            | Supports                                              |
| ------------------- | ----------------------------------------------------- |
| GitHub              | Full GFM with tables, task lists, syntax highlighting |
| Stack Overflow      | GFM subset                                            |
| Reddit              | Basic Markdown                                        |
| Discord             | Basic plus code blocks                                |
| VS Code             | Full Markdown with preview                            |
| Notion              | Markdown shortcuts                                    |
| Documentation sites | Full Markdown (Docusaurus, MkDocs, Astro)             |

## Preview Markdown in Real Time

Writing Markdown blind is frustrating. Use our free [Markdown Preview](/tools/markdown-preview/) tool to write on the left and see the rendered HTML on the right instantly in your browser. It supports syntax highlighting, tables, and all standard Markdown features.

## Common Markdown Mistakes

- Skipping heading levels, such as jumping from H2 to H4
- Forgetting blank lines before lists or code blocks
- Using tables for layout instead of data
- Leaving unclosed code fences
- Pasting smart quotes into code examples
- Assuming every platform supports the same extensions

## Conclusion

Markdown is simple enough to learn in 10 minutes but powerful enough for full technical documentation. Start with the basics and add tables, code blocks, and task lists as needed. Practice with our live preview tool and you will be writing clean documentation in no time.

## Related Guides

- [SQL formatter guide](/blog/sql-formatter-guide/) helps when documentation includes readable database examples.
- [Text diff checker guide](/blog/text-diff-checker-guide/) is useful when reviewing documentation edits.
- Browse related utilities in the [Code Formatting Tools collection](/tools/code-formatting/).

## Related QuickToolFlow Tools

- [Markdown Preview](/tools/markdown-preview/) for writing and previewing Markdown side by side.
- [Word Counter](/tools/word-counter/) for checking article length and reading time.
- [Text Diff Checker](/tools/text-diff/) for comparing documentation revisions.

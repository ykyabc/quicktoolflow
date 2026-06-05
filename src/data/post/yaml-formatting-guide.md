---
title: 'YAML Formatting Guide for Config Files'
excerpt: 'Learn how YAML formatting works, why indentation matters, how lists and maps are represented, and how to avoid common configuration mistakes.'
publishDate: 2026-06-05
category: 'Developer Tools'
tags:
  - yaml
  - configuration
  - formatting
  - devops
  - developer tools
author: 'QuickToolFlow'
---

YAML is popular because it is compact and readable. You see it in CI pipelines, Docker Compose files, Kubernetes manifests, static site configs, package metadata, and documentation systems. That readability comes with a tradeoff: YAML is indentation-sensitive, and small formatting mistakes can change the meaning of a file.

Use the [YAML Formatter](/tools/yaml-formatter/) to validate and clean YAML snippets. If you need to move between formats, use the [JSON to YAML Converter](/tools/json-to-yaml/).

## YAML Is Built Around Indentation

In JSON, braces and brackets define structure. In YAML, indentation defines structure.

```yaml
site:
  name: QuickToolFlow
  tools:
    - JSON Formatter
    - YAML Formatter
```

Here, `name` and `tools` belong to `site`. The list items belong to `tools`. If the indentation changes, the structure changes.

## Maps and Lists

Most YAML files use two basic structures: maps and lists.

A map stores key-value pairs:

```yaml
name: QuickToolFlow
category: Developer Tools
```

A list stores ordered values:

```yaml
tools:
  - JSON Formatter
  - CSV Formatter
  - XML Formatter
```

Lists can contain maps:

```yaml
tools:
  - name: JSON Formatter
    category: Developer Tools
  - name: CSV Formatter
    category: Developer Tools
```

## Common YAML Formatting Rules

**Use spaces, not tabs**
Tabs can break YAML parsing. Use spaces consistently.

**Keep indentation consistent**
Two spaces per level is common. Four spaces can also work, but mixing indentation styles makes files hard to maintain.

**Quote ambiguous strings**
YAML can interpret values like `true`, `false`, `yes`, `no`, `on`, `off`, or numeric-looking strings. If a value must remain text, quote it.

```yaml
feature_flag: 'off'
zip_code: '00123'
```

**Be careful with colons**
A colon followed by a space usually starts a key-value pair. Quote strings that contain colon-space sequences.

```yaml
message: 'Status: ready'
```

## Formatting vs Preserving Comments

Many YAML formatters parse YAML and then dump it again. This is useful for validating structure and normalizing indentation, but comments may be removed because comments are not part of the parsed data model.

If comments are important, keep a source copy and use formatters mainly for validation or cleanup of generated YAML.

## YAML and JSON Are Closely Related

Most practical YAML files can be represented as JSON objects and arrays. This is why converting JSON to YAML is common for config workflows.

JSON:

```json
{
  "name": "QuickToolFlow",
  "private": true
}
```

YAML:

```yaml
name: QuickToolFlow
private: true
```

YAML is often easier for humans to edit. JSON is often easier for machines to generate and validate.

## Common Mistakes in Config Files

**Wrong indentation**
This is the most common YAML problem. A single extra space can move a value into the wrong parent object.

**Unquoted special values**
If a value looks like a boolean or number but should stay text, quote it.

**Mixed list styles**
Use block lists for readability in config files instead of squeezing everything into inline arrays.

**Duplicate keys**
Some parsers allow duplicate keys and keep only the last value. Avoid duplicates because they create confusing configuration behavior.

## Related QuickToolFlow Tools

- [YAML Formatter](/tools/yaml-formatter/) for validating and formatting YAML.
- [JSON to YAML Converter](/tools/json-to-yaml/) for moving structured data between formats.
- [JSON Formatter & Validator](/tools/json-formatter/) for checking JSON before converting it.
- [Text Diff Checker](/tools/text-diff/) for comparing config changes.

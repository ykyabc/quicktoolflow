---
title: 'Why Is My JSON Invalid?'
excerpt: 'Debug common JSON validation errors such as trailing commas, unquoted keys, single quotes, comments, bad escapes, and mismatched brackets.'
publishDate: 2026-06-10
category: 'Developer Tools'
tags:
  - json
  - validation
  - debugging
  - api
author: 'QuickToolFlow'
---

Invalid JSON is one of those problems that can waste more time than it deserves. The data may look almost right, but one small syntax issue can stop an API client, build step, config loader, or browser script from parsing it.

The good news is that JSON has a small set of rules. Once you know the common failure patterns, most errors become quick to spot.

You can paste a sample into the [JSON Formatter & Validator](/tools/json-formatter/) while working through the checks below.

## 1. Trailing Commas

JavaScript allows trailing commas in many places, but JSON does not.

Invalid:

```json
{
  "name": "Ada",
  "active": true
}
```

Valid:

```json
{
  "name": "Ada",
  "active": true
}
```

This mistake often appears when data is copied from JavaScript objects, editor snippets, or hand-written configuration files.

## 2. Single Quotes

JSON strings must use double quotes. Single quotes are invalid for both keys and string values.

Invalid:

```json
{ "name": "Ada" }
```

Valid:

```json
{ "name": "Ada" }
```

If the data came from a log line or JavaScript console output, check quotes before looking for deeper issues.

## 3. Unquoted Object Keys

JavaScript object literals can use unquoted keys, but JSON cannot.

Invalid:

```json
{ "name": "Ada", "active": true }
```

Valid:

```json
{ "name": "Ada", "active": true }
```

This is one reason JSON and JavaScript objects should not be treated as the same thing, even though they look similar.

## 4. Comments Inside JSON

Standard JSON does not support comments.

Invalid:

```json
{
  // production API endpoint
  "baseUrl": "https://api.example.com"
}
```

If you need comments, the surrounding tool may support JSONC, YAML, TOML, or another configuration format. But if a parser expects JSON, remove the comments before validating.

## 5. Bad Escape Sequences

Backslashes must be used carefully. A Windows path, regular expression, or copied string can accidentally create an invalid escape.

Invalid:

```json
{ "path": "C:\new\test" }
```

Valid:

```json
{ "path": "C:\\new\\test" }
```

This also matters when embedding quotes inside strings. If a value contains a double quote, it must be escaped.

## 6. Mismatched Brackets or Braces

Large JSON responses often fail because an array or object was not closed correctly. Formatting helps because indentation makes nesting visible.

Invalid:

```json
{
  "items": [
    { "id": 1 },
    { "id": 2 }
}
```

The array started with `[` but was never closed with `]`.

## 7. Valid JSON, Wrong Data

Sometimes the JSON is valid but still not acceptable to an application. For example:

```json
{
  "email": "not-an-email",
  "count": "10"
}
```

This parses correctly, but `count` may be the wrong type and `email` may not match the expected format. In that case, syntax validation is not enough. Use the [JSON Schema Validator](/tools/json-schema-validator/) to check the data shape against a schema.

## Debugging Workflow

First, validate the raw JSON. If it does not parse, fix syntax problems such as commas, quotes, comments, escapes, and brackets.

Second, format the JSON so nested structures are readable.

Third, check whether the data matches the expected contract. Look at required fields, types, array items, and optional values.

Finally, if the JSON will be converted to another format, such as CSV or YAML, validate before conversion. A clean source document makes every later step easier.

## Related QuickToolFlow Tools

- [JSON Formatter & Validator](/tools/json-formatter/) for finding syntax errors and formatting valid JSON.
- [JSON Schema Validator](/tools/json-schema-validator/) for checking whether valid JSON matches an expected structure.
- [JSON Path Tester](/tools/json-path-tester/) for querying nested values after the JSON parses correctly.

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

```text
{ 'name': 'Ada' }
```

Valid:

```json
{ "name": "Ada" }
```

If the data came from a log line or JavaScript console output, check quotes before looking for deeper issues.

## 3. Unquoted Object Keys

JavaScript object literals can use unquoted keys, but JSON cannot.

Invalid:

```text
{ name: "Ada", active: true }
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

## 6. Invalid Values

JSON only supports a small set of value types: object, array, string, number, boolean, and `null`.

Invalid:

```text
{
  "createdAt": new Date(),
  "score": NaN,
  "limit": undefined
}
```

Valid:

```json
{
  "createdAt": "2026-06-10T12:00:00Z",
  "score": null,
  "limit": 10
}
```

Values such as `undefined`, `NaN`, functions, dates, and comments may appear in JavaScript code, but they are not valid JSON values.

## 7. Mismatched Brackets or Braces

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

## 8. Valid JSON, Wrong Data

Sometimes the JSON is valid but still not acceptable to an application. For example:

```json
{
  "email": "not-an-email",
  "count": "10"
}
```

This parses correctly, but `count` may be the wrong type and `email` may not match the expected format. In that case, syntax validation is not enough. Use the [JSON Schema Validator](/tools/json-schema-validator/) to check the data shape against a schema.

## Syntax Validation vs Schema Validation

| Check       | Question it answers                            | Tool                       |
| ----------- | ---------------------------------------------- | -------------------------- |
| JSON syntax | Can a parser read this document?               | JSON Formatter & Validator |
| JSON schema | Does the data match expected fields and types? | JSON Schema Validator      |
| JSON path   | Can I find a nested value after parsing?       | JSON Path Tester           |
| Conversion  | Can the data become CSV or YAML cleanly?       | JSON to CSV / JSON to YAML |

Start with syntax. If the JSON cannot parse, schema validation cannot run reliably.

## Debugging Workflow

First, validate the raw JSON. If it does not parse, fix syntax problems such as commas, quotes, comments, escapes, and brackets.

Second, format the JSON so nested structures are readable.

Third, check whether the data matches the expected contract. Look at required fields, types, array items, and optional values.

Finally, if the JSON will be converted to another format, such as CSV or YAML, validate before conversion. A clean source document makes every later step easier.

## Fast Error-Spotting Checklist

When JSON fails, scan for:

- a comma after the last item
- single quotes
- unquoted keys
- comments copied from JavaScript or JSONC
- raw line breaks inside strings
- unsupported values such as `undefined`
- missing closing `]` or `}`
- Windows paths with unescaped backslashes
- text copied with smart quotes instead of normal quotes

Most invalid JSON issues are in this list. Once these are fixed, deeper data-shape problems are usually easier to diagnose.

## Related QuickToolFlow Tools

- [JSON Formatter & Validator](/tools/json-formatter/) for finding syntax errors and formatting valid JSON.
- [JSON Schema Validator](/tools/json-schema-validator/) for checking whether valid JSON matches an expected structure.
- [JSON Path Tester](/tools/json-path-tester/) for querying nested values after the JSON parses correctly.

## Related Guides

- [JSON Formatting Best Practices](/blog/json-formatting-best-practices/) for review workflows after the syntax is fixed.
- [JSON Schema Validator for APIs and Configs](/blog/json-schema-validator-guide/) for checking valid JSON against required fields.
- [Structured Data Tools](/tools/structured-data/) for related JSON, schema, path, CSV, YAML, and XML tools.

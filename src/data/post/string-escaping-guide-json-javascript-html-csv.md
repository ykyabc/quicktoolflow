---
title: 'String Escaping for JSON, JS, HTML, and CSV'
excerpt: 'Learn why string escaping matters, how JSON, JavaScript, HTML, and CSV handle special characters, and how to avoid broken code or malformed data.'
publishDate: 2026-06-05
category: 'Security'
tags:
  - string escaping
  - json
  - javascript
  - html
  - csv
author: 'QuickToolFlow'
---

String escaping changes how special characters are represented so they can be safely placed inside another format.

The tricky part is that each format has its own rules. A string that is valid in JavaScript may not be valid JSON. A value that is safe in HTML text may not be safe inside an attribute. CSV has its own quoting rules.

Use the [String Escape / Unescape](/tools/string-escape/) and [HTML Entity Encoder / Decoder](/tools/html-entity-encoder/) to test examples quickly.

## Why Escaping Exists

Text formats use certain characters for structure.

Examples:

- JSON uses double quotes around strings
- JavaScript uses quotes, backslashes, and template markers
- HTML uses `<`, `>`, `&`, and quotes
- CSV uses commas, quotes, and line breaks
- URLs use `?`, `&`, `=`, `/`, and `%`

If your data contains those characters, the parser may interpret them as syntax instead of content.

## JSON Escaping

JSON strings must use double quotes. Certain characters must be escaped with backslashes.

Example:

```json
{
  "message": "She said \"hello\""
}
```

Common JSON escapes:

| Character | Escaped form |
| --------- | ------------ |
| `"`       | `\"`         |
| `\`       | `\\`         |
| New line  | `\n`         |
| Tab       | `\t`         |

JSON does not allow single-quoted strings or unescaped control characters.

## JSON vs JavaScript Strings

JSON looks similar to JavaScript object syntax, but it is stricter. This is valid JavaScript:

```javascript
const item = { name: 'Alex' };
```

It is not valid JSON because JSON requires double-quoted property names and double-quoted strings:

```json
{ "name": "Alex" }
```

This difference matters when copying examples between API docs, browser consoles, configuration files, and application code. If an API expects JSON, use a JSON serializer or validator instead of assuming JavaScript-like syntax will work.

## JavaScript Escaping

JavaScript strings can use single quotes, double quotes, or template literals.

```javascript
const message = 'She said "hello"';
```

Template literals support interpolation:

```javascript
const text = `Hello ${name}`;
```

If you place untrusted text inside a template, you must understand whether it will be evaluated, rendered, or treated as plain text.

## HTML Escaping

HTML uses characters such as `<`, `>`, and `&` for markup.

If you want to show them as text, use entities:

| Character | Entity   |
| --------- | -------- |
| `<`       | `&lt;`   |
| `>`       | `&gt;`   |
| `&`       | `&amp;`  |
| `"`       | `&quot;` |

Escaping HTML text helps prevent markup from being interpreted as tags.

Context matters. Escaping for HTML text is not always the same as escaping for an HTML attribute, URL, CSS block, or JavaScript snippet.

## HTML Text vs HTML Attributes

Escaping depends on where the value is placed. Text content and attribute values have different risks.

Text content:

```html
<p>Tom &amp; Jerry</p>
```

Attribute value:

```html
<a title="Tom &amp; Jerry">Link</a>
```

Inside attributes, quotes matter because they can close the attribute early. When values are used in URLs inside attributes, you may need both URL encoding for the URL component and HTML escaping for the final attribute context.

This layered context is one reason template engines are safer than manual string concatenation.

## CSV Escaping

CSV escaping usually means wrapping a field in double quotes when it contains a comma, quote, or line break.

Example:

```csv
name,note
Alex,"Uses commas, quotes, and line breaks"
```

Inside a quoted CSV field, a double quote is usually represented by two double quotes:

```csv
"She said ""hello"""
```

Use the [CSV Formatter](/tools/csv-formatter/) when cleaning spreadsheet exports before conversion.

## URL Escaping

URL encoding is different from JSON, JavaScript, HTML, or CSV escaping.

For example, a space may become `%20`, and `&` may become `%26`.

Use the [URL Encoder and Decoder](/tools/url-encoder/) for query values and URL components.

## Choosing the Right Escape Method

| Destination               | Common safe approach                                     |
| ------------------------- | -------------------------------------------------------- |
| JSON response             | Use `JSON.stringify()` or a JSON serializer              |
| JavaScript string literal | Escape for the chosen quote style or use a serializer    |
| HTML text                 | Convert `<`, `>`, `&`, and sometimes quotes to entities  |
| HTML attribute            | Escape entities and handle quotes carefully              |
| CSV field                 | Quote fields that contain commas, quotes, or line breaks |
| URL query value           | Percent-encode the value                                 |

The destination is the deciding factor. Do not ask "is this string safe?" Ask "safe for which context?"

## Common Mistakes

### Mistake 1: Escaping for the wrong context

Escaping a string for JSON does not make it safe for HTML. Escaping for HTML does not make it valid CSV.

Always escape for the format you are placing the string into.

### Mistake 2: Escaping twice

Double escaping can produce visible artifacts:

```text
&amp;lt;
```

That may display as `&lt;` instead of `<`.

### Mistake 3: Building structured data by string concatenation

Prefer real serializers:

- `JSON.stringify()` for JSON
- CSV libraries for CSV
- Template engines that escape by default for HTML
- URL APIs for query parameters

Manual string building is where escaping bugs usually appear.

### Mistake 4: Decoding before validating context

Decoding makes text easier to inspect, but decoded text can contain characters that become active syntax in another format. For example, decoding `%3Cscript%3E` produces `<script>`.

That does not mean decoding is bad. It means decoded text still needs to be handled according to the context where it will be displayed or stored.

## Debugging Broken Escaping

When escaped text looks wrong, work backward:

1. Identify the final destination format.
2. Check whether the value was already escaped.
3. Decode one layer at a time.
4. Compare the raw value with the displayed value.
5. Use a real parser or formatter for the target format.
6. Avoid fixing output by adding random backslashes or entities.

Double escaping and wrong-context escaping are much more common than missing every escape entirely.

## Related QuickToolFlow Tools

- [String Escape / Unescape](/tools/string-escape/) for JSON, JavaScript, HTML, and CSV examples.
- [HTML Entity Encoder / Decoder](/tools/html-entity-encoder/) for HTML-safe text.
- [URL Encoder and Decoder](/tools/url-encoder/) for URL-safe values.

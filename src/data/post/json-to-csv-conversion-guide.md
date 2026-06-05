---
title: 'JSON to CSV: How to Convert Data Between Formats'
excerpt: 'Learn how to convert JSON data to CSV format, handle nested data, and avoid common conversion mistakes.'
publishDate: 2026-05-28
category: 'Developer Tools'
tags:
  - json
  - csv
  - data conversion
  - developer tools
  - programming
author: 'QuickToolFlow'
---

JSON and CSV are two of the most common data formats. JSON is the standard for APIs and configuration files. CSV is the standard for spreadsheets and data analysis. Converting between them is a task every developer and data analyst encounters regularly.

This guide explains the differences between JSON and CSV, shows you how to convert between them in code, and provides a free online tool for instant conversion.

For a quick browser-based workflow, use the [JSON to CSV Converter](/tools/json-to-csv/) after cleaning your input with the [JSON Formatter & Validator](/tools/json-formatter/).

---

## What Is JSON?

**JSON** (JavaScript Object Notation) is a lightweight data interchange format. It uses human-readable text to store and transmit data objects consisting of key-value pairs and arrays.

```json
[
  {
    "name": "Alice",
    "age": 30,
    "city": "New York",
    "skills": ["Python", "JavaScript"]
  },
  {
    "name": "Bob",
    "age": 25,
    "city": "London",
    "skills": ["Java", "Go"]
  }
]
```

---

## What Is CSV?

**CSV** (Comma-Separated Values) is a plain text format where each line represents a data record and each field is separated by a comma.

```csv
name,age,city,skills
Alice,30,New York,"Python; JavaScript"
Bob,25,London,"Java; Go"
```

---

## Key Differences

| Feature         | JSON                                              | CSV                                         |
| --------------- | ------------------------------------------------- | ------------------------------------------- |
| **Structure**   | Hierarchical (nested objects and arrays)          | Flat (rows and columns)                     |
| **Data types**  | Strings, numbers, booleans, null, arrays, objects | Everything is a string                      |
| **Readability** | Human-readable with formatting                    | Very simple, but no hierarchy               |
| **Use case**    | APIs, configuration, web apps                     | Spreadsheets, data import/export, databases |
| **File size**   | Larger (key names repeated per row)               | Smaller (headers only once)                 |

---

## Converting JSON to CSV

### Python

```python
import json
import csv

with open('data.json', 'r') as f:
    data = json.load(f)

if data:
    keys = data[0].keys()
    with open('output.csv', 'w', newline='') as f:
        writer = csv.DictWriter(f, fieldnames=keys)
        writer.writeheader()
        writer.writerows(data)
```

### JavaScript (Node.js)

```javascript
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

if (data.length > 0) {
  const headers = Object.keys(data[0]);
  const rows = data.map((row) => headers.map((h) => JSON.stringify(row[h] || '')).join(','));
  const csv = [headers.join(','), ...rows].join('\n');
  fs.writeFileSync('output.csv', csv);
}
```

### PHP

```php
$json = file_get_contents('data.json');
$data = json_decode($json, true);

$fp = fopen('output.csv', 'w');
if (!empty($data)) {
    fputcsv($fp, array_keys($data[0]));
    foreach ($data as $row) {
        fputcsv($fp, $row);
    }
}
fclose($fp);
```

---

## Handling Nested JSON

The biggest challenge with JSON-to-CSV conversion is nested data. CSV is flat, but JSON can have deeply nested structures. Here are the two most common strategies.

**Flatten with dot notation**

Convert nested keys into flat column names:

```json
{
  "name": "Alice",
  "address": {
    "street": "123 Main St",
    "city": "New York"
  }
}
```

Becomes:

```csv
name,address.street,address.city
Alice,123 Main St,New York
```

**Handle arrays**

Arrays within objects can be joined with a separator (like semicolons) or expanded into separate columns if the array length is known.

> Our [JSON to CSV Converter](/tools/json-to-csv/) automatically flattens nested objects with dot notation and joins array values with semicolons, producing clean, importable CSV output without any manual preprocessing.

---

## Common Pitfalls

**1. Commas in data**
Values containing commas must be quoted in CSV. Proper converters handle this automatically.

**2. Newlines in data**
Values with newlines must be quoted and may cause issues with some importers.

**3. Encoding**
Use UTF-8 encoding to preserve special characters. Some tools default to ASCII.

**4. Inconsistent keys**
If objects in the array have different keys, the converter should include all unique keys as headers.

---

## Conclusion

JSON and CSV serve different purposes, but you often need to move data between them. For quick one-off conversions, use our free online tool. For automated workflows, the Python and JavaScript examples above give you a solid starting point. Always handle edge cases like nested objects, arrays, and special characters to avoid data loss during conversion.

## Related QuickToolFlow Tools

- [JSON to CSV Converter](/tools/json-to-csv/) for converting arrays of objects into downloadable CSV files.
- [JSON Formatter & Validator](/tools/json-formatter/) for checking JSON before conversion.
- [Text Diff Checker](/tools/text-diff/) for comparing CSV or JSON output after changes.

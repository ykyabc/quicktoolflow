---
title: 'JSON to YAML: How to Convert Between Data Formats'
excerpt: 'Learn the differences between JSON and YAML, when to use each format, and how to convert between them.'
publishDate: 2026-05-29
category: 'Developer Tools'
tags:
  - json
  - yaml
  - configuration
  - devops
  - developer tools
author: 'QuickToolFlow'
---

JSON and YAML are two of the most widely used data serialization formats. JSON dominates APIs and data exchange, while YAML has become the standard for configuration files in modern DevOps tooling.

This guide compares both formats, shows conversion examples in code, and explains when to use each one.

If you want to test a conversion while reading, try the [JSON to YAML Converter](/tools/json-to-yaml/) and use the [JSON Formatter & Validator](/tools/json-formatter/) first when your input needs cleanup.

---

## What Is JSON?

**JSON** (JavaScript Object Notation) is a lightweight data interchange format that uses key-value pairs and arrays. It uses curly braces for objects, square brackets for arrays, and requires quotes around all keys and string values.

```json
{
  "server": {
    "host": "localhost",
    "port": 8080,
    "features": ["auth", "logging", "cache"]
  },
  "database": {
    "url": "postgres://localhost:5432/mydb",
    "pool_size": 10
  }
}
```

---

## What Is YAML?

**YAML** (YAML Ain't Markup Language) is a human-readable data serialization format that uses indentation to structure data. It was designed to be easy for humans to read and write.

```yaml
server:
  host: localhost
  port: 8080
  features:
    - auth
    - logging
    - cache
database:
  url: postgres://localhost:5432/mydb
  pool_size: 10
```

> The same data in both formats — YAML is noticeably cleaner and easier to read.

---

## Key Differences

| Feature               | JSON                                              | YAML                                   |
| --------------------- | ------------------------------------------------- | -------------------------------------- |
| **Syntax**            | Curly braces, square brackets, quotes             | Indentation-based, minimal punctuation |
| **Comments**          | Not supported                                     | Supported with `#`                     |
| **Data types**        | Strings, numbers, booleans, null, arrays, objects | Same, plus dates, binary, and more     |
| **Multiline strings** | Escape with `\n`                                  | Native support (`\|` and `>`)          |
| **File extension**    | `.json`                                           | `.yaml` or `.yml`                      |
| **Parsing speed**     | Faster (simpler grammar)                          | Slower (more complex grammar)          |
| **Primary use**       | APIs, data exchange, web apps                     | Configuration files, DevOps tools      |

---

## When to Use JSON

- **APIs** — JSON is the universal format for REST and GraphQL APIs.
- **Data exchange** — When transferring data between systems or services.
- **Web storage** — `localStorage`, `sessionStorage`, and cookies all use JSON.
- **Configuration in code** — When you need programmatic access to config data.

## When to Use YAML

- **Configuration files** — Docker Compose, Kubernetes manifests, GitHub Actions, Ansible playbooks.
- **Human-editable settings** — YAML's readability makes it ideal for files people edit by hand.
- **Documentation** — YAML frontmatter is used in static site generators like Astro, Jekyll, and Hugo.
- **Complex nested structures** — YAML's indentation makes deep nesting more readable than JSON.

---

## Converting JSON to YAML

### Python

```python
import json
import yaml

with open('config.json', 'r') as f:
    data = json.load(f)

with open('config.yaml', 'w') as f:
    yaml.dump(data, f, default_flow_style=False, sort_keys=False)
```

### JavaScript (Node.js)

```javascript
const fs = require('fs');
const yaml = require('js-yaml');

const data = JSON.parse(fs.readFileSync('config.json', 'utf8'));
const output = yaml.dump(data, { lineWidth: -1, noRefs: true });
fs.writeFileSync('config.yaml', output);
```

### Ruby

```ruby
require 'json'
require 'yaml'

data = JSON.parse(File.read('config.json'))
File.write('config.yaml', data.to_yaml)
```

### PHP

```php
// Using Symfony YAML component
use Symfony\Component\Yaml\Yaml;

$data = json_decode(file_get_contents('config.json'), true);
$yaml = Yaml::dump($data, 4);
file_put_contents('config.yaml', $yaml);
```

---

## Converting YAML to JSON

### Python

```python
import yaml
import json

with open('config.yaml', 'r') as f:
    data = yaml.safe_load(f)

with open('config.json', 'w') as f:
    json.dump(data, f, indent=2)
```

### JavaScript (Node.js)

```javascript
const fs = require('fs');
const yaml = require('js-yaml');

const data = yaml.load(fs.readFileSync('config.yaml', 'utf8'));
fs.writeFileSync('config.json', JSON.stringify(data, null, 2));
```

---

## Common YAML Pitfalls

**1. Use spaces, not tabs**
Tabs cause parsing errors. Stick to 2 spaces per indent level.

**2. Colons inside values need quotes**
If a value contains a colon, wrap it in quotes:

```yaml
url: 'https://example.com'
```

**3. Strings that look like other types**
Values like `true`, `false`, `null`, `yes`, `no`, and bare numbers are parsed as their native types — not strings. Quote them to keep them as strings:

```yaml
enabled: 'yes' # string, not boolean true
```

**4. Trailing spaces**
Invisible trailing spaces can cause unexpected behavior. Use a linter to catch them.

**5. Anchors and aliases**
YAML supports `&` anchors and `*` aliases for reuse, but they have no JSON equivalent and can confuse readers unfamiliar with the syntax.

---

## YAML Multiline Strings

One of YAML's clear advantages over JSON is native multiline string support:

```yaml
# Literal block: preserves line breaks exactly
description: |
  This is a multiline string
  that preserves line breaks
  exactly as written.

# Folded block: line breaks become spaces
summary: >
  This is a folded string
  where line breaks become spaces
  unless there's a blank line.
```

In JSON, the same content requires `\n` escape sequences, making it much harder to read:

```json
{
  "description": "This is a multiline string\nthat preserves line breaks\nexactly as written."
}
```

---

## Popular Tools That Use YAML

| Tool           | File                          |
| -------------- | ----------------------------- |
| Docker Compose | `docker-compose.yml`          |
| Kubernetes     | All resource manifests        |
| GitHub Actions | `.github/workflows/*.yml`     |
| GitLab CI      | `.gitlab-ci.yml`              |
| Ansible        | Playbooks and roles           |
| Travis CI      | `.travis.yml`                 |
| Hugo           | `config.yaml` and frontmatter |
| ESLint         | `.eslintrc.yml`               |
| Prettier       | `.prettierrc.yaml`            |

---

## Conclusion

JSON and YAML each have their strengths. Use JSON for APIs and data exchange where machine parsing speed matters. Use YAML for configuration files where human readability is the priority.

Understanding both formats is essential for modern web development and DevOps workflows.

## Related QuickToolFlow Tools

- [JSON to YAML Converter](/tools/json-to-yaml/) for converting configuration data between both formats.
- [JSON Formatter & Validator](/tools/json-formatter/) for validating JSON before conversion.
- [Whitespace Remover](/tools/whitespace-remover/) for cleaning copied configuration snippets.

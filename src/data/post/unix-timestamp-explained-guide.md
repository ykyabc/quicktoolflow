---
title: 'Unix Timestamp: Epoch Time Examples'
excerpt: 'Learn what Unix timestamps are, how epoch time works, and how to convert timestamps across common programming languages.'
publishDate: 2026-05-26
category: 'Developer Tools'
tags:
  - unix timestamp
  - programming
  - web development
  - time
  - developer tools
author: 'QuickToolFlow'
---

If you work with databases, APIs, or server logs, you have probably seen Unix timestamps. They appear in log files, API responses, cookies, scheduled jobs, and many storage systems.

This guide explains what Unix timestamps are, why they are useful, and how to convert them in common programming languages.

## What Is a Unix Timestamp?

A Unix timestamp is the number of seconds that have elapsed since January 1, 1970, 00:00:00 UTC. This starting point is called the Unix Epoch.

```text
1716763574
```

That value represents one exact moment in time. It does not change based on the viewer's timezone.

## Why Use Unix Timestamps?

Unix timestamps are useful because they are timezone-independent, compact, and easy to compare.

- To find the difference between two dates, subtract two timestamps.
- To add seven days, add `604800` seconds.
- To store a moment in a database, save one integer instead of a formatted string.

## Getting the Current Timestamp

| Language   | Code                                |
| ---------- | ----------------------------------- |
| JavaScript | `Math.floor(Date.now() / 1000)`     |
| Python     | `int(time.time())`                  |
| PHP        | `time()`                            |
| Java       | `System.currentTimeMillis() / 1000` |
| Go         | `time.Now().Unix()`                 |
| Ruby       | `Time.now.to_i`                     |
| Shell      | `date +%s`                          |
| MySQL      | `SELECT UNIX_TIMESTAMP(NOW())`      |
| SQLite     | `SELECT strftime('%s', 'now')`      |

## Seconds vs Milliseconds

Most Unix timestamps use seconds, but JavaScript `Date.now()` returns milliseconds.

```text
Seconds:      1716763574
Milliseconds: 1716763574000
```

If a timestamp has 13 digits, it is probably in milliseconds. If it has 10 digits, it is probably in seconds.

## UTC, Local Time, and Display

A Unix timestamp represents a moment in UTC. The same timestamp can display as different calendar dates depending on timezone.

For example, a timestamp close to midnight UTC may appear as the previous or next day for users in other regions. This is not a conversion bug. It is the difference between storing an instant and displaying that instant locally.

For APIs and databases, store timestamps in UTC. For user interfaces, convert to the user's timezone at the edge where the value is displayed.

## JavaScript Conversion

```javascript
const timestamp = 1716763574;
const date = new Date(timestamp * 1000);

console.log(date.toISOString());

const now = Math.floor(Date.now() / 1000);
```

## Python Conversion

```python
from datetime import datetime
import time

timestamp = 1716763574
dt = datetime.fromtimestamp(timestamp)
print(dt)

current_timestamp = int(time.time())
```

## PHP Conversion

```php
echo date('Y-m-d H:i:s', 1716763574);
echo strtotime('2024-05-26 22:06:14');
```

## Common Timestamp Values

| Date                                 |  Timestamp |
| ------------------------------------ | ---------: |
| Unix Epoch, January 1, 1970          |          0 |
| Y2K, January 1, 2000                 |  946684800 |
| End of 32-bit signed timestamp range | 2147483647 |

The 32-bit limit falls on January 19, 2038. Modern systems generally use 64-bit values, but older systems can still be affected by the Year 2038 problem.

## Timestamp Fields in APIs

API timestamp fields often use names such as:

- `created_at`
- `updated_at`
- `expires_at`
- `iat`
- `exp`
- `nbf`

JWT tokens commonly use `iat`, `exp`, and `nbf` as Unix timestamps in seconds. If a token appears expired too early or too late, check whether the value was treated as seconds or milliseconds.

Use the [JWT Decoder](/tools/jwt-decoder/) to inspect token claims and the [Timestamp Converter](/tools/timestamp-converter/) to convert the values.

## Practical Tips

1. Store timestamps in UTC.
2. Convert to local time only at the display layer.
3. Document whether your API uses seconds or milliseconds.
4. Validate timestamps before converting user input.
5. Be careful with date-only values, which may not represent a precise moment.
6. Include timezone information when showing readable dates in logs or reports.

## Convert Timestamps Instantly

Use the [Timestamp Converter](/tools/timestamp-converter/) to convert between Unix timestamps and readable dates. It supports seconds and milliseconds and runs in your browser.

## Conclusion

Unix timestamps are a simple, universal way to represent time in software. Once you understand seconds, milliseconds, and UTC, they become much easier to work with across APIs, databases, and logs.

## Related QuickToolFlow Tools

- [Timestamp Converter](/tools/timestamp-converter/) for converting seconds, milliseconds, UTC, and local dates.
- [Cron Expression Generator](/tools/cron-expression-generator/) for building recurring schedules.
- [JWT Decoder](/tools/jwt-decoder/) for checking token time claims such as `exp` and `iat`.

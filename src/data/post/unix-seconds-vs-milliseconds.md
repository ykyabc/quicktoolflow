---
title: 'Unix Seconds vs Milliseconds'
excerpt: 'Learn how Unix timestamps in seconds and milliseconds differ, why APIs and logs mix them, and how to detect timestamp units before conversion.'
publishDate: 2026-06-10
category: 'Converters'
tags:
  - timestamp
  - unix time
  - milliseconds
  - logs
author: 'QuickToolFlow'
---

Unix timestamps look simple until seconds and milliseconds get mixed together. One system may store `1718000000`, while another stores `1718000000000`. Both can represent a time, but they are not the same unit.

Confusing seconds with milliseconds can move a date by decades. That makes timestamp unit detection one of the first checks to run when debugging logs, exports, and API data.

Use the [Unix Timestamp Converter](/tools/timestamp-converter/) for single values and the [Timestamp Batch Converter](/tools/timestamp-batch-converter/) when you need to inspect many rows at once.

## What Unix Seconds Are

Unix time counts seconds since January 1, 1970 at 00:00:00 UTC.

A current Unix timestamp in seconds usually has 10 digits:

```text
1718000000
```

This format is common in command-line tools, databases, backend APIs, and older systems.

## What Unix Milliseconds Are

Unix milliseconds count milliseconds since the same epoch. The value is 1000 times larger:

```text
1718000000000
```

Milliseconds are common in JavaScript because `Date.now()` returns milliseconds:

```js
Date.now();
```

That one detail explains many mismatches between frontend and backend systems.

## Why the Difference Causes Bugs

If a system expects seconds but receives milliseconds, the value is much too large. If a system expects milliseconds but receives seconds, the value is much too small.

For example:

```text
1718000000      seconds
1718000000000   milliseconds
```

They point to roughly the same moment only if interpreted with the correct unit.

A common bug is multiplying or dividing twice. Another common bug is storing milliseconds in a field named `timestamp` without documenting the unit.

## Quick Ways to Detect the Unit

Digit length is the simplest clue:

- 10 digits usually means seconds
- 13 digits usually means milliseconds
- 16 digits may mean microseconds
- 19 digits may mean nanoseconds

This is a heuristic, not a full guarantee, but it works for many modern timestamps.

Another clue is the source:

- JavaScript often uses milliseconds
- Unix tools often use seconds
- some databases support multiple precisions
- analytics exports may vary by platform
- logs can mix units when services use different languages

## Time Zones Are a Separate Issue

Unix timestamps represent an instant in time. They do not store a local time zone by themselves.

When displayed, the same timestamp can be shown as UTC, local browser time, or another selected time zone. That can make a correct timestamp look wrong if you expect a different display zone.

Unit detection comes first. Time zone interpretation comes after.

## Batch Conversion Is Useful for Logs

When you inspect a single timestamp, unit detection is straightforward. In log files and CSV exports, the bigger risk is inconsistency.

For example, one column might contain seconds:

```text
created_at: 1718000000
```

Another might contain milliseconds:

```text
updated_at: 1718000000000
```

The [Timestamp Batch Converter](/tools/timestamp-batch-converter/) is useful for this kind of review because you can paste multiple values and compare the converted results together.

## Practical Debugging Checklist

When a date looks wrong:

1. Count the digits.
2. Check whether the source is frontend, backend, database, or log output.
3. Convert the value as seconds and as milliseconds.
4. Confirm the expected time zone.
5. Document the unit in field names or API docs.

Field names such as `created_at_ms` or `expires_at_seconds` are less elegant, but they prevent costly ambiguity.

## Related Formats

Not every date value is a Unix timestamp. You may also see:

- ISO 8601 strings such as `2026-06-10T12:00:00Z`
- local date strings
- database-specific date formats
- relative durations such as `3600`
- cron expressions for schedules

Use the [Cron Expression Generator](/tools/cron-expression-generator/) for recurring schedules. Use timestamp tools for points in time.

## Bottom Line

Seconds and milliseconds both count from the Unix epoch, but they use different precision. Modern second timestamps are usually 10 digits. Modern millisecond timestamps are usually 13 digits.

Before converting, storing, or comparing timestamps, confirm the unit. That one check prevents many date bugs.

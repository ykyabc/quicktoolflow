---
title: 'Timestamp Conversion for Logs and APIs'
excerpt: 'Learn how to inspect timestamps in logs and APIs, detect seconds vs milliseconds, compare events, and avoid common time zone mistakes.'
publishDate: 2026-06-10
category: 'Converters'
tags:
  - timestamp
  - logs
  - api debugging
  - time zones
author: 'QuickToolFlow'
---

Timestamps are everywhere in logs and APIs, but they are easy to misread. A value may be in seconds, milliseconds, UTC, local time, or an ISO string. If you guess wrong, a perfectly normal event can look hours, days, or decades off.

Use the [Timestamp Converter](/tools/timestamp-converter/) for one value. Use the [Timestamp Batch Converter](/tools/timestamp-batch-converter/) when you need to compare many log entries or exported rows.

## Start with the Unit

The first question is not the time zone. It is the unit.

Modern Unix timestamps often look like this:

```text
1718000000
```

That is likely seconds.

JavaScript-style timestamps often look like this:

```text
1718000000000
```

That is likely milliseconds.

If you confuse the two, the converted date will be wildly wrong. Count the digits before you analyze the event sequence.

## UTC vs Local Display

A Unix timestamp represents an instant. It does not store a local time zone by itself.

The same instant can be displayed in UTC, New York time, London time, Tokyo time, or your browser's local time. When debugging logs from servers, UTC is often the safest reference point. When debugging user-facing behavior, local display may be more relevant.

Write down which one you are using. Many "timestamp bugs" are actually display assumptions.

## Compare Events in Order

Logs often matter because of sequence:

```text
request_received
auth_checked
database_updated
response_sent
```

Batch conversion helps you compare multiple values quickly. After conversion, ask:

- are events in the expected order?
- is there an unusual gap?
- do two systems disagree about time?
- does one service use milliseconds while another uses seconds?
- did a retry create a second event later?

The goal is not just converting one value. The goal is reconstructing what happened.

## API Fields Need Clear Names

Ambiguous names such as `timestamp`, `time`, or `date` force developers to guess. Better names include the unit or format:

```text
created_at
created_at_ms
expires_at_seconds
updated_at_iso
```

If you control the API, document the format. If you consume the API, confirm the format before writing parsing logic.

## Expiration and Scheduling Bugs

Authentication, cache, and billing systems often use expiration timestamps. Unit mistakes here can be serious.

For example:

- token expires immediately because seconds were treated as milliseconds
- cache lives too long because milliseconds were treated as seconds
- scheduled task appears late because local time was confused with UTC

When debugging expiration, convert both the created time and expiration time. A single timestamp rarely tells the whole story.

## Working with CSV Exports

Exports often mix date styles:

```text
id,created_at,updated_at
1,1718000000,2026-06-10T12:00:00Z
2,1718001000000,2026-06-10T12:16:40Z
```

One column may use seconds, another milliseconds, and another ISO strings. A batch converter makes these inconsistencies easier to spot before you import or analyze the data.

Use the [CSV Formatter](/tools/csv-formatter/) first if the export has messy delimiters or quoted values.

## Practical Debugging Workflow

When a timestamp looks suspicious:

1. Copy the raw value.
2. Check digit length.
3. Convert as seconds and milliseconds.
4. Compare UTC and local display.
5. Convert nearby events.
6. Confirm the source system's documented format.
7. Add a note or field name that records the unit.

This small process prevents many false leads.

## Bottom Line

Timestamp conversion is not just about making a date readable. It is about understanding units, display zones, and event order.

When debugging logs or APIs, convert values in context. One timestamp is a clue; a sequence of timestamps tells the story.

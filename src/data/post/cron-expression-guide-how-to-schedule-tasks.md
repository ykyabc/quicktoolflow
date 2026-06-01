---
title: "Cron Expression Guide: How to Schedule Tasks with Cron Syntax"
excerpt: "Master cron expressions with this complete guide. Learn cron syntax, see common examples, understand special characters, and use our free cron generator tool."
publishDate: 2026-05-28
category: "Developer Tools"
tags:
  - cron
  - linux
  - devops
  - scheduling
  - server administration
author: "QuickToolFlow"
---

Cron is the time-based job scheduler found on virtually every Unix-like operating system. If you need to automate tasks like backups, report generation, or data cleanup, understanding cron expressions is essential.

This guide covers cron syntax, common patterns, and practical examples you can use immediately.

## What Is a Cron Expression?

A cron expression is a string of five fields that defines a schedule. Each field represents a unit of time.

| | | | |
| | | | +----- Day of week (0-6, Sunday=0)
| | | +------- Month (1-12)
| | +--------- Day of month (1-31)
| +----------- Hour (0-23)
+------------- Minute (0-59)


For example, `0 9 * * 1-5` means "at 9:00 AM, Monday through Friday."

## Cron Syntax Special Characters

### Asterisk (*)

The asterisk means "every possible value." `*` in the minute field means every minute.

### Comma (,)

The comma separates a list of values. `1,3,5` in the day-of-week field means Monday, Wednesday, and Friday.

### Hyphen (-)

The hyphen defines a range. `1-5` in the hour field means hours 1 through 5.

### Slash (/)

The slash defines a step value. `*/5` in the minute field means every 5 minutes. `0/15` means every 15 minutes starting at 0.

### Combining Characters

You can combine characters: `1,15,30` or `1-5/2` (every other value from 1 to 5).

## Common Cron Examples

Here are the most frequently used cron expressions:

### Every Minute



Use for testing or high-frequency monitoring. Avoid in production.

### Every 5 Minutes

*/5 * * * *

Good for health checks and lightweight monitoring tasks.

### Every Hour


0 * * * *

Runs at the start of every hour. Common for log rotation and cache clearing.

### Every Day at Midnight


0 0 * * *

The most common schedule for daily backups, report generation, and data cleanup.

### Every Day at 9 AM

0 9 * * *

Good for sending daily email digests or morning reports.

### Weekdays at 9 AM


0 9 * * 1-5

Business-hours tasks that should not run on weekends.

### Every Monday at 8 AM

0 8 * * 1

Weekly team reports or weekly maintenance windows.

### First Day of Every Month


0 0 1 * *

Monthly billing cycles, monthly reports, or subscription renewals.

### Every 15 Minutes Between 9 AM and 5 PM


*/15 9-17 * * *

High-frequency monitoring during business hours only.

### Twice a Day (8 AM and 6 PM)


0 8,18 * * *

Morning and evening checks or syncs.

## Where Cron Is Used

| System | Where to Define Cron Jobs |
|---|---|
| Linux/macOS | /etc/crontab or user crontab (crontab -e) |
| Docker | Use cron as the container entrypoint |
| Kubernetes | Use CronJob resource |
| GitHub Actions | Use schedule with cron syntax in workflows |
| Jenkins | Use the cron trigger in job configuration |
| AWS CloudWatch Events | Use cron expressions for scheduled rules |
| Laravel (PHP) | Define scheduled tasks in the scheduler |
| Node.js | Use node-cron package |
| Python | Use APScheduler or system crontab |

## Cron in Different Platforms

### Linux Crontab

```bash
# Edit your crontab
crontab -e

# Add a job: every day at 3 AM, run a backup script
0 3 * * * /home/user/backup.sh

# View your current crontab
crontab -l


GitHub Actions
name: Daily Cleanup
on:
  schedule:
    - cron: '0 2 * * *'
jobs:
  cleanup:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: npm run cleanup


Node.js with node-cron

const cron = require('node-cron');

// Every day at midnight
cron.schedule('0 0 * * *', () => {
  console.log('Running daily cleanup');
  cleanupDatabase();
});


Python with schedule
python
python
import schedule
import time

def job():
    print("Running daily backup")

schedule.every().day.at("03:00").do(job)

while True:
    schedule.run_pending()
    time.sleep(60)


Common Pitfalls

1.Timezone confusion. Cron jobs run in the server timezone by default. Always specify timezone if your server and target audience are in different zones.
2.Minute vs hour order. The order is always minute, hour, day, month, weekday. A common mistake is putting hour before minute.
3.Sunday value. In standard cron, Sunday is 0. Some systems use 7 for Sunday. Check your platform.
4.No year field. Standard cron has no year field. You cannot schedule something for a specific year without external logic.
5.Forgetting stderr. Cron sends email for any output. Redirect stderr to a log file.

Build Cron Expressions Visually

Memorizing cron syntax is unnecessary. Use our free Cron Expression Generator to build schedules visually. Select values for each field, see the human-readable description, and view the next 5 run times. Copy the expression when ready.


Conclusion

Cron is one of the most reliable and widely used scheduling systems in computing. Once you understand the five-field syntax and the special characters, you can express virtually any recurring schedule. Start with the common patterns above, and use a visual generator when you need more complex schedules.

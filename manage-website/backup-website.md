# Backup website

The single most important aspect of managing the website is to ensure that backups exist before making significant changes.

## Scheduled backups

Backups are scheduled to occur every day at 12:05am Pacific time. The backup retention schedule is:

- Past 12 weeks - daily backups are all retained
- Previous 40 weeks - one backup per week is retained

This means that for the past three months we can restore the web site to how it was on a particular day, and for the nine months before that we can restore the website to how it was on a particular week.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/ZM6GBFoZhh8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

::: tip Documentation
Configuring scheduled backups (2 minute read): <https://updraftplus.com/faqs/how-do-i-schedule-backups-for-my-files-and-databases/>
:::

## When a backup is needed

Some actions, such as creating or deleting test content, do not require a backup. Other actions, such as modifying the theme or updating plugins, can have significantly more dramatic effects.

It is highly recommended to create a backup before the following tasks:

- Updating, adding, or deleting a plugin
- Modifying a theme
- Modifying the menu
- Deleting content (and removing it from the recycle bin)

A backup is not necessary before:

- Creating new content
- Deleting content (but not removing it from the recycle bin)

## Running a manual backup

It is safe to rely on a scheduled backup for most purposes. However, if you are doing a lot of work on the website and wish to preserve everything you've done since 12:05am, you can run a manual backup.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MZCmAZ8rnMk?start=51" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

::: tip Documentation
Running manual backups (14 minute read overall, but focus on the "Creating Manual WordPress Backups" section): <https://www.wpbeginner.com/plugins/how-to-backup-restore-your-wordpress-site-with-updraftplus/>
:::

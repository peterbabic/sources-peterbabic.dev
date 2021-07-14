# Introduction

This repository serves as a proof-of-concept and starting point for using
[nodegit](https://github.com/nodegit/nodegit) to figure out when a file was
created and when it was last updated, not based on timestamps (atime,
ctime, mtime) but based solely on commit history.

## Motivation

The way how timestamps are set is distribution dependent. Or in other
words, they depend on `atime` option set in `/etc/fstab/`. You can read
about different options in an Arch
[wiki](https://wiki.archlinux.org/index.php/Fstab#atime_options).

The way how timestamps are read also depends on access to the filesystem,
which may or may not be avaiable. Overall, for the purpose of tracking when
a markdown file was created and updated, this is not a universal, nor a
portable solution.

## Alternatives

A common solution to this problem is to store this timestamps in a database
of some kind. But setting up a database just for the purpose of storing a
filename and it's timestamps might not be desirable. This also adds a
complexity in a form of synchronizing the filenames in the filesystem and a
database.

Of course, when the database with the timestamps is already there, one
could just store the entire markdown content in itm instead of just the
filename, but then again, you cold not write the markdown file easily with
your editor.

## Solution

In a git based workflow, the required timestamps are already stored in a
repository. According to a StackOverflow
[question](https://stackoverflow.com/questions/11533199/git-find-commit-where-file-was-added)
this can be done like this:

```bash
# get a commit where a file foo.js was created
git log --diff-filter=A -- foo.js
```

Using a `git-diff`
[documentation](https://git-scm.com/docs/git-diff#Documentation/git-diff.txt---diff-filterACDMRTUXB82308203)
we can elaborate further:

```bash
# get a commit where a file foo.js was modified
git log --diff-filter=M -- foo.js
```

This proves that the task can be done. However, ideally we need to do it
programatically, without the need for running `bash`, which could also be
OS dependent, but natively in javascript. A layer of abstraction that
servers as a wrapper of git commands would suffice, because it would
presumably be less OS dependent.

## Solution

As with the most things in a javascript world, not one, but multiple such
abstraction layers / wrappers already exists. I would not list them all
here. Instead, without any research, somehow `nodegit` appealed to me as a
best tool for the job.

Running `npm run dev` shows the dates when file `added.ts` was created and
modified based on the commit history.

## Caveat

One problem that I have found with this approach is renaming the file. We
use [fileHistoryWalk](https://www.nodegit.org/api/revwalk/#fileHistoryWalk)
for walking the commit history. It returns an array of objects of type
`<HistoryEntry>`, which looks like it is not documented in an API as of
time of writing. Each object contains a _commit_, a _date_ and a _status_
entry. The first two are easy to work with but, since it is not documented,
at first I could not find out what that _status_ means. Experimentally I
have found it correlates to the
[diff delta](https://www.nodegit.org/api/diff/#DELTA) enum.

We can see, that value 4 stands for `RENAMED`, but since, we walk the
history of just one file, and renaming actually creates two filenames in a
commit history, this results in lost data. However, when not renaming
files, it works like a charm.

## Notes

- typescript is used here instead of javascript
- [date-fns](https://github.com/date-fns/date-fns) is used for formatting
  the timestamps

## Further reading

- https://github.community/t/show-file-history-for-renamed-files/1740
- https://stackoverflow.com/questions/40957424/using-nodegit-how-can-i-find-the-date-a-given-file-was-last-updated-in-a-git-re
- https://github.com/nodegit/nodegit/issues/1116
- https://github.com/nodegit/nodegit/issues/1228
- https://github.com/nodegit/nodegit/blob/master/examples/walk-history-for-file.js
- https://stackoverflow.com/questions/51609682/nodegit-filehistorywalk-doesnt-show-merge-commit
- https://stackoverflow.com/questions/40957424/using-nodegit-how-can-i-find-the-date-a-given-file-was-last-updated-in-a-git-re:w

## License

MIT

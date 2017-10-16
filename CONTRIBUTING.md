# CONTRIBUTING

The ScrantonHacks Website project welcomes new contributors. This document will guide you
through the process.


### FORK

Fork the project [on GitHub](https://github.com/ScrantonHacks/website) and check out
your copy.

```
$ git clone https://github.com/username/website.git
$ cd website
$ git remote add upstream https://github.com/ScrantonHacks/website.git
```

In case of doubt, open an issue in the [issue tracker](https://github.com/ScrantonHacks/website/issues)
Especially do so if you plan to work on something big.  Nothing is more
frustrating than seeing your hard work go to waste because your vision
does not align with that of a project maintainers.


### BRANCH

Okay, so you have decided on the proper branch.  Create a feature branch
and start hacking:

```
$ git checkout -b my-feature-branch -t origin/master
```

### CODE

Please adhere to ScrantonHacks Website's code style. In general it follows the conventions from
the [airBNB JS Style Guide]. Some of the key points, as well as some
additional guidelines, are enumerated below.
* If creating a new component, create a new folder in `src/components/` with the name of the component.
  in that folder, should be a file with the same name as the folder, as well as index.js exporting
  the correct function from the main file (the file with the same name as the folder).

* Names should be descriptive and concise.

* Use two spaces and no tabs.

* Lines should be wrapped at 80 characters.

* When writing comments, use properly constructed sentences, including
  punctuation.

* When documenting APIs and/or source code, don't make assumptions or make
  implications about race, gender, religion, political orientation or anything
  else that isn't relevant to the project.

* Remember that source code usually gets written once and read often: ensure
  the reader doesn't have to make guesses. Make sure that the purpose and inner
  logic are either obvious to a reasonably skilled professional, or add a
  comment that explains it.


### COMMIT

Make sure git knows your name and email address:

```
$ git config --global user.name "J. Random User"
$ git config --global user.email "j.random.user@example.com"
```

Writing good commit logs is important.  A commit log should describe what
changed and why.  Follow these guidelines when writing one:

1. The first line should be 50 characters or less and contain a short
   description of the change prefixed with the name of the changed
   subsystem (e.g. "net: add localAddress and localPort to Socket").
2. Keep the second line blank.
3. Wrap all other lines at 72 columns.

A good commit log looks like this:

```
subsystem: explaining the commit in one line

Body of commit message is a few lines of text, explaining things
in more detail, possibly giving some background about the issue
being fixed, etc etc.

The body of the commit message can be several paragraphs, and
please do proper word-wrap and keep columns shorter than about
72 characters or so. That way `git log` will show things
nicely even when it is indented.
```

The header line should be meaningful; it is what other people see when they
run `git shortlog` or `git log --oneline`.

Check the output of `git log --oneline files_that_you_changed` to find out
what subsystem (or subsystems) your changes touch.


### REBASE

Use `git rebase` (not `git merge`) to sync your work from time to time.

```
$ git fetch upstream
$ git rebase upstream/v1.x  # or upstream/master
```

### PUSH

```
$ git push origin my-feature-branch
```

Go to https://github.com/username/ScrantonHacks Website and select your feature branch.  Click
the 'Pull Request' button and fill out the form.

Pull requests are usually reviewed within a few days.  If there are comments
to address, apply your changes in a separate commit and push that to your
feature branch.  Post a comment in the pull request afterwards; GitHub does
not send out notifications when you add commits.


[issue tracker]: https://github.com/ScrantonHacks/website/issues

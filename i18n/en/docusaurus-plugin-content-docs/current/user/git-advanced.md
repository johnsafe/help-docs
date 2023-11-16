---
id: git-advanced # 唯一ID
slug: /user/git/advanced # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label:  Git Pro # 在sidebar 中的名称
description: git pro # 描述
title: git pro # 页面标题
tags:
  - git
  - gir pro
hide_title: true
---

### Customize your git alias

Git has a little trick that can make your Git experience simpler, easier, and more familiar: aliases. If you don't want to type the full Git command every time, you can easily set an alias for each command through git config. Here are some examples you can try

```bash
git config --global alias.co checkout 
git config --global alias.br branch 
git config --global alias.ci "commit -s"
git config --global alias.st status
```

This means that when you want to type `git commit -s`, you only need to type `git ci`. As you continue to use Git, you'll probably use other commands frequently, so don't hesitate to create aliases. For example, to solve the ease-of-use issue of unstaged files, you can add your own unstaged alias to Git:

```bash
git config --global alias.unstage 'reset HEAD --'
```

This makes the following two commands equivalent:

```bash
git unstage fileA 
git reset HEAD -- fileA
```

This looks a little clearer. Usually a `Last` command is also added, like this:

```bash
git config --global alias.last 'log -1 HEAD'
```

This way, the last commit can be easily seen:

```bash
$ git last   
commit 66938dae3329c7aebe598c2246a8e6af90d04646 Author: Josh Goebel  <dreamer3@example.com> Date:   Tue Aug 26 19:48:51 2008 +0800      test for current head      Signed-off-by: Scott Chacon <schacon@example.com>
```

### Merge and rebase

There are two main ways to integrate changes from different branches in Git: merge and rebase.

#### merge

For the two branches, as shown below:
![图片](./img/49.jpeg)
The easiest way to merge branches is the Merge command. It will perform a three-way merge of the latest snapshots of the two branches (C3 and C4) and their most recent common ancestor (C2). The result of the merge is to generate a new snapshot (and submit it)

![图片](./img/50.jpeg)

#### Rebase

You can extract patches and modifications introduced in C4 and apply them once on top of C3. In Git, this operation is called rebase. You can use the rebase command to move all changes committed on one branch to another branch, as if "replaying".

In the above example, run:

```bash
$ git checkout experiment 
$ git rebase master 
First, rewinding head to replay your work on top of it...
Applying: added staged command
```

Its principle is to first find the most recent common ancestor C2 of the two branches (i.e. the current branch Experiment and the target base branch Master of the rebase operation), then compare the current branch's previous submissions relative to this ancestor, extract the corresponding modifications and save them as temporary files , then point the current branch to the target base C3, and finally apply the modifications previously saved as temporary files in sequence.

![图片](./img/51.jpeg)

Now go back to the master branch and perform a fast-forward merge.

```bash
git checkout master 
git merge experiment
```

![图片](./img/52.jpeg)

#### Elegantly merge branch and commit

By comparing the two merge methods, rebase's merge can make the submission history serial and look cleaner. So when merging code, some people like to rebase to complete the merge. In addition, rebase also has the function of modifying the submission history. The following will introduce how to modify the submission history through rebase.

Elegant merge code is to modify the submission history through appropriate rebase, merge multiple locally developed submissions appropriately, and then rebase the merge branch.

### Git Stash

Sometimes, you've been working on one part of a project for a while, and you want to switch to another branch to do something else. The thing is, you don't want to create a commit for half-done work just because you'll come back to this point later. The answer to this problem is the `git stash` command.

`git stash` saves unfinished changes to a stack, and you can reapply these changes at any time.

For demonstration, enter the project and modify a few files, run `git status`, and you can see the status of the changes:

```bash
$ git status 
Changes to be committed:   
(use "git reset HEAD <file>..." to unstage)   
modified:   index.html  
Changes not staged for commit:   
(use "git add <file>..." to update what will be committed)   
(use "git checkout -- <file>..." to discard changes in working directory)   
modified:   lib/simplegit.rb
```

Now that you want to switch branches, but don't want to commit yet, run `git stash` or `git stash save`:

```bash
$ git stash 
Saved working directory and index state \   
"WIP on master: 049d078 added the index file" 
HEAD is now at 049d078 added the index file 
(To restore them type "git stash apply")
```

The working directory is now clean, and the changes just made no longer exist:

```bash
$ git status 
# On branch master nothing to commit, working directory clean
```

At this point, you can easily switch branches and work elsewhere; your changes are stored on the stack. To view the staging, you can use `git stash list`:

```bash
$ git stash list 
stash@{0}: WIP on master: 049d078 added the index file 
stash@{1}: WIP on master: c264051 Revert "added file_size" 
stash@{2}: WIP on master: 21d80a5 added number to log
```

In this case, there are two previous stagings, so you are exposed to three different staging jobs. You can re-apply the work you just staged through the command in the help prompt of the original `stash` command: `git stash apply`. If you want to apply one of the older stashes, you can specify it by name, like this: `git stash apply stash@{2}`. If you don't specify a stage, Git assumes that the most recent stage is specified:

```bash
$ git stash apply 
# On branch master 
# Changed but not updated:
#   (use "git add <file>..." to update what will be committed) 
# 
#      modified:   index.html 
#      modified:   lib/simplegit.rb #
```

You can see that Git re-modified the files you undid when you staged them. You can also run `git stash pop` to apply the stash and throw it off the stack.

Stash drop can be removed by running `git stash drop` followed by the name of the stash to be removed:

```bash
$ git stash list 
stash@{0}: WIP on master: 049d078 added the index file 
stash@{1}: WIP on master: c264051 Revert "added file_size" 
stash@{2}: WIP on master: 21d80a5 added number to log 
$ git stash drop stash@{0} 
Dropped stash@{0} (364e91f3f268f0900bc3ee613f9f733e82aaed43)
```

#### Create branch from stash

If some work is staged, there may be problems when reapplying the work later. If the app tries to modify a file that was just modified, you'll get a merge conflict and have to resolve it. If you want an easy way to test stash changes again, you can run `git stash branch` to create a new branch, check out the commit where you staging your work, reapply your work there, and then throw away when the application succeeds:

```bash
$ git stash branch testchanges 
Switched to a new branch "testchanges" 
# On branch testchanges
# Changes to be committed: 
#   (use "git reset HEAD <file>..." to unstage) 
# 
#      modified:   index.html 
# 
# Changed but not updated: 
#   (use "git add <file>..." to update what will be committed) 
# 
#      modified:   lib/simplegit.rb # Dropped refs/stash@{0} (f0dfc4d5dc332d1cee34a634182e168c4efc3359)
```

This is a great way to easily resume staged work in a new branch and continue working.

### Modify commit history

Many times when working with Git, you may want to correct your commit history for some reason. The great thing about Git is that it allows you to make last-minute decisions. You can rewrite commits that have already occurred as if they had occurred another way. This may involve changing the order of commits, changing information in commits or modifying files, compressing or splitting commits, or removing commits entirely - before sharing your work with others.

In this section, you can learn how to do these very useful things so that when you share your work with others, your commit history will appear as you want.

#### Modify last commit

Modifying your most recent commit is probably the most common of all modifications to past commits. With your latest commit, you often want to do two things: modify the commit message, or modify the snapshot of the files you added, modified, and removed.

If you just want to modify the commit information of the most recent commit, it's very simple:

```bash
git commit --amend
```

This will bring you into a text editor, which contains your most recent commit information for you to modify. When you save and close the editor, the editor will replace the most recent commit message with the content you entered.

If you have completed the submission and want to change the submitted snapshot by adding or modifying the file because you forgot to add a newly created file during the previous submission, you can also do this through a similar operation. By modifying the file and then running git add or git rm on a tracked file, then running git commit --amend takes the current staging area and makes it a snapshot of the new commit.

Be careful when using this trick, as the fix will change the SHA-1 checksum of the commit. It's similar to a small rebase - don't fix the last commit if it's already been pushed.

#### Modify multiple commits

In order to modify commits that are farther in the commit history, more sophisticated tools must be used. Git does not have a change history tool, but you can use the rebase tool to rebase a series of commits based on their original HEAD instead of moving them to a new one. With the interactive rebase tool, you can stop after any commit you want to modify, and then modify the information, add files, or do whatever you want. You can run rebase interactively by adding the -i option to git rebase. You must specify how far back in history you want to rewrite, which you can do by telling the command the commits you want to rebase to.

For example, if you want to modify the last three commit information, or any commit information in that group of commits, pass the parent commit of the latest commit you want to modify as a parameter to the git rebase -i command, that is, HEAD~2^ or HEAD ~3. It's probably easier to remember ~3 since you're trying to modify the last three commits; but note that you actually specify the previous four commits, the parent commits of the commits you want to modify:

```bash
git rebase -i HEAD~3
```

Again, remember this is a rebase command - every commit in the HEAD~3..HEAD range will be rewritten, regardless of whether you modified the information. Don't involve any commits that have already been pushed to the central server - doing so will produce two versions of one change, thus confusing others. Running this command will give you a list of commits in a text editor that looks like this:

```bash
pick f7f3f6d changed my name a bit 
pick 310154e updated README formatting and added blame 
pick a5f4a0d added cat-file  
# Rebase 710f0f8..a5f4a0d onto 710f0f8 
# 
# Commands: 
#  p, pick = use commit 
#  r, reword = use commit, but edit the commit message 
#  e, edit = use commit, but stop for amending 
#  s, squash = use commit, but meld into previous commit 
#  f, fixup = like "squash", but discard this commit's log message 
#  x, exec = run command (the rest of the line) using shell 
# 
# These lines can be re-ordered; they are executed from top to bottom. 
# 
# If you remove a line here THAT COMMIT WILL BE LOST. 
# 
# However, if you remove everything, the rebase will be aborted. 
# 
# Note that empty commits are commented out
```

It's important to note that these commits are displayed in the reverse order relative to normal use of the log command. Run the log command once and you will see something like this:

```bash
$ git log --pretty=format:"%h %s" HEAD~3..HEAD 
a5f4a0d added cat-file 
310154e updated README formatting and added blame 
f7f3f6d changed my name a bit
```

Note the reverse order. Interactive rebase gives you a script that it will run. It will start from the commit you specified on the command line (HEAD~3), and replay the changes introduced by each commit in order from top to bottom. It lists the oldest instead of the newest because that will be the first one that will be repeated.

You need to modify the script so that it stays on the changes you want to make. To do this, just change 'pick' to 'edit' before each commit you want to modify. For example, if you only want to modify the third commit information, you can modify the file as follows:

```bash
edit f7f3f6d changed my name a bit 
pick 310154e updated README formatting and added blame 
pick a5f4a0d added cat-file
```

When you save and exit the editor, Git takes you back to the last commit in the list, sending you back to the command line with the following message:

```bash
$ git rebase -i HEAD~3 
Stopped at f7f3f6d... changed my name a bit 
You can amend the commit now, with
         git commit --amend  
Once you’re satisfied with your changes, run
         git rebase --continue
```

These instructions tell you exactly what to do. enter

```bash
git commit --amend
```

Modify the commit information and exit the editor. Then, run

```bash
git rebase --continue
```

This command will automatically apply the other two commits and then you're done. If you need to change pick to edit in more than one place, you need to repeat these steps for each commit that is modified to edit. Each time, Git will stop, let you fix the commit, and then continue until it's complete.

#### Reorder commits

It is also possible to use interactive rebase to reorder or remove commits entirely. If you want to remove the "added cat-file" commit and change the order in which the other two commits are introduced, you can change the rebase script like this:

```bash
pick f7f3f6d changed my name a bit 
pick 310154e updated README formatting and added blame pick 
a5f4a0d added cat-file
```

turn it into:

```bash
pick 310154e updated README formatting and added blame 
pick f7f3f6d changed my name a bit
```

When you save and exit the editor, Git takes your branch back to the parent of those commits, applies 310154e, then f7f3f6d, and finally stops. This actually changes the order of those commits and completely removes the "added cat-file" commit.

#### Compress commits

Through interactive rebase tools, a series of commits can also be compressed into a single commit. The script gives useful instructions in the rebase message:

```bash
# 
# Commands: 
#  p, pick = use commit 
#  r, reword = use commit, but edit the commit message 
#  e, edit = use commit, but stop for amending 
#  s, squash = use commit, but meld into previous commit 
#  f, fixup = like "squash", but discard this commit's log message 
#  x, exec = run command (the rest of the line) using shell 
# 
# These lines can be re-ordered; they are executed from top to bottom. 
# 
# If you remove a line here THAT COMMIT WILL BE LOST. 
# 
# However, if you remove everything, the rebase will be aborted. 
# 
# Note that empty commits are commented out
```

If you specify "squash" instead of "pick" or "edit", Git will apply the changes from both and merge the commit information together. So, if you want these three submissions to be turned into one submission, you can modify the script like this:

```bash
pick f7f3f6d changed my name a bit squash 
310154e updated README formatting and added blame squash 
a5f4a0d added cat-file
```

When you save and exit the editor, Git applies all three changes and puts you in the editor to merge the three commits:

```bash
# This is a combination of 3 commits. 
# The first commit's message is: changed my name a bit  
# This is the 2nd commit message:  updated README formatting and added blame  
# This is the 3rd commit message:  added cat-file
```

When you save, you have one commit that contains all the changes from the previous three commits.

#### Split commit

Splitting a commit undoes the commit, then stages and commits parts of it as many times as you want until you have completed as many commits as you need. For example, suppose you want to split the middle of three commits. Want to split it into two commits: the first "updated README formatting" and the second "added blame" instead of the original "updated README formatting and added blame". This can be done by modifying the `rebase -i` script, changing the command of the commit to be split to "edit":

```bash
pick f7f3f6d changed my name a bit edit 
310154e updated README formatting and added blame pick 
a5f4a0d added cat-file
```

Then, when the script drops you into the command line, reset that commit, get the reset changes, and create a few commits from them. When you save and exit the editor, Git takes you to the parent commit of the first commit in the list, applies the first commit (f7f3f6d), applies the second commit (310154e), and then drops you into the command line. There, you can do a hybrid reset of that commit with `git reset HEAD^`, which will actually undo that commit and leave the modified files unstaged. You can now stage and commit the file until there are a few commits, and then run `git rebase --continue` when complete:

```bash
git reset HEAD^ 
git add README 
git commit -m 'updated README formatting' 
git add lib/simplegit.rb 
git commit -m 'added blame' 
git rebase --continue
```

Git applies the last commit (a5f4a0d) in the script and the history looks like this:

```bash
$ git log -4 --pretty=format:"%h %s" 
1c002dd added cat-file 
9b29157 added blame 35cfb2b updated README formatting 
f3cc40e changed my name a bit
```

Again, these change the SHA-1 checksums of all commits in the list, so make sure the commits in the list haven't been pushed to the shared repository yet.

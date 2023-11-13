---
id: repo-capacity # 唯一ID
slug: /repo/capacity # URL(最多三级结构，便于seo 和理解，遵循doc/资源/具体说明项 的原则)
sidebar_label: Repo Capacity # 在sidebar 中的名称
title: Repo Capacity # 页面标题
tags:
  - capacity
  - Repo Capacity
hide_title: false
---

This article explains codebase capacity limits and how to clean up codebase capacity.

#### 1. Is there a limit to the repository storage capacity?

By default, a repository has 2GB Git storage space and 5GB LFS storage space.
> What is  Git LFS? See [LFS](../repo/lfs.md)。

#### 2. How to clean up repo capacity？

In order to ensure that platform resources are not maliciously abused and ensure a smooth user experience for each user, it is recommended that the Git data of a single code base be kept within 2GB. For large binary files, please use Git LFS large file storage management.

When the capacity of a single code base is about to reach the recommended threshold, you need to clean up the capacity yourself. It is strongly recommended to switch binary files to LFS storage to increase the speed of code push and pull. The daily use process will not be affected after the switch.

##### Capacity has not reached the upper limit

In order not to affect your daily research and development work, when the capacity reaches 90% of the storage limit, developers are recommended to clean up the warehouse capacity in time. When the capacity exceeds the upper limit, write operations will be prohibited and files will not be deleted.

* File cleaning: As a developer, please delete unnecessary files in time to release warehouse capacity.
* GC Cleanup: As a code base administrator, click Library Settings - Basic Settings to use the library GC function when the code base is close to the storage limit to compress repository objects, reduce disk usage, and improve the efficiency of reading and writing the warehouse.
* LFS space cleanup: Use LFS to manage binary files. When deleting Git source files, the LFS resource files will not be deleted together and still occupy LFS storage space. You need to manually clean up the LFS resource files. The library administrator clicks on the code library settings to see the large file storage menu. Check the files you want to delete and then delete them.

##### Capacity reached the upper limit

When the recommended capacity limit is reached, the platform will temporarily lock the write operation permission of the warehouse. At this time, only GC optimization of the library capacity is allowed in the library settings.

#### 3.How to clean large Git files in the code base?

If a large number of binary files are submitted in the code base, the capacity of the code base may exceed the limit and cannot be written, or a single file may be too large and exceed the single file size limit and cannot be written.

At this time, it is recommended to clean up the historical large files of the submitted code base, and then use Git-LFS to store and manage the large files.To know more about "Git Big file to LFS" ,see [LFS](../repo/lfs.md)。

##### Data Backup

The cleanup operation will rewrite the code base submission history and clear large historical files. It is recommended to clone the remote code base and back it up locally first.

##### Tools

Cleaning large files in the warehouse requires modifying the submission history of the warehouse. git-filter-repo is a tool recommended by the official Git community to modify the submission history of the warehouse. This article introduces how to use git-filter-repo to clean large files in the warehouse.

For installation methods, please refer to [git-filter-repo install](https://github.com/newren/git-filter-repo/tree/main/contrib/filter-repo-demos)，or use command below:

```shell
pip3 install git-filter-repo
```

##### Clone bare repo

Clone the bare repo to be processed, taking the HTTP protocol as an example:

```shell
git clone --mirror --bare HTTPs://atomgit.com/example/example.git
```

##### Clean large files

Enter:

```shell
cd example.git
```

git-filter-repo supports three methods of cleaning large files: by file size, path, or by file blob ID. The following uses examples to explain its use in detail.

* by file size

If you want to clean files larger than 100M, execute the following command:

```shell
git filter-repo --strip-blobs-bigger-than 100M
```

--strip-blobs-bigger-than Parameters support three units: K, M and G. For example, 100M here can also be replaced by 10K, 1G, etc.

* by file path

If the path to a large file is known, you can clean the associated large file by combining the --path and --invert-paths parameters. For example, to delete the path/of/large/file.lib file and bin/ directory from the repository's commit history, you can execute the following command:

```shell
git filter-repo --path path/of/large/file.lib --path /bin/ --invert-paths
```

The combination of these two parameters can retain all files/directories except the directory/file specified by --path, that is, clear all directories/files specified by --path from the historical submissions of the warehouse.

* by file blob ID

If the blob ID of a large file is known, you can write the blob ID of the large file into a file, for example, write the following large file blob IDs in the file ids.txt

```shell
e152814d14939a20f5399acf80b606ad018f872a
b747204ba81985a3f41314ef55d4c4a24868ede2
```

then execute:

```shell
 git filter-repo  --strip-blobs-with-ids ids.txt
```

##### Update server repository

First update the example.git warehouse configuration and execute the following command in example.git

```shell
git config remote.origin.mirror false
```

Use the local repository after removing large files to force update the remote repository

```shell
git push -u origin refs/heads/*:refs/heads/* -f
git push -u origin refs/tags/*:refs/tags/* -f
```

##### Check the remote update effect

On the login repository page, confirm that the relevant large files of the corresponding code base have been cleared from the submission history of each branch.

##### Clean the warehouse immediately

After performing the above operations, due to the waiting period for cleanup, the size of the server warehouse may not change significantly at this time.

To take effect immediately, the warehouse administrator needs to click "Clean Now" of the repository GC in the "Settings" of the warehouse and select "Delete Now". After the cleanup operation is completed, the relevant large files will be completely cleared from the server warehouse.

#### 4. How to clean up the large file space introduced by Agit centralized review?

With change requests created in push review mode, the source commit may carry large files.

When the review is not merged, the submission carrying the large file will not exist in any existing branches and tags in the warehouse, but will exist in the special reference generated by the review (used to keep the source submission from being recycled during the review, refer to Git (Principle of GC)), so even if review is turned off and GC is forced, the size of the server-side warehouse cannot be cleared.

##### Solutions

1. Find the review page where the large file was imported. If the review is open, please close it first;

2. Find the special references generated by the review, as shown below:

* Case1: The locally created review information is still there, and the special reference is obtained directly on the local client.

As shown above: In the feedback information when the command line is created, the last line -> the reference on the right is the special reference generated by the review: refs/merge-requests/1367177/head

* Case2: The locally created review information is not available. Search the review ID through the page and splice the special reference: refs/merge-requests/:ID/head

As shown in the figure above, the number after merge_request in the current page address is the review ID, which is: 1367177. At this time, the review reference is: refs/merge-requests/1367177/head

In addition, you need to obtain the review staging reference:

Click the commit ID of the review source, such as 63492734 in the picture above. Click Copy commit ID on the commit details page, as shown below:

here is ：6349273477adaa3b9d18fea9033fe01f26656a1d，Then the temporary reference of the review is：refs/keep-around/6349273477adaa3b9d18fea9033fe01f26656a1d

3. Remove special references via command line

```shell
cd your_local_repository
git push origin :refs/merge-requests/1367177/head
git push oriign :refs/keep-around/6349273477adaa3b9d18fea9033fe01f26656a1d
```

4. In the storage space management - repository GC on the warehouse settings page, select "Clean Now" and select "Delete Now" for the cleanup policy.

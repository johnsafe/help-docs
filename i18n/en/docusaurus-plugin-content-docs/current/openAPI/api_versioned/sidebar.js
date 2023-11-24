module.exports = [{"type":"doc","id":"openAPI/api_versioned/atomgit-openapi"},{"type":"category","label":"User Account","link":{"type":"doc","id":"openAPI/api_versioned/user"},"items":[{"type":"doc","id":"openAPI/api_versioned/get-the-authenticated-user","label":"getTheAuthenticatedUser","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-user-by-username","label":"getUserByUsername","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/list-email","label":"listEmail","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-user-followers","label":"getUserFollowers","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-user-followers-by-username","label":"getUserFollowersByUsername","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-user-following","label":"getUserFollowing","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-the-following","label":"getTheFollowing","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/add-fans","label":"addFans","className":"api-method put"},{"type":"doc","id":"openAPI/api_versioned/del-fans","label":"delFans","className":"api-method delete"},{"type":"doc","id":"openAPI/api_versioned/has-this-fans","label":"hasThisFans","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/has-the-fans","label":"hasTheFans","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/list-key","label":"listKey","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/add-key","label":"addKey","className":"api-method post"},{"type":"doc","id":"openAPI/api_versioned/del-key","label":"delKey","className":"api-method delete"}]},{"type":"category","label":"Organization","link":{"type":"doc","id":"openAPI/api_versioned/org"},"items":[{"type":"doc","id":"openAPI/api_versioned/org-page-list","label":"orgPageList","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/org-detail","label":"orgDetail","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/update-org","label":"updateOrg","className":"api-method patch"},{"type":"doc","id":"openAPI/api_versioned/user-org-page-list","label":"userOrgPageList","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/user-org-invitation","label":"userOrgInvitation","className":"api-method post"},{"type":"doc","id":"openAPI/api_versioned/org-members","label":"orgMembers","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/org-member-check","label":"orgMemberCheck","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/org-member-delete","label":"orgMemberDelete","className":"api-method delete"},{"type":"doc","id":"openAPI/api_versioned/org-member-role","label":"orgMemberRole","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/set-org-member-role","label":"SetOrgMemberRole","className":"api-method put"},{"type":"doc","id":"openAPI/api_versioned/get-org-followers","label":"getOrgFollowers","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-org-memberships","label":"getOrgMemberships","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-org-repos","label":"getOrgRepos","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-user-belong-org","label":"getUserBelongOrg","className":"api-method get"}]},{"type":"category","label":"Branch","link":{"type":"doc","id":"openAPI/api_versioned/branches"},"items":[{"type":"doc","id":"openAPI/api_versioned/get-branch","label":"getBranch","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-branch-list","label":"getBranchList","className":"api-method get"}]},{"type":"category","label":"Commits","link":{"type":"doc","id":"openAPI/api_versioned/commits"},"items":[{"type":"doc","id":"openAPI/api_versioned/get-ref-commit","label":"getRefCommit","className":"api-method get"}]},{"type":"category","label":"Commit Status","link":{"type":"doc","id":"openAPI/api_versioned/commit-statuses"},"items":[{"type":"doc","id":"openAPI/api_versioned/get-combined-commit-statuses","label":"getCombinedCommitStatuses","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/create-commit-statuses","label":"CreateCommitStatuses","className":"api-method post"}]},{"type":"category","label":"Repository Content","link":{"type":"doc","id":"openAPI/api_versioned/repository-contents"},"items":[{"type":"doc","id":"openAPI/api_versioned/get-repo-conent","label":"GetRepoConent","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/save-repo-conent","label":"SaveRepoConent","className":"api-method put"},{"type":"doc","id":"openAPI/api_versioned/delete-repo-conent","label":"DeleteRepoConent","className":"api-method delete"}]},{"type":"category","label":"Change Request","link":{"type":"doc","id":"openAPI/api_versioned/change-requests"},"items":[{"type":"doc","id":"openAPI/api_versioned/create-change-request","label":"CreateChangeRequest","className":"api-method post"},{"type":"doc","id":"openAPI/api_versioned/get-change-request","label":"GetChangeRequest","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/create-change-request-comment","label":"CreateChangeRequestComment","className":"api-method post"},{"type":"doc","id":"openAPI/api_versioned/create-change-request-reply","label":"CreateChangeRequestReply","className":"api-method post"},{"type":"doc","id":"openAPI/api_versioned/get-change-request-comment","label":"GetChangeRequestComment","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-change-reques-comment-list","label":"GetChangeRequesCommentList","className":"api-method get"}]},{"type":"category","label":"Change Request-Automated Inspection","link":{"type":"doc","id":"openAPI/api_versioned/check-runs"},"items":[{"type":"doc","id":"openAPI/api_versioned/create-check-run","label":"CreateCheckRun","className":"api-method post"},{"type":"doc","id":"openAPI/api_versioned/get-check-run","label":"GetCheckRun","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/update-check-run","label":"UpdateCheckRun","className":"api-method patch"}]},{"type":"category","label":"Issues","link":{"type":"doc","id":"openAPI/api_versioned/issues"},"items":[{"type":"doc","id":"openAPI/api_versioned/get-user-issues-list","label":"GetUserIssuesList","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-repo-issues-list","label":"GetRepoIssuesList","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/create-repo-issue","label":"CreateRepoIssue","className":"api-method post"},{"type":"doc","id":"openAPI/api_versioned/get-repo-issue-info","label":"GetRepoIssueInfo","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/patch-repo-issue-info","label":"PatchRepoIssueInfo","className":"api-method patch"},{"type":"doc","id":"openAPI/api_versioned/lock-repo-issue","label":"LockRepoIssue","className":"api-method put"},{"type":"doc","id":"openAPI/api_versioned/un-lock-repo-issue","label":"unLockRepoIssue","className":"api-method delete"},{"type":"doc","id":"openAPI/api_versioned/get-repo-assignees","label":"GetRepoAssignees","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/check-repo-assignee","label":"CheckRepoAssignee","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/set-issue-assignee","label":"SetIssueAssignee","className":"api-method post"},{"type":"doc","id":"openAPI/api_versioned/clear-issue-assignee","label":"ClearIssueAssignee","className":"api-method delete"},{"type":"doc","id":"openAPI/api_versioned/get-current-user-org-issues","label":"GetCurrentUserOrgIssues","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-single-label-by-name","label":"getSingleLabelByName","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-issue-labels","label":"getIssueLabels","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-single-milestones","label":"getSingleMilestones","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-repo-all-milestones","label":"getRepoAllMilestones","className":"api-method get"}]},{"type":"category","label":"Issues comment","link":{"type":"doc","id":"openAPI/api_versioned/issues-comment"},"items":[{"type":"doc","id":"openAPI/api_versioned/get-issue-comments-list","label":"GetIssueCommentsList","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/create-issue-comment","label":"CreateIssueComment","className":"api-method post"},{"type":"doc","id":"openAPI/api_versioned/get-issue-comment-info","label":"GetIssueCommentInfo","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/update-issue-comment","label":"UpdateIssueComment","className":"api-method patch"},{"type":"doc","id":"openAPI/api_versioned/delete-issue-comment","label":"DeleteIssueComment","className":"api-method delete"},{"type":"doc","id":"openAPI/api_versioned/get-repo-all-issue-comments","label":"GetRepoAllIssueComments","className":"api-method get"}]},{"type":"category","label":"activity","link":{"type":"doc","id":"openAPI/api_versioned/activity"},"items":[{"type":"doc","id":"openAPI/api_versioned/user-events-list","label":"User Activity","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/user-received-events-list","label":"userReceivedEventsList","className":"api-method get"}]},{"type":"category","label":"WebHooks","link":{"type":"doc","id":"openAPI/api_versioned/web-hooks"},"items":[{"type":"doc","id":"openAPI/api_versioned/get-repo-web-hooks","label":"getRepoWebHooks","className":"api-method get"},{"type":"doc","id":"openAPI/api_versioned/get-single-web-hook","label":"getSingleWebHook","className":"api-method get"}]}];
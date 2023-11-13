---
slug: /oauth/
title: 'OAuth App'
sidebar_position: 1
hide_title: true
---

## OAuth App

> OAuth2 is a protocol that allows external applications to request authorization to access private information in a user's AtomGit account without using a password. This protocol takes precedence over Basic Authentication because tokens may be restricted to specific types of data and can be revoked by the user at any time.

OAuth applications use AtomGit as the identity provider to authenticate as the user who is granting access to the application. This means that when a user grants access to an OAuth app, they are granted access to their account's basic information, all code libraries their account has access to, and any organizations they are a member of that have not blocked third-party access.

## Tips

1. A user or organization can have up to 100 OAuth applications.
2. OAuth applications should always act on behalf of the authenticated AtomGit user in all AtomGit (for example, when providing user notifications).
3. The OAuth application can be used as an identity provider by enabling "Login with AtomGit" for authenticated users.
4. If you are using an OAuth application with AtomGit Actions and want to modify a workflow file, the OAuth token must have workflow scope and the user must have owner or write permissions on the repository containing the workflow file. For more information, see Understanding the Scope of an OAuth App.

> Note that an OAuth app is an application that needs to be hosted somewhere.

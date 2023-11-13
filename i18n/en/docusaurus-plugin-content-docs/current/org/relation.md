---
id: org-relation
slug: relate
title: Relate Organization # 页面标题
sidebar_lable: Relate Organization
hide_title: true
---

## Relate Organization

In AtomGit, relations between different organizations are allowed. Currently, only one-way, single-level relations such as "parent organization-child organization" are supported:

- An organization can be related with only one parent organization as a child organization
- If an organization already has related sub-organizations, it can no longer relate or apply to relate with the parent organization.

In organizations with relationships, the parent organization will have an [Organization] module and a [Organization Members] list page, which are used to display the child organization information of the parent organization; the child organization will have an [Organization] module, which is used to display the child organization information. Displays the parent organization information of the child organization.

In addition, you can cancel existing organization relation in the following ways:

- The child organization exits the related parent organization
- The parent organization removes the related child organization

### Apply for organization relation

You can apply for organization relation in the following ways (related with parent organization, related with child organization)

1. Open the [Organization-Organization Settings] page
2. Click [Member Organization]
3. Click the [Add] button
4. Select the type of relate application (related with parent organization, related with child organization)
5. Enter the organization name and organization Path to search for the organization you want to apply for relation with.
6. Click the [OK] button to submit the organization relation application
7. After submitting the application, the system will send an email notification to the administrator of the organization being applied for. After the administrator approves the application, an organizational relation relationship can be established between the two organizations.

> Note 1: After clicking [OK], the system will check the existing organizational relation between the current applicant organization and the applied organization to ensure that a one-way, single-level organizational relation can be formed between the two organizations.
> Note 2: If the current organization is a [sub-organization], associate application cannot be made, and the [Add] button will be unavailable.

### View applies

When another organization sends an relate application to your organization, we will notify all administrators of your organization via email notification. Administrators can view and process the application in the following two ways:

1. Click the [View Application] link in the body of the email to jump to the application details page. The details page includes information about the applicant organization and the relationship type related with the application.
2. The organization administrator enters the [Organization-Organization Settings-Member Organization] page and clicks the [Apply] button to enter the application list and view the application

In the second method, the application list contains all organization-related applications related to the current organization, including:

- For organization related applications initiated by the current organization but not yet passed, the [Cancel Application] operation is supported.
- Organization related applications initiated by other organizations to the current organization but not yet processed can support [View Application] and enter the application details page for processing (by applying or rejecting the application)

### Disrelate

You can resolve existing organizational relationships in the following ways:

1. Open the [Organization-Organization Settings] page
2. Click the [Member Organization] button to view the list of organization members
3. If the current organization is a parent organization, the sub-organizations related with the current organization will be listed in the list. You can click [Remove Member] to remove the relation with one or more sub-organizations.
4. If the current organization is a sub-organization, the only parent organization related with the current sub-organization will be listed in the list. You can click [Exit Organization] to remove the relation with the parent organization.

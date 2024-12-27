# Development Flow

**We don't work directly on master or staging branch. We need to create a new branch for each task. The new branch should derive from `master` branch.**

## Branching model
Define how you want your branches to be named, and specify your development and production branches, to help us suggest source and target branches.

Branch prefixes
Define the default prefixes for new branches, to allow automated workflows and make branch types clearer.

### 1. Feature branch
Used for specific feature work or improvements. Generally branches from, and merges back into, the development branch, using pull requests.

`feature/{{jira-task-number}}-{{short-description}}`

For example, `feature/FL-16-cart-changes`

### 2. Bugfix branch
Typically used to fix Release branches.

`bugfix/{{jira-task-number}}-{{short-description}}`

For example, `bugfix/FL-165-cannot-create-credit-memo`

### 3. Hotfix branch
Used to quickly fix a Production branch without interrupting changes in the development branch. In a Gitflow-based workflow, changes are usually merged into the production and development branches.

`hotfix/{{jira-task-number}}-{{short-description}}`

For example, `hotfix/FL-165-catch-exception-when-payment-failed`

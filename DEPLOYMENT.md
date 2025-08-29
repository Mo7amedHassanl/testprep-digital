# Deploying Your Application with GitHub and Firebase App Hosting

This guide will walk you through the process of deploying your Next.js application using a GitHub repository and Firebase App Hosting. This setup enables Continuous Deployment (CD), meaning your application will automatically redeploy whenever you push changes to your GitHub repository.

## Prerequisites

*   A [GitHub](https://github.com/) account.
*   A [Google Cloud](https://cloud.google.com/) account with billing enabled.
*   The [Firebase CLI](https://firebase.google.com/docs/cli) installed on your local machine.

---

## Step 1: Create a GitHub Repository

First, you need a place to store your code on GitHub.

1.  Go to [github.com/new](https://github.com/new) to create a new repository.
2.  Give it a name (e.g., `testprep-digital`).
3.  You can make it public or private.
4.  Click **Create repository**.

---

## Step 2: Push Your Code to GitHub

Now, let's upload your local application code to the new GitHub repository.

1.  Initialize a Git repository in your project folder if you haven't already:
    ```bash
    git init
    git add .
    git commit -m "Initial commit"
    ```

2.  Link your local repository to the one you created on GitHub. Replace `<YOUR_GITHUB_REPO_URL>` with the URL you copied from GitHub (it looks like `https://github.com/your-username/your-repo-name.git`):
    ```bash
    git remote add origin <YOUR_GITHUB_REPO_URL>
    git branch -M main
    ```

3.  Push your code to the `main` branch on GitHub:
    ```bash
    git push -u origin main
    ```

---

## Step 3: Set up Firebase App Hosting

Next, we will configure Firebase App Hosting to automatically build and deploy your app from your GitHub repository.

1.  **Login to Firebase**:
    ```bash
    firebase login
    ```

2.  **Initialize App Hosting**: In your project's root directory, run the following command:
    ```bash
    firebase apphosting:backends:create
    ```

3.  **Follow the Prompts**:
    *   When asked, select the Firebase project you've been using (`testprep-digital`).
    *   Choose a location for your backend (e.g., `us-central1`).
    *   When prompted to **"Set up a GitHub repository for continuous deployment?"**, select **Yes**.
    *   You will be asked to authorize Firebase to access your GitHub account.
    *   Select the GitHub repository you created in Step 1.
    *   Keep the branch as `main` for your production deployment.

Firebase will now connect to your GitHub repository.

---

## Step 4: Trigger a Deployment

The connection is now live. To trigger your first deployment, simply push a change to your GitHub repository.

1.  Make a small change to your code. For example, you can edit `README.md`.
2.  Commit and push the change:
    ```bash
    git add .
    git commit -m "Triggering first deployment"
    git push origin main
    ```

You can now visit the [Firebase Console](https://console.firebase.google.com/), navigate to the **App Hosting** section, and you will see your deployment in progress. Once it's complete, you will get a public URL where you can view your live application.

From now on, every `git push` to your `main` branch will automatically trigger a new deployment.
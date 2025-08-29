# Deploying Your Application with GitHub and Vercel

This guide will walk you through deploying your Next.js application using your GitHub repository and [Vercel](https://vercel.com), a popular and free hosting platform for Next.js projects.

This setup enables Continuous Deployment (CD), meaning your application will automatically redeploy whenever you push changes to your GitHub repository.

## Prerequisites

*   A [GitHub](https://github.com/) account with your application code already pushed to a repository.
*   A [Vercel](https://vercel.com) account. You can sign up for free with your GitHub account.

---

## Step 1: Sign Up for Vercel

1.  Go to [vercel.com/signup](https://vercel.com/signup).
2.  Choose **Continue with GitHub** to sign up or log in using your GitHub account. Authorize Vercel to access your repositories.

---

## Step 2: Import Your Project from GitHub

1.  After logging in, you will be taken to your Vercel dashboard. Click the **"Add New..."** button and select **"Project"**.

2.  Vercel will show a list of your GitHub repositories. Find the repository for your application and click the **"Import"** button next to it.

3.  If you don't see your repository, you may need to configure the Vercel GitHub App to give it access. You can click the link to **"Adjust GitHub App Permissions"** and select the repository you want to deploy.

---

## Step 3: Configure and Deploy

1.  **Project Configuration**: Vercel is smart and will automatically detect that you are deploying a Next.js application. You generally do not need to change any of the default settings.

2.  **Environment Variables**: If your project required any environment variables (your current project does not, but future ones might), you could add them in this section.

3.  **Deploy**: Click the **"Deploy"** button.

That's it! Vercel will now start building and deploying your application. You can watch the progress in the build logs.

---

## Step 4: Visit Your Live Site

Once the deployment is complete, Vercel will provide you with a public URL (e.g., `your-repo-name.vercel.app`). You can click on it to see your live application.

From now on, every `git push` to your `main` branch will automatically trigger a new deployment on Vercel.

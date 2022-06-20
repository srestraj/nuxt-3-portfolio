# Nuxt 3 Minimal Portfolio using Pinia & Contentful

An open-source portfolio template built using [Nuxt 3](https://v3.nuxtjs.org/), [Pinia](https://pinia.vuejs.org/) and [Contentful](https://www.contentful.com/).

One-click deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/srestraj/nuxt-3-portfolio&repository-name=my-awesome-portfolio&env=BASE_URL,CTF_SPACE_ID,DOMAIN,CTF_ACCESS_TOKEN,GOOGLE_ANALYTICS_ID)

Demo: https://rajkshrestha1.com.np


**Features** 

- 🥰 Minimal and light
- 🌗 Light/dark/system color modes
- 📱 Responsive
- 📈 Google Analytics
- ⚡ Auto-generated sitemap (visit /sitemap.xml)
- 🚀 one click deployment to Vercel

### Prerequisites

1. Create a [Contentful](https://contentful.com) account.
2. Once your account is created, Contentful should have a space pre-installed/created. If not, create a space from the sidebar.
![Create space](https://github.com/srestraj/nuxt-3-portfolio/blob/main/public/space.png?raw=true)

3. Click on "Create model" at the top bar and create a new content type titled "Projects".
![Create model](https://github.com/srestraj/nuxt-3-portfolio/blob/main/public/content_type.png?raw=true)

4. Add fields to the content model with the following fields and types and save the model.
![Add fields](https://github.com/srestraj/nuxt-3-portfolio/blob/main/public/content_fields.png?raw=true)

5. Now, go to the Content tab and start adding content to the content model you just created.
6. Once everything's set up, create an access token to let your app communicate with Contentful. You can then copy your space id and access token and paste them in your .env
![Tokens](https://github.com/srestraj/nuxt-3-portfolio/blob/main/public/api_1.png?raw=true)

![Tokens](https://github.com/srestraj/nuxt-3-portfolio/blob/main/public/tokens.png?raw=true)

7. Get your Google Analytics ID (optional)
8. Now, you can click the deploy button to deploy the site to Vercel. Since Nuxt 3 has updated the deployment a little bit, you might want to set the output directory as follows (see #9) and rebuild.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/srestraj/nuxt-3-portfolio&repository-name=my-awesome-portfolio&env=BASE_URL,CTF_SPACE_ID,DOMAIN,CTF_ACCESS_TOKEN,GOOGLE_ANALYTICS_ID)

9. If you want to manually deploy the site to Vercel, just make sure to include your environmental variables and modify the build and development commands as follows.
![Build Settings](https://github.com/srestraj/nuxt-3-portfolio/blob/main/public/build_settings.png?raw=true)

### Build Setup

create a `.env` file with the following variables

```
BASE_URL=(YOUR_SITE_URL w/o trailing slash)
CTF_SPACE_ID=(contentful space id)
DOMAIN=(YOUR_SITE_URL w/o trailing slash)
CTF_ACCESS_TOKEN=(contentful delivery access token)
GOOGLE_ANALYTICS_ID=
```

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install --shamefully-hoist
```

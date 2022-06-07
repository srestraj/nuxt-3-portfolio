import { defineNuxtConfig } from "nuxt";
import { generateSitemap } from "./sitemap";

export default defineNuxtConfig({
  app: {
    head: {
      title: "Raj Kumar Shrestha",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Raj Kumar Shrestha is a Frontend Developer specialized in Vue.js and Nuxt.js based in Kathmandu, Nepal.",
        },
        {
          hid: "author",
          name: "author",
          content: "Raj Kumar Shrestha",
        },
        {
          hid: "og:title",
          property: "og:title",
          content: "Raj Kumar Shrestha",
        },
        {
          hid: "og:description",
          property: "og:description",
          content:
            "Raj Kumar Shrestha is a Frontend Developer specialized in Vue.js and Nuxt.js based in Kathmandu, Nepal.",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: "https://rajkshrestha1.com.np/raj-og-img.png",
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "https://rajkshrestha1.com.np",
        },
        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "twitter:card",
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          hid: "twitter:site",
          name: "twitter:site",
          content: "@srestraj",
        },
        {
          hid: "twitter:creator",
          name: "twitter:creator",
          content: "@srestraj",
        },
        {
          hid: "twitter:title",
          name: "twitter:title",
          content: "Raj Kumar Shrestha",
        },
        {
          hid: "twitter:description",
          name: "twitter:description",
          content:
            "Raj Kumar Shrestha is a Frontend Developer specialized in Vue.js and Nuxt.js based in Kathmandu, Nepal.",
        },
        {
          hid: "twitter:image",
          name: "twitter:image",
          content: "https://rajkshrestha1.com.np/raj-og-img.png",
        },
        {
          hid: "twitter:image:alt",
          name: "twitter:image:alt",
          content: "Raj Kumar Shrestha",
        },
        {
          hid: "theme-color",
          name: "theme-color",
          content: "#ffffff",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/icon.png",
        },
        {
          rel: "canonical",
          href: "https://rajkshrestha1.com.np",
        },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/27ec220848.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },
  ssr: true,
  target: "server",
  modules: ["bootstrap-vue-3/nuxt", "@nuxtjs/sitemap", '@nuxtjs/color-mode'],
  css: [
    "bootstrap/dist/css/bootstrap.css",
    "~/assets/css/style.css",
    "~/assets/css/fonts.css",
  ],
  hooks: {
    "build:before": () => {
      generateSitemap();
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["class-validator"],
    },
  },
  env: {
    CTF_SPACE_ID: process.env.CTF_SPACE_ID,
    CTF_ACCESS_TOKEN: process.env.CTF_ACCESS_TOKEN,
  },
  runtimeConfig: {
    private: {},
    public: {
      GOOGLE_ANALYTICS_ID: process.env.GOOGLE_ANALYTICS_ID,
    },
  },
  buildModules: ["@pinia/nuxt"],
});

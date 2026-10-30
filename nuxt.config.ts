// nuxt.config.ts
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  modules: ["@pinia/nuxt", "@nuxt/icon", "@nuxtjs/google-fonts"],

  // Typography Engine: Locally downloaded & self-hosted
  googleFonts: {
    families: {
      "Young+Serif": [400],
      "Plus+Jakarta+Sans": [400, 500, 600, 700],
      "Bodoni+Moda": {
        wght: [400, 600, 700, 900],
        ital: [400, 700],
      },
      "Space+Grotesk": [400, 500, 600, 700],
    },
    display: "swap",
    prefetch: true,
    preconnect: true,
    preload: true,
    download: true,
    outputDir: "assets",
  },

  // Global Metadata & Social Share (SNS / OpenGraph / Twitter Cards)
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      title: "The Design Tutor | Visual Designs Explained",
      titleTemplate: "%s | The Design Tutor",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Practical visual designs, analyzed and explained. Building for real-world needs and sharing the lessons behind every choice.",
        },
        { name: "author", content: "Juan Angel Lagunas" },
        { name: "theme-color", content: "#101010" },

        // OpenGraph / Facebook / LinkedIn / Discord
        { property: "og:site_name", content: "The Design Tutor" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: "https://thedesigntutor.netlify.app" },
        {
          property: "og:title",
          content: "The Design Tutor | Visual Designs Explained",
        },
        {
          property: "og:description",
          content:
            "Practical visual designs, analyzed and explained. Building for real-world needs and sharing the lessons behind every choice.",
        },
        {
          property: "og:image",
          content: "https://i.imgur.com/vPy3BGx.png",
        },
        { property: "og:image:width", content: "1200" },
        { property: "og:image:height", content: "630" },
        {
          property: "og:image:alt",
          content: "The Design Tutor Showcase Interface",
        },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@dev_jlagunas" },
        { name: "twitter:creator", content: "@dev_jlagunas" },
        {
          name: "twitter:title",
          content: "The Design Tutor | Visual Designs Explained",
        },
        {
          name: "twitter:description",
          content:
            "Practical visual designs, analyzed and explained. Building for real-world needs and sharing the lessons behind every choice.",
        },
        {
          name: "twitter:image",
          content: "https://i.imgur.com/vPy3BGx.png",
        },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/images/brand/apple-touch-icon.png",
        },
      ],
    },
  },

  // Cache & Static Prerendering Rules for Speed
  routeRules: {
    "/": { prerender: true },
    "/about": { prerender: true },
    "/contact": { prerender: true },
    "/styles/**": { isr: 3600 },
  },

  // CSS Global Imports (Shell Baseline)
  css: ["~/assets/css/main.css"],
});

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  dev: true,
  modules: [
    "@nuxtjs/tailwindcss",
    "@bg-dev/nuxt-naiveui",
    "@sidebase/nuxt-auth",
    "@nuxt/icon",
    "@nuxt/eslint",
  ],
  build: {
    transpile: ["trpc-nuxt"],
  },
  compatibilityDate: "2024-08-19",
  devtools: {
    enabled: true,
  },
  typescript: {
    shim: false,
  },
  auth: {
    enableGlobalMiddleware: true,
  },
 
  css: ["~/assets/css/main.css"],
  icon: {
    serverBundle: {
      collections: ["uli", "mdi", "guidance"],
    },
  },
});

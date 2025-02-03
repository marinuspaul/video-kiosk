import { defineConfig } from "astro/config";
import basicSsl from "@vitejs/plugin-basic-ssl";
import relativeLinks from "astro-relative-links";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
  integrations: [relativeLinks()],
});

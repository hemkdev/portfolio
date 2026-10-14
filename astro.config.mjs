import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://hemk.dev",
  server: { port: 3000 },
  vite: { plugins: [tailwindcss()] },
});

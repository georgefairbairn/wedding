import { defineConfig } from "astro/config";
import { imageService } from "@unpic/astro/service";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import netlify from "@astrojs/netlify";
import db from "@astrojs/db";

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  image: {
    service: imageService({ placeholder: "blurhash" }),
  },
  integrations: [react(), db()],
  output: "server",
  vite: {
    plugins: [tailwindcss()],
  },
});
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://terr48yte.github.io",
  base: "/linktree",
  integrations: [tailwind(), react()],
});

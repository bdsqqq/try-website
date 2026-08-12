import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const snippetsCollection = defineCollection({
  loader: glob({
    base: "./src/content/codesnippets",
    pattern: "**/*.md",
  }),
});

export const collections = {
  codesnippets: snippetsCollection,
};

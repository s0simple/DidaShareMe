import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const newClient = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(newClient);

export const urlFor = (source) => builder.image(source);

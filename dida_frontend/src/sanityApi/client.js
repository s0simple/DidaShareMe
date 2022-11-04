import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const Client = sanityClient({
  projectId: "3xsqw01g",
  dataset: "production",
  apiVersion: "2021-11-16",
  useCdn: true,
  token: process.env.SANITY_TOKEN,
});

const builder = imageUrlBuilder(Client);

export const urlFor = (source) => builder.image(source);

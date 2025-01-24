import { createClient } from "@sanity/client";
import { projectId } from "../env";

export const client = createClient({
  projectId, // Replace with your project ID
  dataset: "production", // Or your dataset name
  apiVersion: "2024-01-04", // Today's date or latest API version
  useCdn: false, // Disable CDN for real-time updates
  token: process.env.SANITY_CLIENT_TOKEN,
});

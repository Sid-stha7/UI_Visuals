  
import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "akhb3fyq",
  dataset: "production",
  apiVersion: '2021-06-07',
  useCdn: true,
});
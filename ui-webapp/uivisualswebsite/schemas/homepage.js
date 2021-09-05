export default {
  name: "homepage",
  title: "Homepage",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title for Update:",
      description: "Any heading representing what changes were added.",
      type: "string",
    },
    {
      name: "heroImage",
      description: "Image for Header/Hero Section. ",
      title: "Hero Image:",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "aboutBody",
      description: "Description for About UI Visual Community section.",
      title: "About Community Description:",
      type: "blockContent",
    },
    {
      name: "aboutImage",
      description: "Image for About UI Visuals Section: ",
      title: "About UI Visuals Image:",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "whoWeAre",
      description: "Description for who we are section.",
      title: "Description for who we are:",
      type: "blockContent",
    },
    {
      name: "publishedAt",
      description: "Date of update.",
      title: "Document Published at: ",
      type: "date",
    },
  ],

  preview: {
    select: {
      title: "title",
      media: "heroImage",
    },
  },
};

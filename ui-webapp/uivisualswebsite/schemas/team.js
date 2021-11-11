export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Heading',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'slug',
        options: {
          source: 'heading',
          maxLength: 96,
        },
      },
    //   {
    //     name: 'mainImage',
    //     title: 'Main image',
    //     type: 'image',
    //     options: {
    //       hotspot: true,
    //     },
    //   },

      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  
    preview: {
      select: {
        title: 'heading',
        // media: 'mainImage',
      },
  
    },
  }
  
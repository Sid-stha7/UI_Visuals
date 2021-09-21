export default {
    name: 'events',
    title: 'Events',
    type: 'document',
    fields: [
      {
        name: 'heading',
        title: 'Event Title:',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug:',
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
        title: 'Event Description:',
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
  
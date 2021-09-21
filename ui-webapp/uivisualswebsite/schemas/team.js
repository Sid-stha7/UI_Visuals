export default {
    name: 'team',
    title: 'Team',
    type: 'document',
    fields: [
      {
        name: 'member',
        title: 'Member Name',
        type: 'string',
      },
      {
        name: 'slug',
        title: 'Slug:',
        type: 'slug',
        description: 'Auto Generated ID.',
        options: {
          source: 'member',
          maxLength: 96,
        },
      },
      {
        name: 'memberImg',
        title: 'Member image:',
        description: 'Image of Member.',
        type: 'image',
        options: {
          hotspot: true,
        },
      },

      {
        name: 'body',
        title: 'Body',
        type: 'blockContent',
      },
    ],
  
    preview: {
      select: {
        title: 'member',
        media: 'memberImg',
      },
  
    },
  }
  
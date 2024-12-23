// schemas/socialMediaLink.js

export default {
  name: 'socialMediaLink',
  title: 'Social Media Link',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Platform Name',
      type: 'string',
      description: 'e.g. "Twitter," "LinkedIn," or "GitHub"',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Short Description',
      type: 'text',
      description: 'Brief description for the link (optional).',
      rows: 3,
    },
    {
      name: 'url',
      title: 'Profile URL',
      type: 'url',
      description: 'Full URL to the social media profile.',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['http', 'https'],
          allowRelative: false,
        }),
    },
    {
      name: 'icon',
      title: 'Icon / Image',
      type: 'image',
      description: 'Upload an icon or logo representing the platform.',
      options: {
        hotspot: true, // Allows cropping
      },
    },
    {
      name: 'fontAwesomeClass',
      title: 'Font Awesome Class',
      type: 'string',
      description: 'Font Awesome class name (e.g. "fab fa-twitter")',
    },
  ],
}

import { defineField, defineType } from 'sanity'

export const privacyPolicy = defineType({
  name: 'privacyPolicy',
  title: 'Policy',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      readOnly: true,
      initialValue: 'ПОЛІТИКА КОНФІДЕНЦІЙНОСТІ ТА ЗАХИСТУ ПЕРСОНАЛЬНИХ ДАНИХ',

    }),
    defineField({
      name: 'description',
      title: 'description',
      type: 'array',
      of: [{ type: 'block' }],
    }),
  ],
});
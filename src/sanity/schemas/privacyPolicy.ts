import { defineField, defineType } from 'sanity'

export const privacyPolicy = defineType({
  name: 'privacyPolicy',
  title: 'Політика конфіденційності',
  type: 'document',

  fields: [
    defineField({
      name: 'privacyPolicyTitle',
      title: 'Головний заголовок сторінки "Політика конфіденційності"',
      type: 'string',
      validation: (rule) =>
        rule
          .required()
          .error("Додайте заголовок сторінки 'Політика конфіденційності'")
    }),
    defineField({
      name: 'textPrivacyPolicy',
      title: 'Текст',
      type: 'array',
      of: [
        {
          type: 'block',
          marks: {
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: Rule =>
                      Rule.uri({
                        scheme: ['http', 'https', 'mailto', 'tel'],
                      }).error('Невірне посилання'),
                  },
                  {
                    name: 'target',
                    type: 'string',
                    title: 'Target',
                    options: {
                      list: [{ title: '_blank', value: '_blank' }],
                      layout: 'radio',
                    },
                    validation: Rule =>
                      Rule.custom(value => {
                        if (value !== '_blank') {
                          return 'Оберіть _blank';
                        }
                        return true;
                      }),
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
  ],
});


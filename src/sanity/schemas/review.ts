import { defineField, defineType } from 'sanity';

export const review = defineType({
  name: 'review',
  type: 'document',
  title: 'Відгуки',

  fields: [
    defineField({
      name: 'reviewText',
      type: 'text',
      title: 'Текст відгуку',
      placeholder: 'Введіть повний текст нового відгуку',
      validation: rule => rule.required().error('Введіть текст відгука'),
    }),

    defineField({
      name: 'reviewAuthor',
      type: 'string',
      title: "Ім'я та прізвище автора відгуку",
      placeholder: "Введіть ім'я та прізвище автора відгуку",
      validation: rule =>
        rule
          .required()
          .error("Введіть ім'я та прізвище автора відгуку")
          .max(30)
          .error('Введіть імя, яке містить не більше 30 символів'),
    }),
  ],
});

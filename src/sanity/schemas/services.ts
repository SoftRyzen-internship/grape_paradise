import { defineField, defineType } from 'sanity';

export const services = defineType({
  name: 'services',
  type: 'document',
  title: 'Послуги',

  fields: [
    defineField({
      name: 'servicesTitle',
      title: 'Назва послуги',
      type: 'string',
      placeholder: 'Додайте назву послуги',
      validation: rule =>
        rule
          .required()
          .error('Додайте назву послуги')
          .max(30)
          .error('Введіть назву послуги, яка містить не більше 30 символів'),
    }),

    defineField({
      name: 'imageServices',
      title: 'Фото послуги',
      type: 'image',
      validation: rule => rule.required(),
    }),

    defineField({
      name: 'imageServicesAlt',
      type: 'string',
      title: 'Короткий опис того, що зображено на фото',
      placeholder: 'Опис фото',
      validation: rule =>
        rule
          .required()
          .error('Додайте опис фото')
          .max(100)
          .error('Введіть опис фото, який містить не більше 100 символів'),
    }),

    defineField({
      name: 'servicesText',
      type: 'text',
      title: 'Текст послуги',
      placeholder: 'Введіть повний опис послуги',
      validation: rule => rule.required().error('Введіть опис послуги'),
    }),
  ],
});

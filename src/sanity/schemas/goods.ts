import { defineField, defineType } from 'sanity';

export const goods = defineType({
  name: 'goods',
  type: 'document',
  title: 'Товар',

  fields: [
    defineField({
      name: 'goodsTitle',
      title: 'Найменування товару',
      type: 'string',
      placeholder: 'Додайте назву товару',
      validation: rule =>
        rule
          .required()
          .error('Додайте назву товару')
          .max(30)
          .error('Введіть назву товару, яка містить не більше 30 символів'),
    }),

    defineField({
      name: 'imageGoods',
      title: 'Фото товару',
      type: 'image',
      validation: rule => rule.required(),
    }),

    defineField({
      name: 'imageGoodsAlt',
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
  ],
});

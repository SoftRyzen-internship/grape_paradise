import { defineField, defineType } from 'sanity'

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
      validation: (rule: any) =>
        rule
          .required()
          .error("Додайте назву товару")
          .max(30)
          .error('Введіть назву товару, яка містить не більше 30 символів')
    }),

    defineField({
      name: 'imageGoods',
      title: 'Фото товару',
      type: 'image',
      validation: (rule: any) =>
        rule.required()
    }),

    defineField({
      name: 'imageGoodsAlt',
      type: 'string',
      title: 'Короткий опис того, що зображено на фото',
      placeholder: 'Опис фото',
      validation: (rule: any) =>
        rule
          .required()
          .error("Додайте опис фото")
          .max(100)
          .error('Введіть опис фото, який містить не більше 100 символів')
    }),

    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Згенеруйте URL адресу для фотографії товару',
      validation: (rule: any) =>
        rule.required(),
      options: {
        source: 'goodsTitle',
        maxLength: 200,
        slugify: (input: any) => input
          .toLowerCase()
          .replace(/\s+/g, '-')
          .slice(0, 200)
      }
    }),

    
  ],
})

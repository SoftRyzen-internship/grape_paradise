import { defineField, defineType } from 'sanity'

export const privacyPolicy = defineType({
  name: 'privacyPolicy',
  type: 'document',
  title: 'Політика конфіденційності',

  fields: [
    defineField({
      name: "privacyPolicyTitle1",
      type: "string",
      title: "Головний заголовок сторінки 'Політика конфіденційності'",
      validation: (rule) =>
        rule
          .required()
          .error('Введіть заголовк')
    }),

    defineField({
        name: "privacyPolicyText1",
        type: "text",
        title: "Текст 1",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть текст')
      }),

      defineField({
        name: "privacyPolicyTitle2",
        type: "string",
        title: "Заголовок 2",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть заголовок')
      }),

      defineField({
        name: "privacyPolicyText2",
        type: "text",
        title: "Текст 2",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть текст')
      }),

      defineField({
        name: "privacyPolicyTitle3",
        type: "string",
        title: "Заголовок 3",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть заголовок')
      }),

      defineField({
        name: "privacyPolicyText3",
        type: "text",
        title: "Текст 3",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть текст')
      }),

      defineField({
        name: "privacyPolicyTitle4",
        type: "string",
        title: "Заголовок 4",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть заголовок')
      }),

      defineField({
        name: "privacyPolicyText4",
        type: "text",
        title: "Текст 4",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть текст')
      }),

      defineField({
        name: "privacyPolicyTitle5",
        type: "string",
        title: "Заголовок 5",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть заголовок')
      }),

      defineField({
        name: "privacyPolicyText5",
        type: "text",
        title: "Текст 5",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть текст')
      }),

      defineField({
        name: "privacyPolicyTitle6",
        type: "string",
        title: "Заголовок 6",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть заголовок')
      }),

      defineField({
        name: "privacyPolicyText6",
        type: "text",
        title: "Текст 6",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть текст')
      }),

      defineField({
        name: "privacyPolicyTitle7",
        type: "string",
        title: "Заголовок 7",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть заголовок')
      }),

      defineField({
        name: "privacyPolicyText7",
        type: "text",
        title: "Текст 7",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть текст')
      }),

      defineField({
        name: "privacyPolicyTitle8",
        type: "string",
        title: "Заголовок 8",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть заголовок')
      }),

      defineField({
        name: "privacyPolicyText8",
        type: "text",
        title: "Текст 8",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть текст')
      }),

      defineField({
        name: "privacyPolicyTitle9",
        type: "string",
        title: "Заголовок 9",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть заголовок')
      }),

      defineField({
        name: "privacyPolicyText9",
        type: "text",
        title: "Текст 9",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть текст')
      }),

      defineField({
        name: "privacyPolicyTitle10",
        type: "string",
        title: "Заголовок 10",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть заголовок')
      }),

      defineField({
        name: "privacyPolicyText10",
        type: "text",
        title: "Текст 10",
        validation: (rule) =>
          rule
            .required()
            .error('Введіть текст')
      }),

  ],
})
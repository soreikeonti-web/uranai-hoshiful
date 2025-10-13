import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fortune',
  title: '今日の占い',
  type: 'document',
  fields: [
    defineField({
      name: 'date',
      title: '日付',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: '占いの内容',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: '占いの執筆者',
      type: 'string',
    }),
  ],
})
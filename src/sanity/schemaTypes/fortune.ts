import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'fortune',
  title: '今日の占い',
  type: 'document',
  icon: () => '🔮',
  fields: [
    defineField({
      name: 'date',
      title: '日付',
      type: 'date',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'content',
      title: '占いの内容',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(1000),
      rows: 5,
    }),
    defineField({
      name: 'author',
      title: '占い師',
      type: 'string',
      validation: (Rule) => Rule.max(50),
    }),
    defineField({
      name: 'category',
      title: '占いの種類',
      type: 'string',
      options: {
        list: [
          {title: '総合運', value: 'general'},
          {title: '恋愛運', value: 'love'},
          {title: '仕事運', value: 'work'},
          {title: '金運', value: 'money'},
          {title: '健康運', value: 'health'},
        ],
        layout: 'radio',
      },
      initialValue: 'general',
    }),
    defineField({
      name: 'luckyColor',
      title: 'ラッキーカラー',
      type: 'string',
      options: {
        list: [
          {title: '赤', value: 'red'},
          {title: '青', value: 'blue'},
          {title: '緑', value: 'green'},
          {title: '黄', value: 'yellow'},
          {title: '紫', value: 'purple'},
          {title: 'ピンク', value: 'pink'},
          {title: 'オレンジ', value: 'orange'},
          {title: '白', value: 'white'},
          {title: '黒', value: 'black'},
        ],
      },
    }),
    defineField({
      name: 'luckyNumber',
      title: 'ラッキーナンバー',
      type: 'number',
      validation: (Rule) => Rule.min(1).max(99),
    }),
    defineField({
      name: 'isActive',
      title: '公開状態',
      type: 'boolean',
      description: 'この占いをサイトに表示するかどうか',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'date',
      subtitle: 'content',
      author: 'author',
    },
    prepare(selection) {
      const {title, subtitle, author} = selection
      return {
        title: `📅 ${title}`,
        subtitle: author ? `🔮 ${author} - ${subtitle?.substring(0, 50)}...` : `🔮 ${subtitle?.substring(0, 50)}...`,
      }
    },
  },
  orderings: [
    {
      title: '日付（新しい順）',
      name: 'dateDesc',
      by: [{field: 'date', direction: 'desc'}],
    },
    {
      title: '日付（古い順）',
      name: 'dateAsc',
      by: [{field: 'date', direction: 'asc'}],
    },
  ],
})
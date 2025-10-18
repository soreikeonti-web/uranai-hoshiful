import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: '🔮 占いサイト管理画面',
  icon: () => '🔮',

  // 環境変数の設定を統一
  projectId: process.env.SANITY_STUDIO_PROJECT_ID!,
  dataset: process.env.SANITY_STUDIO_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('🔮 占いサイト管理')
          .items([
            S.listItem()
              .id('fortune-list') // 👈 IDを追加
              .title('📅 今日の占い')
              .child(S.documentTypeList('fortune').title('占い一覧')),
            S.divider(),
            S.listItem()
              .id('vision-custom') // 👈 IDを追加
              .title('🔍 Vision')
              .child(S.component().component(() => null).title('Vision')),
          ]),
    }),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
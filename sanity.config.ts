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
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('🔮 占いサイト管理')
          .items([
            S.listItem()
              .title('📅 今日の占い')
              .child(S.documentTypeList('fortune').title('占い一覧')),
            S.divider(),
            S.listItem()
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

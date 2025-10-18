import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './src/sanity/schemaTypes'

// 最小構成版（まずこれで動作確認）
export default defineConfig({
  basePath: '/studio',
  name: 'default', 
  title: '🔮 占いサイト管理画面',
  
  projectId: 'nfpbik8n',
  dataset: 'production',
  
  plugins: [
    structureTool(),
    visionTool(),
  ],
  
  schema: {
    types: schemaTypes,
  },
})
import { defineConfig } from './node_modules/sanity'
import { structureTool } from 'sanity/structure'


import { schemaTypes } from './src/sanity/schemas/index'
import { pageStructure } from '@/sanity/pageStructure'



const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET




export default defineConfig({
  basePath: '/admin',
  name: 'default',
  title: 'Grape Paradise',

  projectId: projectId,
  dataset: dataset,

  plugins: [structureTool({ name: 'content', title: 'Редагування контенту', structure: pageStructure })],

  schema: {
    types: schemaTypes,
  },
})

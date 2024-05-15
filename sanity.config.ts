import { defineConfig, PluginOptions } from './node_modules/sanity'

import { deskTool, DeskToolOptions } from 'sanity/desk';


import { schemaTypes } from './src/sanity/schemas/index'
import { pageStructure } from '@/sanity/pageStructure'



const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || ''




export default defineConfig({
  basePath: '/admin',
  name: 'default',
  title: 'Grape Paradise',

  projectId: projectId,
  dataset: dataset,

  plugins: [deskTool({
    name: 'content',
    title: 'Редагування контенту',
    structure: pageStructure
  } as DeskToolOptions)],

  schema: {
    types: schemaTypes,
  },

})

import { defineConfig } from './node_modules/sanity';
import { structureTool } from 'sanity/structure';

import { schema } from '@/sanity/schemas/schema';

import { pageStructure } from '@/sanity/pageStructure';

import { visionTool } from '@sanity/vision';

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || '';

export default defineConfig({
  basePath: '/admin',
  name: 'default',
  title: 'Grape Paradise',

  projectId: projectId,
  dataset: dataset,
  schema,

  plugins: [
    structureTool({
      name: 'content',
      title: 'Редагування контенту',
      structure: pageStructure,
    }),
    visionTool(),
  ],
});

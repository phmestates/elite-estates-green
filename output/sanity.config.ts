import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {myTheme} from './theme'

export default defineConfig({
  name: 'default',
  title: 'PHM-Elite-Estates',

  projectId: 'tbv1669u',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  theme: myTheme,

  schema: {
    types: schemaTypes,
  },
})

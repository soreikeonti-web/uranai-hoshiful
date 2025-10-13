import {createClient} from 'next-sanity'

export const client = createClient({
  apiVersion: '2024-01-01',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
})
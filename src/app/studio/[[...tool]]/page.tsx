'use client'

import {NextStudio} from 'next-sanity/studio'
import config from '../../../../sanity.config' // ← ここの住所を修正しました！

export default function StudioPage() {
  return <NextStudio config={config} />
}
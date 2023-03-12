import * as React from 'react'
import type { GatsbySSR } from 'gatsby'
import './src/assets/styles/global.scss'
import MainTemplate from 'src/components/MainTemplate'

export const onRenderBody: GatsbySSR['onRenderBody'] = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes({ lang: 'pl' })
}

export const wrapPageElement: GatsbySSR['wrapPageElement'] = ({ element }) => {
  return <MainTemplate>{element}</MainTemplate>
}

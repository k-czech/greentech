import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import './src/assets/styles/global.scss'
import MainTemplate from 'src/components/MainTemplate'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return <MainTemplate>{element}</MainTemplate>
}

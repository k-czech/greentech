import * as React from 'react'
import type { GatsbyBrowser } from 'gatsby'
import { ParallaxProvider } from 'react-scroll-parallax'
import MainTemplate from 'src/components/MainTemplate'
import './src/assets/styles/global.scss'

export const wrapPageElement: GatsbyBrowser['wrapPageElement'] = ({
  element,
}) => {
  return (
    <ParallaxProvider>
      <MainTemplate>{element}</MainTemplate>
    </ParallaxProvider>
  )
}

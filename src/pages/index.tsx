import React from 'react'
import Seo from '../components/Seo'
import MainTemplate from '../components/MainTemplate'

const IndexPage = () => (
  <MainTemplate>
    <div>
      <p>start</p>
    </div>
  </MainTemplate>
)

export default IndexPage

export const Head = () => (
  <Seo
    title="Instalacje fotowoltaiczne, czysta energia odnawialna, niezależność energetyczna - Małopolska – GreenTech"
    description="Nasza firma to pierwszy krok do uniezależnienia się od firm energetycznych oraz posiadania własnej ekologicznej energii! Zamów instalację do swojego domu."
  />
)

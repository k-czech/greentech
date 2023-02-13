import React, { ReactNode } from 'react'
import { Cta } from './CTA/Cta'
import { Footer } from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'

interface MainTemplateProps {
  children: ReactNode
}

const MainTemplate = ({ children }: MainTemplateProps) => (
  <>
    <header>
      <Navbar />
    </header>
    <main>
      {children}
      <Cta />
    </main>
    <Footer />
  </>
)

export default MainTemplate

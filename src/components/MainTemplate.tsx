import React, { ReactNode } from 'react'
import { Cta } from './CTA/Cta'
import { Footer } from './Footer/Footer'
import { Navbar } from './Navbar/Navbar'

interface MainTemplateProps {
  children: ReactNode
}

const MainTemplate = ({ children }: MainTemplateProps) => (
  <>
    <header className="absolute top-0 w-full lg:relative lg:top-auto px-5 lg:px-0">
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

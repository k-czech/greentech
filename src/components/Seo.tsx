import React, { ReactNode } from 'react'
import { useSiteMetadata } from '../hooks/use-site-metadata'

interface SeoProps {
  title: string
  description: string
  pathname?: string
  children?: ReactNode
}

const Seo = ({ title, description, pathname, children }: SeoProps) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    siteUrl,
  } = useSiteMetadata()

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    url: `${siteUrl}${pathname || ``}`,
  }

  return (
    <>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      {children}
    </>
  )
}

export default Seo

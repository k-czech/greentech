import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'

interface WrapProps {
  children: JSX.Element | JSX.Element[]
  className?: string | undefined
  image: object
  alt: string
}

const BackgroundSection = ({ children, className, image, alt }: WrapProps) => {
  const img = getImage(image)
  if (!img) return null

  return (
    <div className={`grid ${className}`}>
      <GatsbyImage
        image={img}
        alt={alt}
        style={{ gridArea: '1/1' }}
        loading="eager"
      />
      <div className="grid relative p-10 lg:p-0" style={{ gridArea: '1/1' }}>
        {children}
      </div>
    </div>
  )
}

export default BackgroundSection

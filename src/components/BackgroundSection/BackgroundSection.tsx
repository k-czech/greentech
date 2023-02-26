import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'

interface WrapProps {
  children: JSX.Element | JSX.Element[]
  className?: string | undefined
  imgData?: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

const BackgroundSection = ({ children, className, imgData }: WrapProps) => {
  if (!imgData) return null
  const img = getImage(imgData.childImageSharp)
  if (!img) return null

  return (
    <div className={`grid ${className}`}>
      <GatsbyImage image={img} alt="sdsdsd" style={{ gridArea: '1/1' }} />
      <div className="grid relative p-10 lg:p-0" style={{ gridArea: '1/1' }}>
        {children}
      </div>
    </div>
  )
}

export default BackgroundSection

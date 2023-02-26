import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

interface imgProps {
  imgData: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
  className?: string
}

const Image = ({ imgData, className }: imgProps) => {
  if (!imgData) return null
  const img = getImage(imgData.childImageSharp)
  if (!img) return null
  return <GatsbyImage image={img} alt="" className={`${className}`} />
}

export default Image

import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'

interface imgProps {
  image: IGatsbyImageData
  alt: string
  classNameImg?: string
}

const Image = ({ image, alt = '', classNameImg }: imgProps) => {
  const img = getImage(image)
  if (!img) return null

  return <GatsbyImage image={img} alt={alt} className={`${classNameImg}`} />
}

export default Image

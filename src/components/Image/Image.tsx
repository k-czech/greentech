import React from 'react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

interface imgProps {
  image: object
  alt: string
  classNameImg?: string
}

const Image = ({ image, alt = '', classNameImg }: imgProps) => {
  if (!image) return null
  const img = getImage(image)
  if (!img) return null

  return <GatsbyImage image={img} alt={alt} className={`${classNameImg}`} />
}

export default Image

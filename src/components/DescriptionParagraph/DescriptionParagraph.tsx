import React from 'react'

interface TextProps {
  text: string
  className?: string | undefined
}

const DescriptionParagraph = ({ text, className }: TextProps) => (
  <p className={`text-secondary-color ${className}`}>{text}</p>
)

export default DescriptionParagraph

import React from 'react'

interface TextProps {
  text: string
  className?: string | undefined
}

const Title = ({ text, className }: TextProps) => (
  <h3
    className={`text-secondary-color text-3xl mb-6 md:mb-11 lg:text-4xl ${className}`}
  >
    {text}
  </h3>
)

export default Title

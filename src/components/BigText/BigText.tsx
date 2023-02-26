import React from 'react'

interface bigTextProps {
  text: string
  className?: string
  span?: string
}

const BigText = ({ text, span, className }: bigTextProps) => (
  <p
    className={`text-3xl font-semibold mb-9 text-secondary-color ${className}`}
  >
    {span ? <span className="mr-1.5 text-2xl">{span}</span> : null}
    {text}
  </p>
)

export default BigText

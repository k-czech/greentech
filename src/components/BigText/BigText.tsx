import React from 'react'

interface bigTextProps {
  text: string
  className?: string
  span?: string
  href?: string
}

const BigText = ({ text, span, className, href }: bigTextProps) => (
  <a
    href={href}
    className={`text-3xl font-semibold mb-9 text-secondary-color block ${className}`}
  >
    {span ? <span className="mr-1.5 text-2xl">{span}</span> : null}
    {text}
  </a>
)

export default BigText

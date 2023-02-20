import { Link } from 'gatsby'
import React from 'react'

interface ButtonProps {
  text: string
  path: string
  className?: string | undefined
}

export const Button = ({ text, path, className }: ButtonProps) => (
  <Link
    to={path}
    className={`bg-white hover:bg-blue-color text-secondary-color hover:text-white transition-colors py-4 px-14 lg:max-w-[270px] text-center ${className}`}
  >
    <span className="text-base uppercase font-bold underline">{text}</span>
  </Link>
)

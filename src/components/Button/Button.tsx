import { Link } from 'gatsby'
import React from 'react'

interface ButtonProps {
  text: string
  path: string
}

export const Button = ({ text, path }: ButtonProps) => (
  <Link
    to={path}
    className="bg-white hover:bg-blue-color text-secondary-color hover:text-white transition-colors py-4 px-14"
  >
    <span className="text-base uppercase font-bold underline">{text}</span>
  </Link>
)

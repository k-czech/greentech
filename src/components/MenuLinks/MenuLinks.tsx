import React from 'react'
import { Link } from 'gatsby'
import '../../assets/styles/menuLinks/menu-links.scss'

interface links {
  className: string
}

const MenuLinks = ({ className }: links) => {
  return (
    <>
      <ul className={className}>
        <li>
          <Link to="/about-us">O firmie</Link>
        </li>
        <li>
          <Link to="/ourOffer">Oferta</Link>
        </li>
        <li>
          <Link to="/realisations">Realizacje</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Kontakt</Link>
        </li>
      </ul>
    </>
  )
}

export default MenuLinks

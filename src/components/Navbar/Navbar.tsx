import React from 'react'
import { Link } from 'gatsby'
import Basket from '../../assets/icons/shop-basket.svg'
import Logo from '../../assets/icons/logo.svg'

export const Navbar = () => (
  <nav className="container mx-auto flex justify-between py-7">
    <Link to="/">
      <Logo />
    </Link>
    <div className="flex flex-wrap items-center justify-end lg:justify-between w-6/12">
      <div className="w-12 h-12 flex items-center justify-center lg:hidden">
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-8 h-0.5 bg-white"></span>
          <span className="block w-5 h-0.5 bg-white"></span>
        </div>
      </div>
      <ul className="hidden lg:flex underline text-lg">
        <li className="text-base font-semibold px-3.5">
          <Link to="/">O firmie</Link>
        </li>
        <li className="text-base font-semibold px-3.5">
          <Link to="/">Oferta</Link>
        </li>
        <li className="text-base font-semibold px-3.5">
          <Link to="/">Realizacje</Link>
        </li>
        <li className="text-base font-semibold px-3.5">
          <Link to="/">Blog</Link>
        </li>
        <li className="text-base font-semibold px-3.5">
          <Link to="/">Kontakt</Link>
        </li>
      </ul>
      <a
        href="https://sklep.green-tech.com.pl/"
        target="_blank"
        className="hidden w-12 h-12 bg-blue-color hover:bg-base-color transition-all flex items-center justify-center"
        rel="noreferrer"
      >
        <Basket />
      </a>
    </div>
  </nav>
)

import React from 'react';
import { Link } from 'gatsby';
import Basket from '../assets/icons/shop-basket.svg';

export const Navbar = () => (
  <nav>
    <div className="container flex flex-wrap items-center justify-between mx-auto h-24">
      <span className="w-20 text-white">/</span>
      <span className="w-20 text-white">/</span>
      <span className="w-10 text-white">/</span>
      <ul className="md:flex py-7 inline-block underline text-sky-900 text-lg">
        <li className="text-base">
          <Link to="/" class="">
            O firmie
          </Link>
        </li>
        <li className="text-base">
          <Link to="/" class="">
            Oferta
          </Link>
        </li>
        <li className="text-base">
          <Link to="/" class="">
            Realizacje
          </Link>
        </li>
        <li className="text-base">
          <Link to="/" class="">
            Blog
          </Link>
        </li>
        <li className="text-base">
          <Link to="/" class="">
            Kontakt
          </Link>
        </li>
      </ul>
      <a href="/">
        <Basket />
      </a>
    </div>
  </nav>
);

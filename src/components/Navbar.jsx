import React from 'react';
import { Link } from 'gatsby';
import { GreenTech } from 'assets/images/logo.png';

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
        <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="50" height="50" fill="#00567A" />
          <path d="M15.75 16.25L17.83 16.61L18.793 28.083C18.87 29.02 19.653 29.739 20.593 29.736H31.502C32.399 29.738 33.16 29.078 33.287 28.19L34.236 21.632C34.342 20.899 33.833 20.219 33.101 20.113C33.037 20.104 18.164 20.099 18.164 20.099" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M27.125 23.7949H29.898" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M20.1544 33.2026C20.4554 33.2026 20.6984 33.4466 20.6984 33.7466C20.6984 34.0476 20.4554 34.2916 20.1544 34.2916C19.8534 34.2916 19.6104 34.0476 19.6104 33.7466C19.6104 33.4466 19.8534 33.2026 20.1544 33.2026Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path fillRule="evenodd" clipRule="evenodd" d="M31.4346 33.2026C31.7356 33.2026 31.9796 33.4466 31.9796 33.7466C31.9796 34.0476 31.7356 34.2916 31.4346 34.2916C31.1336 34.2916 30.8906 34.0476 30.8906 33.7466C30.8906 33.4466 31.1336 33.2026 31.4346 33.2026Z" fill="white" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  </nav>
);

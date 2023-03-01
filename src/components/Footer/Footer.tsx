import { Link } from 'gatsby'
import React from 'react'
import Wrapper from '../Wrapper/Wrapper'

export const Footer = () => (
  <footer className="bg-white">
    <Wrapper className="text-center mx-auto lg:text-left ">
      <div className="container mx-auto my-12">
        <div className="grid lg:grid-cols-5 md:grid-cols-2 space-y-5">
          <div className="footer__columns">
            <h5 className="mb-2.5 text-base text-extrabold">
              GreenTech Sp.z.o.o.
            </h5>

            <ul className="list-none mb-0">
              <li className="text-secondary-color text-sm">Niedźwiedź 180</li>
              <li className="text-secondary-color text-sm">
                34-735 Niedźwiedź
              </li>
              <li className="text-secondary-color text-sm">woj. małopolskie</li>
              <li className="text-gray-400 text-sm">KRS: 0000452799</li>
              <li className="text-gray-400 text-sm">NIP: 7010372020</li>
              <li className="text-gray-400 text-sm">Regon: 146560527</li>
              <li className="text-gray-400 text-sm">BDO: 000229168</li>
            </ul>
          </div>

          <div className="footer__columns">
            <h5 className="uppercase mb-2.5 text-base text-extrabold">
              Na skróty
            </h5>

            <ul className="list-none mb-0">
              <li>
                <Link to="/o-nas" className="text-gray-400 text-sm">
                  O firmie
                </Link>
              </li>
              <li>
                <Link to="/oferty" className="text-gray-400 text-sm">
                  Oferta
                </Link>
              </li>
              <li>
                <Link to="/realizacje" className="text-gray-400 text-sm">
                  Realizacje
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-gray-400 text-sm">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__columns">
            <h5 className="uppercase mb-2.5 text-base text-extrabold">
              Oferta
            </h5>

            <ul className="list-none mb-0">
              <li>
                <Link to="/oferty" className="text-gray-400 text-sm">
                  Pionowe instalacje PV
                </Link>
              </li>
              <li>
                <Link to="/pompy-ciepla" className="text-gray-400 text-sm">
                  Pompy ciepła
                </Link>
              </li>
              <li>
                <Link to="/fotowoltaika" className="text-gray-400 text-sm">
                  Fotowoltaika
                </Link>
              </li>
              <li>
                <Link to="/oferty" className="text-gray-400 text-sm">
                  Rekuperacja
                </Link>
              </li>
            </ul>
          </div>

          <div className="footer__columns">
            <h5 className="uppercase mb-2.5 text-white">.</h5>

            <ul className="list-none mb-0">
              <li>
                <Link to="/zapytaj" className="text-gray-400 text-sm">
                  Zapytaj o ofertę
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 text-sm">
                  Klienci indywidualni
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-400 text-sm">
                  Fotowoltaika dla rolnictwa
                </Link>
              </li>
              <li>
                <Link
                  to="https://sklep.green-tech.com.pl/"
                  className="text-gray-400 text-sm"
                >
                  Nasz sklep
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer__columns">
            <h5 className="uppercase mb-2.5 text-base text-extrabold">
              Kontakt
            </h5>

            <ul className="list-none mb-0">
              <li>
                <a
                  href="tel:+48 18 473 18 62"
                  className="text-secondary-color text-sm"
                >
                  <span className="text-[11px]">+48</span> 18 473 18 62
                </a>
              </li>
              <li>
                <a
                  href="tel:+48 531 831 555"
                  className="text-secondary-color text-sm"
                >
                  <span className="text-[11px]">+48</span> 531 831 555
                </a>
              </li>
              <li>
                <a
                  href="tel:+48 530 821 814"
                  className="text-secondary-color text-sm"
                >
                  <span className="text-[11px]">+48</span> 530 821 814
                </a>
              </li>
            </ul>

            <ul className="mt-2">
              <li>
                <a
                  href="mailto:sklep@green-tech.com.pl"
                  className="text-secondary-color text-sm"
                >
                  sklep@green-tech.com.pl
                </a>
              </li>
              <li>
                <a
                  href="mailto:hubert@green-tech.com.pl"
                  className="text-secondary-color text-sm"
                >
                  hubert@green-tech.com.pl
                </a>
              </li>
              <li>
                <a
                  href="mailto:handlowy@green-tech.com.pl"
                  className="text-secondary-color text-sm"
                >
                  handlowy@green-tech.com.pl
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footer__social mt-24">
          <a
            target="_blank"
            href="https://tailwind-elements.com/"
            className="mr-6 text-base font-extrabold"
            rel="noreferrer"
          >
            facebook
          </a>
          <a
            target="_blank"
            href="https://tailwind-elements.com/"
            className="text-base font-extrabold"
            rel="noreferrer"
          >
            instagram
          </a>
        </div>
      </div>
    </Wrapper>
  </footer>
)

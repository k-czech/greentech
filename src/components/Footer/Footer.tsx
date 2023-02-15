import React from 'react'

export const Footer = () => (
  <footer className="text-center bg-white lg:text-left">
    <div className="container mx-auto mt-24 mb-11">
      <div className="grid lg:grid-cols-5 md:grid-cols-2">
        <div className="footer__columns">
          <h5 className="mb-0.5 text-base text-extrabold">
            GreenTech Sp.z.o.o.
          </h5>

          <ul className="list-none mb-0">
            <li className="text-gray-800 text-sm">Niedźwiedź 180</li>
            <li>
              <a href="#!" className="text-gray-800">
                34-735 Niedźwiedź
              </a>
            </li>
            <li className="text-gray-800 text-sm">woj. małopolskie</li>
            <li className="text-gray-400 text-sm">KRS: 0000452799</li>
            <li className="text-gray-400 text-sm">NIP: 7010372020</li>
            <li className="text-gray-400 text-sm">Regon: 146560527</li>
            <li className="text-gray-400 text-sm">BDO: 000229168</li>
          </ul>
        </div>

        <div className="footer__columns">
          <h5 className="uppercase mb-0.5 text-base text-extrabold">
            Na skróty
          </h5>

          <ul className="list-none mb-0">
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                O firmie
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                Oferta
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                Realizacje
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                Blog
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                Kontakt
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__columns">
          <h5 className="uppercase mb-0.5 text-base text-extrabold">Oferta</h5>

          <ul className="list-none mb-0">
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                Pionowe instalacje PV
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                Pompy ciepła
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                Fotowoltaika
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                Rekuperacja
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__columns">
          <h5 className="uppercase mb-2.5 text-white">.</h5>

          <ul className="list-none mb-0">
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                Zapytaj o ofertę
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                Klienci indywidualni
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                Fotowoltaika dla rolnictwa
              </a>
            </li>
            <li>
              <a href="#!" className="text-gray-400 text-sm">
                Nasz sklep
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__columns">
          <h5 className="uppercase mb-2.5 text-base text-extrabold">Kontakt</h5>

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
          href="https://tailwind-elements.com/"
          className="mr-6 text-base font-extrabold"
        >
          facebook
        </a>
        <a
          href="https://tailwind-elements.com/"
          className="text-base font-extrabold"
        >
          instagram
        </a>
      </div>
    </div>
  </footer>
)

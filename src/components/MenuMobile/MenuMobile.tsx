import React, { MouseEventHandler } from 'react'
import MenuLinks from '../MenuLinks/MenuLinks'
import { StaticImage } from 'gatsby-plugin-image'

//styles
import 'src/assets/styles/menuMobile/menu-mobile.scss'

interface menuMobileProps {
  closeMenuMobile: MouseEventHandler<HTMLButtonElement>
  isOpen: boolean
}

const MenuMobile = ({ closeMenuMobile, isOpen }: menuMobileProps) => {
  return (
    <div
      className={`bg-white-color z-50 lg:hidden menu-mobile ${
        isOpen ? 'open' : ''
      }`}
    >
      <button onClick={closeMenuMobile} className="m-10">
        <StaticImage src="../../assets/icons/close-ico.png" alt="close-ico" />
      </button>
      <div className="flex flex-col">
        <MenuLinks className={`mobile`} />
        <div className="m-auto mt-10">
          <p>Sprawdź nas na</p>
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
    </div>
  )
}

export default MenuMobile

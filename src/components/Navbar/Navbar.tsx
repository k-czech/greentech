import React from 'react'
import { useLocation } from '@reach/router'
import { Link } from 'gatsby'

// components
import Wrapper from '../Wrapper/Wrapper'
import MenuLinks from '../MenuLinks/MenuLinks'

// images
import Logo from '../Logo/Logo'
import MenuMobile from '../MenuMobile/MenuMobile'
import { StaticImage } from 'gatsby-plugin-image'

const usePrevious = <T,>(value: T): T | undefined => {
  const ref = React.useRef<T>()
  React.useEffect(() => {
    ref.current = value
  })
  return ref.current
}

export const Navbar = () => {
  const [isOpen, setOpen] = React.useState(false)
  const location = useLocation()
  const prevLocation = usePrevious(location)

  const { pathname } = location
  const hamburgerColor = pathname === '/' ? 'bg-white' : 'bg-black'

  const openMenuMobile = () => {
    setOpen(true)
    const body: HTMLElement = document.querySelector('body')!
    body.style.overflowY = 'hidden'
    body.classList.add('mask')
  }

  const closeMenuMobile = () => {
    setOpen(false)
    const body: HTMLElement = document.querySelector('body')!
    body.style.overflowY = ''
    body.classList.remove('mask')
  }

  React.useEffect(() => {
    if (location !== prevLocation) {
      closeMenuMobile()
    }
  }, [location, prevLocation])

  return (
    <nav className="mx-auto max-w-[1440px] flex items-center py-7 px-2 xl:px-0 z-30">
      <Wrapper className="flex w-full mx-auto justify-between">
        <Link to="/" className="z-30">
          <Logo location={pathname} />
        </Link>
        <div className="flex flex-wrap items-center justify-end w-6/12 z-50">
          <div
            onClick={openMenuMobile}
            className="w-12 h-12 flex items-center justify-center lg:hidden"
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 ${hamburgerColor}`}></span>
              <span className={`block w-8 h-0.5 ${hamburgerColor}`}></span>
              <span className={`block w-5 h-0.5 ${hamburgerColor}`}></span>
            </div>
          </div>

          <MenuMobile closeMenuMobile={closeMenuMobile} isOpen={isOpen} />

          <MenuLinks className="desktop" />
        </div>
      </Wrapper>
      <a
        href="https://sklep.green-tech.com.pl/"
        target="_blank"
        className="hidden w-12 h-12 bg-blue-color hover:bg-base-color transition-all ml-3.5 lg:flex items-center justify-center xl:ml-0"
        rel="noreferrer"
        aria-label="Link do sklepu"
      >
        <StaticImage src="../../assets/icons/shop-basket.svg" alt="ico" />
      </a>
    </nav>
  )
}

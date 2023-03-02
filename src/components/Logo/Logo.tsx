import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import LogoColor from '../../assets/icons/logo.svg'

const Logo = ({ location }: { location: string }) => {
  console.log(location)
  return (
    <>
      {location === '/' ? (
        <>
          <span className="md:hidden">
            <StaticImage
              src="../../assets/icons/logo_white.png"
              alt="logo"
              width={144}
            />
          </span>
          <span className="hidden md:block">
            <LogoColor />
          </span>
        </>
      ) : (
        <LogoColor />
      )}
    </>
  )
}

export default Logo

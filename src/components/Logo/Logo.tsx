import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const LogoImage = ({ color }: { color: string }) => {
  if (color === 'white') {
    return (
      <StaticImage
        src="../../assets/icons/logo_white.png"
        alt="logo"
        width={144}
      />
    )
  } else {
    return (
      <StaticImage src="../../assets/icons/logo.png" alt="logo" width={144} />
    )
  }
}

const Logo = ({ location }: { location: string }) => {
  const { allContentfulOfferPage } = useStaticQuery(graphql`
    query {
      allContentfulOfferPage {
        nodes {
          url
        }
      }
    }
  `)

  const offerPagesUrls = allContentfulOfferPage.nodes.map(
    (item: { url: string }) => item.url,
  )

  switch (location) {
    case '/':
      return (
        <>
          <span className="md:hidden">
            <LogoImage color="white" />
          </span>
          <span className="hidden md:block">
            <LogoImage color="color" />
          </span>
        </>
      )
    default:
      if (offerPagesUrls.includes(location.slice(1).slice(0, -1))) {
        return (
          <>
            <span className="hidden md:block">
              <LogoImage color="white" />
            </span>
            <span className="md:hidden">
              <LogoImage color="color" />
            </span>
          </>
        )
      } else {
        return <LogoImage color="color" />
      }
  }
}

export default Logo

import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const Logo = ({ location }: { location: string }) => {
  const {
    allContentfulOfferPage: { nodes },
  } = useStaticQuery(graphql`
    query {
      allContentfulOfferPage {
        nodes {
          url
        }
      }
    }
  `)

  const offerPagesUrls = nodes.map((item: { url: string }) => item.url)

  if (offerPagesUrls.includes(location.slice(1).slice(0, -1))) {
    return (
      <>
        <span className="hidden md:block">
          <StaticImage
            src="../../assets/icons/logo_white.png"
            alt="logo"
            width={144}
          />
        </span>
        <span className="md:hidden">
          <StaticImage
            src="../../assets/icons/logo.png"
            alt="logo"
            width={144}
          />
        </span>
      </>
    )
  }
  return (
    <>
      {location !== '/' &&
      offerPagesUrls.includes(location.slice(1).slice(0, -1)) ? (
        <>
          <span className="hidden md:block">
            <StaticImage
              src="../../assets/icons/logo_white.png"
              alt="logo"
              width={144}
            />
          </span>
          <span className="lg:hidden">
            <StaticImage
              src="../../assets/icons/logo.png"
              alt="logo"
              width={144}
            />
          </span>
        </>
      ) : location === '/' ? (
        <>
          <span className="md:hidden">
            <StaticImage
              src="../../assets/icons/logo_white.png"
              alt="logo"
              width={144}
            />
          </span>
          <span className="hidden md:block">
            <StaticImage
              src="../../assets/icons/logo.png"
              alt="logo"
              width={144}
            />
          </span>
        </>
      ) : (
        <StaticImage src="../../assets/icons/logo.png" alt="logo" width={144} />
      )}
    </>
  )
}

export default Logo

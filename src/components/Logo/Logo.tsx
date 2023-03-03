import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import LogoColor from '../../assets/icons/logo.svg'
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
          <LogoColor />
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
            <LogoColor />
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

// {/* <>
// <span className="md:hidden">
//   <StaticImage
//     src="../../assets/icons/logo_white.png"
//     alt="logo"
//     width={144}
//   />
// </span>
// <span className="hidden md:block">
//   <LogoColor />
// </span>
// </> */}

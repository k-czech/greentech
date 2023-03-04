import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Image from '../Image/Image'
import { ListWrapper } from '../OffersListWrapper/OffersListWrapper'

import 'src/assets/styles/categoryList/category-list.scss'

interface nodeProps {
  url: string
  pageTitle: string
  shortDesc: string
  thumbnail: {
    gatsbyImageData: {
      images: IGatsbyImageData
    }
    title: string
  }
}

const Offers = () => {
  const {
    allContentfulOfferPage: { nodes },
  } = useStaticQuery(graphql`
    query {
      allContentfulOfferPage {
        nodes {
          pageTitle
          url
          shortDesc
          thumbnail {
            gatsbyImageData
            title
          }
        }
      }
    }
  `)

  return (
    <ListWrapper classname="mt-16 gap-2">
      {nodes.map((node: nodeProps, index: number) => {
        const { pageTitle, thumbnail, url, shortDesc } = node
        return (
          <div key={index} className="max-w-[260px]">
            <Link to={`/${url}`}>
              <Image
                image={thumbnail.gatsbyImageData}
                alt={thumbnail.title}
                classNameImg="scale-up"
              />
            </Link>
            <div className="mt-6">
              <Link to={`/${url}`} className="mt-6">
                <p className="text-secondary-color underline mb-2 text-xl font-semibold">
                  {pageTitle}
                </p>
                <p className="w-[230px]">{shortDesc}</p>
              </Link>
            </div>
          </div>
        )
      })}
    </ListWrapper>
  )
}

export default Offers

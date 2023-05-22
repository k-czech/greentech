import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

// components
import Image from '../Image/Image'
import { ListWrapper } from '../OffersListWrapper/OffersListWrapper'
import { IGatsbyImageData } from 'gatsby-plugin-image'

interface NodeProps {
  pageTitle: string
  thumbnail: {
    gatsbyImageData: IGatsbyImageData
    title: string
  }
  url: string
  shortDesc: string
}

const ContentfulOfferList = (props: any) => {
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
            gatsbyImageData(width: 260, height: 372)
            title
          }
        }
      }
    }
  `)

  return (
    <section>
      <ListWrapper classname="mt-16 gap-2">
        {nodes.map((node: NodeProps, index: number) => {
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
                <Link to={`/${url}`}>
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
    </section>
  )
}

export const query = graphql`
  fragment ListaOfertFragment on ContentfulListaZOfertami {
    __typename
    contentful_id
  }
`

export default ContentfulOfferList

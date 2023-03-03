import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import MainWrapper from '../MainWrapper/MainWrapper'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Image from '../Image/Image'
import Zoom from 'react-medium-image-zoom'
import TagsFilter from '../ContentfulTagsFilter/ContentfulTagsFilter'

/// styles
import 'src/assets/styles/realizations/realizations.scss'

interface nodeProps {
  node: {
    description: string
    gatsbyImageData: IGatsbyImageData
    title: string
  }
}

const ContentfulRealizationsList = () => {
  const {
    allContentfulAsset: { edges },
  } = useStaticQuery(graphql`
    query {
      allContentfulAsset(
        filter: {
          metadata: { tags: { elemMatch: { name: { regex: "/realizacje/" } } } }
        }
      ) {
        edges {
          node {
            title
            description
            gatsbyImageData
            metadata {
              tags {
                name
              }
            }
          }
        }
      }
    }
  `)
  const [tag, setTag] = React.useState(null)

  let filteredImages = edges

  if (tag) {
    filteredImages = edges.filter((item: any) =>
      item.node.metadata.tags.some((t: { name: string }) => t.name === tag),
    )
  }

  return (
    <MainWrapper>
      <TagsFilter onClick={setTag} />
      <div className="relative grid flex flex-wrap justify-center gap-6 mark-left">
        {filteredImages.map((item: nodeProps, index: number) => (
          <div key={index} className="grid__item relative">
            <Zoom>
              <Image
                image={item.node.gatsbyImageData}
                alt={item.node.title}
                classNameImg="w-full"
              />
            </Zoom>
          </div>
        ))}
      </div>
    </MainWrapper>
  )
}

export const query = graphql`
  fragment ListaFragment on ContentfulListaOfertPostowRealizacji {
    __typename
    title
    contentful_id
  }
`

export default ContentfulRealizationsList

import React, { MouseEvent } from 'react'
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

const ContentfulRealizationsList = ({ pageContext }: any) => {
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

  console.log(pageContext)
  const [tag, setTag] = React.useState(null)

  let filteredImages = edges

  if (tag === 'wszystkie' || !tag) filteredImages = edges

  const showDesc = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement
    const desc: HTMLElement = target.querySelector('#desc-div')!
    desc.style.opacity = '1'
  }
  const hideDesc = (e: MouseEvent) => {
    const target = e.currentTarget as HTMLElement
    const desc: HTMLElement = target.querySelector('#desc-div')!
    desc.style.opacity = '0'
  }

  return (
    <MainWrapper>
      <TagsFilter onClick={setTag} />
      <div className="relative grid-images flex flex-wrap justify-center gap-6 mark-left">
        {filteredImages.map((item: nodeProps, index: number) => (
          <div
            key={index}
            className="grid__item relative"
            onMouseEnter={showDesc}
            onMouseLeave={hideDesc}
          >
            <Zoom>
              <Image
                image={item.node.gatsbyImageData}
                alt={item.node.title}
                classNameImg="w-full scale-up brightness-mask"
              />
            </Zoom>
            <div
              id="desc-div"
              className="absolute left-3 bottom-3 text-white-color font-light z-10"
              style={{ opacity: 0 }}
            >
              {item.node.description}
            </div>
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

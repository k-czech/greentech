import React from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

// components
import Image from '../Image/Image'
import Zoom from 'react-medium-image-zoom'
import Wrapper from '../Wrapper/Wrapper'
import ContentfulRichTech from '../ContenfulRichText/ContentfulRichText'

//styles
import 'react-medium-image-zoom/dist/styles.css'
import 'src/assets/styles/image-anim/image-anim.scss'

interface Props {
  title: string
  images: [
    {
      title: string
      description: string
      gatsbyImageData: IGatsbyImageData
    },
  ]
  additinalDesc: {
    raw: []
  }
}

const ImageGrid = ({ images, additinalDesc }: Props) => {
  console.log(images)
  return (
    <section className="flex flex-wrap justify-center gap-6">
      <Wrapper className="max-w-[560px] text-center">
        <ContentfulRichTech richText={additinalDesc} />
      </Wrapper>
      <div className="mark-left">
        <div className="slider">
          <div className="slider__inner">
            {images.map((item: any, index: number) => (
              <div key={index} className="slider__item">
                <Zoom
                  zoomImg={{
                    srcSet: item.gatsbyImageData.images.sources.srcSet,
                  }}
                >
                  <Image
                    image={item.gatsbyImageData}
                    alt={item.title}
                    classNameImg="scale-up"
                  />
                </Zoom>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export const query = graphql`
  fragment ImageGridFragment on ContentfulImageGrid {
    __typename
    contentful_id
    title
    images {
      title
      description
      gatsbyImageData
    }
    additinalDesc {
      raw
    }
  }
`

export default ImageGrid

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
import { Parallax } from 'react-scroll-parallax'

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
  return (
    <section className="flex flex-wrap justify-center gap-6">
      <Wrapper className="max-w-[560px] text-center">
        <ContentfulRichTech richText={additinalDesc} />
      </Wrapper>
      <div className="relative flex flex-wrap justify-center gap-6 mark-left">
        {images.map((item: any, index: number) => (
          <div key={index} className="max-w-[544px] max-h-[288px] relative">
            <Zoom>
              <Image
                image={item.gatsbyImageData}
                alt={item.title}
                classNameImg="scale-up"
              />
            </Zoom>
          </div>
        ))}
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

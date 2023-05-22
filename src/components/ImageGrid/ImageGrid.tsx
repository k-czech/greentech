import React, { lazy, Suspense } from 'react'
import { graphql } from 'gatsby'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'

// components
import Image from '../Image/Image'
import Wrapper from '../Wrapper/Wrapper'
import ContentfulRichTech from '../ContenfulRichText/ContentfulRichText'

//styles
import 'react-medium-image-zoom/dist/styles.css'
import 'src/assets/styles/image-anim/image-anim.scss'

const Zoom = lazy(() => import('react-medium-image-zoom'))

interface Props {
  title: string
  images: [
    {
      title: string
      description: string
      gatsbyImageData: IGatsbyImageData
    },
  ]
  bigImages: [
    {
      gatsbyImageData: IGatsbyImageData
    },
  ]
  additinalDesc: RenderRichTextData<ContentfulRichTextGatsbyReference>
}

interface NodeProps {
  gatsbyImageData: IGatsbyImageData
  title: string
}

const ImageGrid = ({ images, additinalDesc, bigImages }: Props) => {
  const zoomImageData = (image: IGatsbyImageData) => {
    const imageData = getImage(image)
    const src = imageData?.images.fallback?.src
    const { sizes, srcSet } = imageData?.images?.sources?.[0] ?? {}

    return { src, sizes, srcSet }
  }

  return (
    <section className="flex flex-wrap justify-center gap-6">
      <Wrapper className="max-w-[560px] text-center">
        <ContentfulRichTech richText={additinalDesc} />
      </Wrapper>
      <div className="mark-left overflow-x-scroll snap-mandatory snap-x md:overflow-x-auto">
        <div className="slider">
          <div className="slider__inner flex md:flex-wrap md:justify-center md:gap-4">
            {images.map((item: NodeProps, index: number) => (
              <div key={index} className="slider__item mr-4 md:mr-0">
                <Suspense fallback={<div>Loading...</div>}>
                  <Zoom
                    zoomImg={{
                      alt: item.title,
                      ...zoomImageData(bigImages[index].gatsbyImageData),
                    }}
                  >
                    <Image
                      image={item.gatsbyImageData}
                      alt={item.title}
                      classNameImg="max-w-[525px] w-[70vw] h-[288px] md:w-full md:h-auto scale-up"
                      aria-label="slider-item"
                    />
                  </Zoom>
                </Suspense>
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
      gatsbyImageData(height: 288, quality: 80)
    }
    bigImages: images {
      gatsbyImageData(layout: FIXED, quality: 90)
    }
    additinalDesc {
      raw
    }
  }
`

export default ImageGrid

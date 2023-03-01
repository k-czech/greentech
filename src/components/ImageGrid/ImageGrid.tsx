import React from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Image from '../Image/Image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

interface Props {
  title: string
  images: [
    {
      title: string
      description: string
      gatsbyImageData: IGatsbyImageData
    },
  ]
}

const ImageGrid = ({ images, title }: Props) => {
  console.log(images)
  return (
    <section className="flex flex-wrap justify-center gap-6">
      {images.map((item: any, index: number) => (
        <div key={index} className="max-w-[544px] max-h-[288px] relative">
          <Zoom>
            <Image image={item.gatsbyImageData} alt={item.title} />
          </Zoom>
        </div>
      ))}
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
  }
`

export default ImageGrid

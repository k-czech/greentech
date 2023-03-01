import React from 'react'
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import Image from '../Image/Image'

interface Props {
  data: {
    width: string
    image: [
      {
        gatsbyImageData: IGatsbyImageData
      },
    ]
  }
}

const ImagesRow = ({ data }: Props) => {
  const widthArr: string[] = data.width.split(';')

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-5">
      {data.image.map((img, index) => (
        <div
          key={index}
          className={`mt-5 max-w-[544px]  mx-auto lg:${widthArr[index]}`}
        >
          <Image image={img} />
        </div>
      ))}
    </div>
  )
}

export const query = graphql`
  fragment ImagesRowFragment on ContentfulGrid3Images {
    __typename
    contentful_id
    width
    image {
      gatsbyImageData
    }
  }
`

export default ImagesRow

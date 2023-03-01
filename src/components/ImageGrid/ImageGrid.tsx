import React from 'react'
import { graphql } from 'gatsby'
import ImagesRow from '../ImagesRow/ImagesRow'

interface Props {
  grid3Images: [grid3Images: object]
}

const ImageGrid = ({ grid3Images }: Props) => {
  return (
    <section>
      {grid3Images.map((imgsRow, index) => {
        return <ImagesRow key={index} data={imgsRow} />
      })}
    </section>
  )
}

export const query = graphql`
  fragment ImageGridFragment on ContentfulImageGrid {
    __typename
    contentful_id
    grid3Images {
      __typename
      contentful_id
      width
      image {
        gatsbyImageData
      }
    }
  }
`

export default ImageGrid

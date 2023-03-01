import React from 'react'
import { graphql } from 'gatsby'
import Column from '../Column/Column'
import Wrapper from '../Wrapper/Wrapper'

interface Props {
  column: []
}

const ColumnSection = ({ column }: Props) => {
  return (
    <section>
      <Wrapper className='className="container mx-auto flex flex-col lg:flex-row lg:gap-x-10 items-center space-y-5 lg:space-y-0 lg:space-x-10"'>
        {column.map((columnData, index) => (
          <Column key={index} data={columnData} />
        ))}
      </Wrapper>
    </section>
  )
}

export const query = graphql`
  fragment ColumnSectionFragment on ContentfulColumnSection {
    __typename
    contentful_id
    column {
      __typename
      contentful_id
      title
      content {
        raw
      }
      video {
        title
        videoId
        image {
          gatsbyImageData
        }
      }
    }
  }
`

export default ColumnSection

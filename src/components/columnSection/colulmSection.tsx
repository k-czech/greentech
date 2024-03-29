import React from 'react'
import { graphql } from 'gatsby'

// components
import Column from '../Column/Column'

interface Props {
  column: []
}

const ColumnSection = ({ column }: Props) => {
  const numOfColumns = `w-1/${column.length}`
  return (
    <section>
      <div className="flex flex-col lg:flex-row mx-auto gap-10 lg:gap-x-10">
        {column.map((columnData, index) => (
          <Column key={index} data={columnData} width={numOfColumns} />
        ))}
      </div>
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
        references {
          ... on Node {
            ... on ContentfulVideo {
              __typename
              contentful_id
              title
              videoId
              image {
                title
                gatsbyImageData
              }
            }
            ... on ContentfulAsset {
              __typename
              contentful_id
              title
              gatsbyImageData
            }
          }
        }
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

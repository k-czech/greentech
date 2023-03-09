import React from 'react'
import { graphql } from 'gatsby'
import ImageListView from 'src/components/views/ImageList'

const imageListPage = ({ data, pageContext }: any) => {
  const { allContentfulAsset: edges } = data
  const { contentfulListsSettings } = data

  return (
    <>
      <ImageListView
        data={edges}
        pageContext={pageContext}
        info={contentfulListsSettings}
      />
    </>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulAsset(
      filter: {
        metadata: { tags: { elemMatch: { name: { regex: "/realizacje/" } } } }
      }
      limit: $limit
      skip: $skip
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
    contentfulListsSettings {
      imagesMetatitle
      imagesTopDescription {
        raw
      }
    }
  }
`

export default imageListPage

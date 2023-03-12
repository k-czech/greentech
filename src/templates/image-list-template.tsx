import React from 'react'
import { graphql } from 'gatsby'
import ImageListView from 'src/components/views/ImageList'
import Seo from 'src/components/Seo'

const imageListPage = ({ data, pageContext }: any) => {
  const { allContentfulAsset: edges } = data
  const { contentfulListy } = data

  return (
    <>
      <ImageListView
        data={edges}
        pageContext={pageContext}
        info={contentfulListy}
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
    contentfulListy(contentful_id: { eq: "4tVxP1FSeMcbMN9WMkpD6a" }) {
      pageTitle
      metaTitle
      metaDescription
      topDescription {
        raw
      }
    }
  }
`

export default imageListPage

export const Head = ({ data }: any) => {
  const { contentfulListy } = data

  return (
    <Seo
      title={contentfulListy.metaTitle}
      description={contentfulListy.metaDescription}
    />
  )
}

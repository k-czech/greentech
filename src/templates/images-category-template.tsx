import React from 'react'
import { graphql, PageProps } from 'gatsby'
import ImageListView from 'src/components/views/ImageList'
import Seo from 'src/components/Seo'

interface DataProps {
  allContentfulAsset: {
    edges: []
  }
  contentfulListy: {
    metaTitle: string
    metaDescription: string
    topDescription: string
  }
}

interface PageContextProps {
  listOfAllTags: []
  url: string
}

const imageListPage = ({
  data,
  pageContext,
}: PageProps<DataProps, PageContextProps>) => {
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
  query ($skip: Int!, $limit: Int!, $name: String!) {
    allContentfulAsset(
      filter: { metadata: { tags: { elemMatch: { name: { eq: $name } } } } }
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
      topDescription {
        raw
      }
    }
  }
`

export default imageListPage
export const Head = ({ data }: PageProps<DataProps>) => {
  const { contentfulListy } = data

  return (
    <Seo
      title={contentfulListy.metaTitle}
      description={contentfulListy.metaDescription}
    />
  )
}

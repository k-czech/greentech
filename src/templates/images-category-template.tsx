import React from 'react'
import { graphql, PageProps } from 'gatsby'
import ImageListView from 'src/components/views/ImageList'
import Seo from 'src/components/Seo'
import {
  PageContextProps,
  TemplateProps,
} from 'src/interfaces/CustomPagesProps'

const imageListPage = ({
  data,
  pageContext,
}: PageProps<TemplateProps, PageContextProps>) => {
  const { allContentfulAsset: edges } = data
  const { contentfulListy } = data

  console.log(edges)

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
      sort: { createdAt: DESC }
      limit: $limit
      skip: $skip
    ) {
      nodes {
        title
        description
        smallImage: gatsbyImageData(height: 288, quality: 80)
        bigImage: gatsbyImageData(layout: FULL_WIDTH, quality: 90)
        metadata {
          tags {
            name
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
export const Head = ({ data }: PageProps<TemplateProps>) => {
  const { contentfulListy } = data

  return (
    <Seo
      title={contentfulListy.metaTitle}
      description={contentfulListy.metaDescription}
    />
  )
}

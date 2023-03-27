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
  const { allContentfulAsset } = data
  const { contentfulListy } = data

  return (
    <>
      <ImageListView
        data={allContentfulAsset}
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
      nodes {
        title
        description
        smallImage: gatsbyImageData(height: 288, quality: 80)
        bigImage: gatsbyImageData(quality: 90)
        metadata {
          tags {
            name
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

export const Head = ({ data }: PageProps<TemplateProps>) => {
  const { contentfulListy } = data

  return (
    <Seo
      title={contentfulListy.metaTitle}
      description={contentfulListy.metaDescription}
    />
  )
}

import React from 'react'
import { graphql } from 'gatsby'
import BlogListView from 'src/components/views/BlogList'
import Seo from 'src/components/Seo'

const AllBlogListPage = ({ data, pageContext }: any) => {
  const {
    allContentfulBlogPost: { nodes },
  } = data

  const { contentfulListy } = data

  return (
    <>
      <BlogListView
        data={nodes}
        pageContext={pageContext}
        info={contentfulListy}
      />
    </>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(limit: $limit, skip: $skip) {
      group(field: { test: SELECT }) {
        totalCount
        fieldValue
      }
      nodes {
        gatsbyPath(filePath: "/{contentfulBlogPost.url}")
        pageTitle
        category {
          category
        }
        thubmnail {
          gatsbyImageData
          title
        }
      }
    }
    contentfulListy(contentful_id: { eq: "7yjMi5HekJWv3cr5e6Qt7s" }) {
      pageTitle
      metaTitle
      metaDescription
      topDescription {
        raw
      }
    }
  }
`

export default AllBlogListPage
export const Head = ({ data }: any) => {
  const { contentfulListy } = data

  return (
    <Seo
      title={contentfulListy.metaTitle}
      description={contentfulListy.metaDescription}
    />
  )
}

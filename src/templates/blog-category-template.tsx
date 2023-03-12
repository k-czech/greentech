import React from 'react'
import { graphql } from 'gatsby'
import BlogListView from 'src/components/views/BlogList'
import Seo from 'src/components/Seo'

const BlogListPage = ({ data, pageContext }: any) => {
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
  query ($skip: Int!, $limit: Int!, $category: String!) {
    allContentfulBlogPost(
      filter: { test: { eq: $category } }
      limit: $limit
      skip: $skip
    ) {
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

export default BlogListPage
export const Head = ({ data }: any) => {
  const { contentfulListy } = data

  return (
    <Seo
      title={contentfulListy.metaTitle}
      description={contentfulListy.metaDescription}
    />
  )
}

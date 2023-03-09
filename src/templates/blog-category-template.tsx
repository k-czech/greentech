import React from 'react'
import { graphql } from 'gatsby'
import BlogListView from 'src/components/views/BlogList'

const BlogListPage = ({ data, pageContext }: any) => {
  const {
    allContentfulBlogPost: { nodes },
  } = data

  const { contentfulListsSettings } = data

  return (
    <>
      <BlogListView
        data={nodes}
        pageContext={pageContext}
        info={contentfulListsSettings}
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
    contentfulListsSettings {
      blogMetatitle
      blogTopDescription {
        raw
      }
    }
  }
`

export default BlogListPage

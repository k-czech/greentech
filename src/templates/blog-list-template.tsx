import React from 'react'
import { graphql } from 'gatsby'

const imageListPage = ({ data, pageContext }: any) => {
  console.log(data)
  console.log(pageContext)

  return <div></div>
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(limit: $limit, skip: $skip) {
      edges {
        node {
          gatsbyPath(filePath: "/{contentfulBlogPost.url}")
          pageTitle
        }
      }
    }
  }
`

export default imageListPage

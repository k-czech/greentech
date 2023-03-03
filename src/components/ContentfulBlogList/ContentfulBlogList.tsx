import React from 'react'
import { graphql } from 'gatsby'
import BlogPosts from './blogPosts'

const ContentfulBlogList = () => {
  return <BlogPosts />
}

export const query = graphql`
  fragment ListaPostowFragment on ContentfulListaPostowBlogowych {
    __typename
    contentful_id
  }
`

export default ContentfulBlogList

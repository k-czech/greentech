import React from 'react'
import { graphql } from 'gatsby'
import BlogPosts from './blogPosts'
import Wrapper from '../Wrapper/Wrapper'

const ContentfulBlogList = () => {
  return (
    <Wrapper className="px-10 lg:px-0 lg:mt-0">
      <BlogPosts />
    </Wrapper>
  )
}

export const query = graphql`
  fragment ListaPostowFragment on ContentfulListaPostowBlogowych {
    __typename
    contentful_id
  }
`

export default ContentfulBlogList

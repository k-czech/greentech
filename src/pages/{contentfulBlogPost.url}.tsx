import React from 'react'
import { graphql, Link } from 'gatsby'
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import ContentfulRichTech from 'src/components/ContenfulRichText/ContentfulRichText'
import Wrapper from 'src/components/Wrapper/Wrapper'
import Image from 'src/components/Image/Image'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ReadMore from 'src/components/ReadMore/ReadMore'

interface PageProps {
  data: {
    contentfulBlogPost: {
      pageTitle: string
      url: string
      blogPosts: {
        pageTitle: string
        url: string
        contentful_id: string
      }
      content: {
        raw: RenderRichTextData<ContentfulRichTextGatsbyReference>
      }
      image: {
        title: string
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const BlogPost = ({ data }: PageProps) => {
  const { contentfulBlogPost } = data
  console.log(data)
  return (
    <Wrapper className="mx-auto px-10 lg:px-0 ">
      <div className="max-w-[960px] mx-auto mt-32 mb-16 lg:my-16">
        <h1>{contentfulBlogPost.pageTitle}</h1>
        <Image
          image={contentfulBlogPost.image.gatsbyImageData}
          alt={contentfulBlogPost.image.title}
          classNameImg="w-full"
        />
        <div className="mt-16 mb-16 ">
          <ContentfulRichTech richText={contentfulBlogPost.content} />
        </div>
        <Link to="/blog" className="text-base-color mt-10">
          Wróć
        </Link>
      </div>
      <ReadMore data={contentfulBlogPost.blogPosts} />
    </Wrapper>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulBlogPost(id: { eq: $id }) {
      pageTitle
      contentful_id
      url
      image {
        title
        gatsbyImageData
      }
      blogPosts {
        ... on Node {
          ...optionalBlogPosts
        }
      }
      content {
        raw
      }
    }
  }
`

export default BlogPost

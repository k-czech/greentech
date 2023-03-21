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
import Seo from 'src/components/Seo'

interface PageProps {
  data: {
    contentfulBlogPost: {
      pageTitle: string
      url: string
      metaTitle: string
      metaDescription: string
      blogPosts: [
        {
          pageTitle: string
          url: string
          thubmnail: {
            gatsbyImageData: IGatsbyImageData
            title: string
          }
        },
      ]
      content: RenderRichTextData<ContentfulRichTextGatsbyReference>
      image: {
        title: string
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const BlogPost = ({ data }: PageProps) => {
  const { contentfulBlogPost } = data

  return (
    <Wrapper className="mx-auto px-6 md:px-12 xl:px-0 px-10 lg:px-0 ">
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
        <Link to="/blog" className="text-[#188658] font-semibold mt-10">
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
      metaTitle
      metaDescription
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

export const Head = ({ data }: PageProps) => {
  const { metaTitle, pageTitle, metaDescription } = data.contentfulBlogPost
  const seoTitle = metaTitle ? metaTitle : pageTitle
  const seoDesc = metaDescription
    ? metaDescription
    : 'Nasza firma to pierwszy krok do uniezależnienia się od firm energetycznych oraz posiadania własnej ekologicznej energii! Zamów instalację do swojego domu.'
  return <Seo title={seoTitle} description={seoDesc} />
}

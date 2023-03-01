import React from 'react'
import { graphql, Link } from 'gatsby'
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import ContentfulRichTech from 'src/components/ContenfulRichText/ContentfulRichText'
import Wrapper from 'src/components/Wrapper/Wrapper'
import Image from 'src/components/Image/Image'
import { IGatsbyImageData, StaticImage } from 'gatsby-plugin-image'
import Title from 'src/components/Title/Title'
import { ListWrapper } from 'src/components/OffersListWrapper/OffersListWrapper'

interface PageProps {
  data: {
    contentfulBlogPost: {
      pageTitle: string
      url: string
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
      <div className="max-w-[760px] mx-auto mt-32 mb-16 lg:my-16">
        <h1>{contentfulBlogPost.pageTitle}</h1>
        <Image
          image={contentfulBlogPost.image.gatsbyImageData}
          alt={contentfulBlogPost.image.title}
        />
        <div className="mt-16 mb-16 ">
          <ContentfulRichTech richText={contentfulBlogPost.content} />
        </div>
        <Link to="/blog" className="text-base-color mt-10">
          Wróć
        </Link>
      </div>
      <div>
        <Title text="Przeczytaj również" />
        <ListWrapper classname="justify-center md:justify-start">
          <div className="max-w-[360px]">
            <Link to="/blog">
              <StaticImage src="../assets/images/blog/image.png" alt="" />
            </Link>
            <Link to="/blog" className="block mt-7">
              <p className="text-secondary-color text-lg font-bold">
                Optymalizator mocy paneli fotowoltaicznych – czy warto?
              </p>
              <p className="text-secondary-color/40 text-sm my-1.5">
                Sierpień, 2022
              </p>
            </Link>
          </div>
          <div className="max-w-[360px]">
            <Link to="/blog">
              <StaticImage src="../assets/images/blog/image.png" alt="" />
            </Link>
            <Link to="/blogPost" className="block mt-7">
              <p className="text-secondary-color text-lg font-bold">
                Optymalizator mocy paneli fotowoltaicznych – czy warto?
              </p>
              <p className="text-secondary-color/40 text-sm my-1.5">
                Sierpień, 2022
              </p>
            </Link>
          </div>
          <div className="max-w-[360px]">
            <Link to="/blog">
              <StaticImage src="../assets/images/blog/image.png" alt="" />
            </Link>
            <Link to="/blogPost" className="block mt-7">
              <p className="text-secondary-color text-lg font-bold">
                Optymalizator mocy paneli fotowoltaicznych – czy warto?
              </p>
              <p className="text-secondary-color/40 text-sm my-1.5">
                Sierpień, 2022
              </p>
            </Link>
          </div>
        </ListWrapper>
      </div>
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
      content {
        raw
      }
    }
  }
`

export default BlogPost

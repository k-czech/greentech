import React from 'react'
import { graphql } from 'gatsby'
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import ContentfulRichTech from 'src/components/ContenfulRichText/ContentfulRichText'
import Wrapper from 'src/components/Wrapper/Wrapper'
import Image from 'src/components/Image/Image'
import {
  getImage,
  IGatsbyImageData,
  withArtDirection,
} from 'gatsby-plugin-image'
import Seo from '../components/Seo'

interface PageProps {
  data: {
    contentfulSeoPages: {
      pageTitle: string
      metaTitle: string
      url: string
      content: RenderRichTextData<ContentfulRichTextGatsbyReference>
      heroImage: {
        title: string
        gatsbyImageData: IGatsbyImageData
      }
      heroImageMobile: {
        title: string
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const SeoPage = ({ data }: PageProps) => {
  const { contentfulSeoPages } = data

  const images = withArtDirection(
    getImage(contentfulSeoPages.heroImage.gatsbyImageData),
    [
      {
        media: '(max-width: 600px)',
        image: getImage(contentfulSeoPages.heroImageMobile.gatsbyImageData),
      },
    ],
  )

  return (
    <Wrapper className="mx-auto px-10 lg:px-0 ">
      <div className="max-w-[960px] mx-auto mt-32 mb-16 lg:my-16">
        <h1>{contentfulSeoPages.pageTitle}</h1>
        <Image
          image={images}
          alt={contentfulSeoPages.heroImage.title}
          classNameImg="w-full"
        />
        <div className="mt-16 mb-16 ">
          <ContentfulRichTech richText={contentfulSeoPages.content} />
        </div>
      </div>
    </Wrapper>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulSeoPages(id: { eq: $id }) {
      pageTitle
      metaTitle
      contentful_id
      url
      content {
        raw
      }
      heroImage {
        gatsbyImageData
        title
      }
      heroImageMobile {
        gatsbyImageData
        title
      }
    }
  }
`

export default SeoPage

export const Head = ({ data }: PageProps) => {
  const { metaTitle, pageTitle } = data.contentfulSeoPages
  const seoTitle = metaTitle ? metaTitle : pageTitle
  return (
    <Seo
      title={seoTitle}
      description="Nasza firma to pierwszy krok do uniezależnienia się od firm energetycznych oraz posiadania własnej ekologicznej energii! Zamów instalację do swojego domu."
    />
  )
}

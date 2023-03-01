import React from 'react'
import { graphql } from 'gatsby'
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import ContentfulRichTech from 'src/components/ContenfulRichText/ContentfulRichText'
import Wrapper from 'src/components/Wrapper/Wrapper'
import Image from 'src/components/Image/Image'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Title from 'src/components/Title/Title'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'

interface PageProps {
  data: {
    contentfulOfferPage: {
      pageTitle: string
      url: string
      shortDesc: string
      offerHero: {
        title: string
        shortDesc: string
        image: {
          gatsbyImageData: IGatsbyImageData
          title: string
        }
      }
      content: {
        raw: RenderRichTextData<ContentfulRichTextGatsbyReference>
        references: []
      }
    }
  }
}

const BlogPost = ({ data }: PageProps) => {
  const { contentfulOfferPage } = data
  const { title, shortDesc, image } = contentfulOfferPage.offerHero

  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row max-w-[1350px] mx-auto mt-32 lg:-mt-32 bg-gray-color ">
          <div className="order-last sm:order-first max-h-[560px] sm:max-h-none overflow-hidden">
            <Image image={image} alt={image.title} />
          </div>
          <div className="flex items-center justify-center order-first sm:order-last grow p-10 sm:p-0 sm:pl-10">
            <div className="flex flex-col max-w-[560px]">
              <Title text={title} className="lg:text-6xl" />
              <DescriptionParagraph text={shortDesc} />
            </div>
          </div>
        </div>
      </div>
      <Wrapper className="mx-auto">
        <div className="mt-16">
          <ContentfulRichTech richText={contentfulOfferPage.content} />
        </div>
      </Wrapper>
    </>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulOfferPage(id: { eq: $id }) {
      pageTitle
      contentful_id
      url
      shortDesc
      offerHero {
        title
        shortDesc
        image {
          gatsbyImageData
          title
        }
      }
      content {
        raw
        references {
          ...ColumnSectionFragment
          ...ImageTextSectionFragment
        }
      }
    }
  }
`
export default BlogPost

import React from 'react'
import { graphql } from 'gatsby'
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'
import ContentfulRichTech from 'src/components/ContenfulRichText/ContentfulRichText'
import ContentfulReferences from 'src/components/ContentfulReferences/ContentfulReferences'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'
import Wrapper from 'src/components/Wrapper/Wrapper'

interface PageProps {
  data: {
    contentfulPage: {
      pageTitle: string
      url: string
      pageDescription: {
        pageDescription: string
      }
      content: {
        raw: RenderRichTextData<ContentfulRichTextGatsbyReference>
        references: []
      }
    }
  }
}

const Page = ({ data }: PageProps) => {
  const { contentfulPage } = data
  console.log(contentfulPage)
  const text = contentfulPage.pageDescription.pageDescription
  return (
    <div className="mt-32 lg:mt-0">
      <Wrapper className="max-w-[600px] text-center">
        <h1>{contentfulPage.pageTitle}</h1>
        <p className="max-w-[760px] mx-auto">{text}</p>
      </Wrapper>
      <ContentfulRichTech richText={contentfulPage.content} />
    </div>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulPage(id: { eq: $id }) {
      pageTitle
      contentful_id
      url
      pageDescription {
        pageDescription
      }
      content {
        raw
        references {
          ...ColumnSectionFragment
          ...WelcomeSectionFragment
          ...ImageTextSectionFragment
          ...ImageGridFragment
          ...ListaPostowFragment
          ...ListaOfertFragment
          ... on ContentfulAsset {
            __typename
            contentful_id
            alt: description
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Page

import React from 'react'
import { graphql } from 'gatsby'
import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'

/// components
import ContentfulRichTech from 'src/components/ContenfulRichText/ContentfulRichText'
import Wrapper from 'src/components/Wrapper/Wrapper'
import MainWrapper from 'src/components/MainWrapper/MainWrapper'

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
    <MainWrapper className="mt-32 lg:mt-0">
      <Wrapper className="px-6 lg:px-0 max-w-[600px] text-center">
        <h1>{contentfulPage.pageTitle}</h1>
        <p className="max-w-[760px] mx-auto">{text}</p>
      </Wrapper>
      <ContentfulRichTech richText={contentfulPage.content} />
    </MainWrapper>
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
          ... on Node {
            ...ColumnSectionFragment
            ...WelcomeSectionFragment
            ...ImageTextSectionFragment
            ...ImageGridFragment
            ...ListaPostowFragment
            ...ListaOfertFragment
            ...ListaFragment
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
  }
`

export default Page

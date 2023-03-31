import React from 'react'
import { graphql, PageProps } from 'gatsby'
import BlogListView from 'src/components/views/BlogList'
import Seo from 'src/components/Seo'
import {
  PageContextProps,
  TemplateProps,
} from 'src/interfaces/CustomPagesProps'

const AllBlogListPage = ({
  data,
  pageContext,
}: PageProps<TemplateProps, PageContextProps>) => {
  const { allContentfulBlogPost } = data
  const { contentfulListy } = data

  return (
    <>
      <BlogListView
        data={allContentfulBlogPost}
        pageContext={pageContext}
        info={contentfulListy}
      />
    </>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allContentfulBlogPost(
      sort: { createdAt: DESC }
      limit: $limit
      skip: $skip
    ) {
      group(field: { test: SELECT }) {
        totalCount
        fieldValue
      }
      nodes {
        gatsbyPath(filePath: "/{contentfulBlogPost.url}")
        pageTitle
        category {
          category
        }
        thubmnail {
          gatsbyImageData(width: 560, height: 316)
          title
        }
      }
    }
    contentfulListy(contentful_id: { eq: "7yjMi5HekJWv3cr5e6Qt7s" }) {
      pageTitle
      metaTitle
      metaDescription
      topDescription {
        raw
      }
    }
  }
`

export default AllBlogListPage
export const Head = ({ data }: PageProps<TemplateProps>) => {
  const { contentfulListy } = data

  return (
    <Seo
      title={contentfulListy.metaTitle}
      description={contentfulListy.metaDescription}
    />
  )
}

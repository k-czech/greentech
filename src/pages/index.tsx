import React from 'react'
import Seo from '../components/Seo'

import { graphql, Link } from 'gatsby'
import '../assets/styles/homepage/homepage.scss'
import { Hero } from 'src/components/Hero/Hero'
import Title from 'src/components/Title/Title'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'
import Wrapper from 'src/components/Wrapper/Wrapper'

import { IGatsbyImageData } from 'gatsby-plugin-image'

import ContentfulReferences from 'src/components/ContentfulReferences/ContentfulReferences'

interface MainPageProps {
  data: {
    contentfulMainPage: {
      pageTitle: string
      slug: string
      heroBanner: {
        title: string
        subtitle: string
        button: string
        image: {
          title: string
          gatsbyImageData: IGatsbyImageData
        }
      }
      contentRefrences: any[]
      blogPosts: any[]
    }
  }
}

const Homepage = ({ data }: MainPageProps) => {
  const { heroBanner, contentRefrences, blogPosts } = data.contentfulMainPage

  console.log(blogPosts)

  return (
    <>
      <Hero data={heroBanner} />
      <ContentfulReferences references={contentRefrences} />
    </>
  )
}

export const query = graphql`
  query {
    contentfulMainPage {
      heroBanner {
        title
        subtitle
        button
        image {
          gatsbyImageData
          title
        }
      }
      contentRefrences {
        ...WelcomeSectionFragment
        ...ImageTextSectionFragment
        ...CounterFragment
        ...ColumnSectionFragment
        ...FeaturesFragment
        ...ImageGridFragment
      }
      blogPosts {
        pageTitle
        shortDesc
        url
        thubmnail {
          gatsbyImageData
          title
        }
      }
    }
  }
`

export default Homepage

export const Head = () => (
  <Seo
    title="Instalacje fotowoltaiczne, czysta energia odnawialna, niezależność energetyczna - Małopolska – GreenTech"
    description="Nasza firma to pierwszy krok do uniezależnienia się od firm energetycznych oraz posiadania własnej ekologicznej energii! Zamów instalację do swojego domu."
  />
)

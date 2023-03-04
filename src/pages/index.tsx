import React from 'react'
import { graphql, Link } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'

/// components
import { Hero } from 'src/components/Hero/Hero'
import Seo from '../components/Seo'
import Wrapper from 'src/components/Wrapper/Wrapper'
import ContentfulReferences from 'src/components/ContentfulReferences/ContentfulReferences'
import Image from 'src/components/Image/Image'
import MainWrapper from 'src/components/MainWrapper/MainWrapper'

///style
import '../assets/styles/homepage/homepage.scss'
import 'src/assets/styles/image-anim/image-anim.scss'

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
        imageMobile: {
          title: string
          gatsbyImageData: IGatsbyImageData
        }
      }
      contentRefrences: []
      blogPosts: [
        {
          pageTitle: string
          shortDesc: string
          url: string
          thubmnail: {
            title: string
            gatsbyImageData: IGatsbyImageData
          }
        },
      ]
    }
  }
}

const Homepage = ({ data }: MainPageProps) => {
  const { heroBanner, contentRefrences, blogPosts } = data.contentfulMainPage

  console.log(data)

  return (
    <>
      <Hero data={heroBanner} />
      <MainWrapper className="max-w-[1440px] mx-auto">
        <ContentfulReferences references={contentRefrences} />
        <section className="my-10">
          <Wrapper className="mx-auto">
            <h3>Blog</h3>
            <div className="container mx-auto grid gap-y-10 lg:grid-cols-2 lg:gap-10">
              {blogPosts.map((item, index) => (
                <div
                  className="flex flex-row flex-wrap items-center"
                  key={index}
                >
                  <div className="w-40 h-40 mr-8">
                    <Image
                      image={item.thubmnail.gatsbyImageData}
                      alt={item.thubmnail.title}
                      classNameImg="h-full scale-up"
                    />
                  </div>
                  <div className="flex flex-col grow shrink basis-52">
                    <Link
                      to={`/${item.url}`}
                      className="text-secondary-color font-bold text-lg hover:underline"
                    >
                      {item.pageTitle}
                    </Link>
                    <p className="text-secondary-color font-light text-base">
                      {item.shortDesc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Wrapper>
        </section>
      </MainWrapper>
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
        imageMobile {
          title
          gatsbyImageData
        }
      }
      contentRefrences {
        ... on Node {
          ...WelcomeSectionFragment
          ...ImageTextSectionFragment
          ...CounterFragment
          ...ColumnSectionFragment
          ...FeaturesFragment
          ...ImageGridFragment
        }
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

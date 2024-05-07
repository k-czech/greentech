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
import MainWrapper from 'src/components/MainWrapper/MainWrapper'
import Seo from 'src/components/Seo'

interface PageProps {
  data: {
    contentfulOfferPage: {
      pageTitle: string
      url: string
      title: string
      subTitle: string
      metaTitle: string
      metaDescription: string
      offerHeroImage: {
        title: string
        gatsbyImageData: IGatsbyImageData
      }
      content: RenderRichTextData<ContentfulRichTextGatsbyReference>
      seopages: [
        {
          pageTitle: string
          url: string
          district: string[]
        },
      ]
    }
  }
}

const BlogPost = ({ data }: PageProps) => {
  const { contentfulOfferPage } = data
  const { offerHeroImage } = contentfulOfferPage

  const getDistricts = (uniqueDistricts: string[]) => {
    const objWithDistricts = Object.create({})

    for (const district of uniqueDistricts) {
      objWithDistricts[district] = []
    }

    contentfulOfferPage.seopages.map((item) => {
      objWithDistricts[item.district[0]].push({
        city: item.district[1],
        url: item.url,
      })
    })

    return objWithDistricts
  }

  const uniqueDistricts = contentfulOfferPage.seopages
    ? [...new Set(contentfulOfferPage.seopages.map((item) => item.district[0]))]
    : []

  const districtsWithCities = contentfulOfferPage.seopages
    ? getDistricts(uniqueDistricts)
    : null

  const toggleAccordion = (e: React.MouseEvent<HTMLElement>) => {
    const id = e.currentTarget.id
    const list = document.querySelector(`#list-${id}`)
    e.currentTarget.classList.toggle('rotate-img')
    list?.classList.toggle('open')
  }
  return (
    <>
      <div>
        <div className="flex flex-col sm:flex-row max-w-[1440px] mx-auto mt-32 lg:-mt-32 bg-gray-color ">
          <div className="order-last sm:order-first max-h-[560px] sm:max-h-none overflow-hidden">
            <Image
              image={offerHeroImage.gatsbyImageData}
              alt={offerHeroImage.title}
            />
          </div>
          <div className="flex items-center justify-center order-first sm:order-last grow p-10 sm:p-0 sm:pl-10">
            <div className="flex flex-col max-w-[560px]">
              <h3 className="lg:text-6xl">{contentfulOfferPage.title}</h3>
              <p>{contentfulOfferPage.subTitle}</p>
            </div>
          </div>
        </div>
      </div>
      <MainWrapper className="px-6 md:px-12 xl:px-0">
        <Wrapper>
          <div className="mt-16">
            <ContentfulRichTech richText={contentfulOfferPage.content} />
            {contentfulOfferPage.seopages ? (
              <div className="our-offer-wrapper mt-16">
                <h3>Zobacz naszą ofertę</h3>
                {uniqueDistricts.map((district, index) => (
                  <div key={index} className="mb-8">
                    <div
                      id={`${index}`}
                      className="flex justify-between max-w-[500px] cursor-pointer mb-4 rotate-img"
                      onClick={toggleAccordion}
                    >
                      <h4 className="m-0 text-lg">{district}</h4>
                      <StaticImage
                        src="../assets/icons/arrow-r.png"
                        alt="arrow ico"
                      />
                    </div>
                    <ul
                      id={`list-${index}`}
                      className="hidden scale-0 transition-transform open"
                    >
                      {districtsWithCities[district].map(
                        (
                          place: { city: string; url: string },
                          index: number,
                        ) => (
                          <li key={index} className="mb-2">
                            <Link to={'/' + place.url}>{place.city}</Link>
                          </li>
                        ),
                      )}
                    </ul>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </Wrapper>
      </MainWrapper>
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
      title
      subTitle
      metaTitle
      metaDescription
      offerHeroImage {
        title
        gatsbyImageData
      }
      content {
        raw
        references {
          ... on Node {
            ...ColumnSectionFragment
            ...ImageTextSectionFragment
          }
        }
      }
      seopages {
        pageTitle
        url
        district
      }
    }
  }
`
export default BlogPost

export const Head = ({ data }: PageProps) => {
  const { metaTitle, pageTitle, metaDescription } = data.contentfulOfferPage
  const seoTitle = metaTitle ? metaTitle : pageTitle
  const seoDesc = metaDescription
    ? metaDescription
    : 'Nasza firma to pierwszy krok do uniezależnienia się od firm energetycznych oraz posiadania własnej ekologicznej energii! Zamów instalację do swojego domu.'
  return <Seo title={seoTitle} description={seoDesc} />
}

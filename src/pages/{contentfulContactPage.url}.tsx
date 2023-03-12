import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'

// components
import BigText from 'src/components/BigText/BigText'
import FormWrap from 'src/components/FormWrap/FormWrap'
import BackgroundSection from 'src/components/BackgroundSection/BackgroundSection'
import MainWrapper from 'src/components/MainWrapper/MainWrapper'
import Seo from 'src/components/Seo'

interface QueryDataProps {
  data: {
    contentfulContactPage: {
      pageTitle: string
      url: string
      metaTitle: string
      metaDescription: string
      contactData: {
        DaneKontaktowe: [
          {
            title: string
            prefix: string
            data: {
              email: string
              phone: string
              prefix: string
              people: []
            }
          },
        ]
      }
      bcgImg: {
        gatsbyImageData: {
          images: IGatsbyImageData
        }
        title: string
      }
    }
  }
}

const ContactPage = ({ data }: QueryDataProps) => {
  const { contactData, bcgImg } = data.contentfulContactPage

  return (
    <MainWrapper>
      <section className="flex flex-col p-0 mt-32 md:flex-row lg:mt-0">
        <BackgroundSection
          image={bcgImg.gatsbyImageData}
          alt={bcgImg.title}
          className="w-full"
        >
          <div
            className={`pt-20 lg:pb-8 lg:pl-24 lg:pr-16 ${
              contactData ? undefined : 'max-w-[660px] container m-auto'
            }`}
          >
            <div className="mb-7">
              <h3 className="text-white-color">
                Porozmawiajmy o Twoich oczekiwaniach
              </h3>
              <p className="text-white-color">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Tincidunt ornare massa eget egestas purus viverra accumsan.
              </p>
            </div>
            <FormWrap />
          </div>
        </BackgroundSection>
        {contactData ? (
          <div className="min-w-[675px] flex flex-col grow pb-8 px-10 pt-20 md:pl-16 md:pr-20 bg-gray-color">
            {contactData.DaneKontaktowe.map((item, index) => (
              <div key={index} className="mb-6">
                <p className="mb-4">{item.title}</p>
                {item.data.email ? (
                  <BigText
                    text={item.data.email}
                    href={`mailto:${item.data.email}`}
                  />
                ) : null}
                {item.data.phone ? (
                  <BigText
                    text={item.data.phone}
                    span={item.data.prefix}
                    href={`tel:${item.data.prefix}${item.data.email}`}
                  />
                ) : null}
                {item.data.people
                  ? item.data.people.map((person, index) => (
                      <div key={index}>
                        <p>{person[0]}</p>
                        <BigText
                          text={person[1]}
                          span={item.data.prefix}
                          href={`tel:${item.data.prefix}${item.data.email}`}
                        />
                      </div>
                    ))
                  : null}
              </div>
            ))}
            <p className="mt-auto text-secondary-color text-xs font-light">
              *Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Tincidunt ornare massa eget egestas purus viverra accumsan.
            </p>
          </div>
        ) : null}
      </section>
    </MainWrapper>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulContactPage(id: { eq: $id }) {
      pageTitle
      contentful_id
      url
      metaTitle
      metaDescription
      bcgImg {
        gatsbyImageData
        title
      }
      contactData {
        DaneKontaktowe {
          title
          data {
            email
            people
            phone
            prefix
          }
        }
      }
    }
  }
`

export default ContactPage

export const Head = ({ data }: QueryDataProps) => {
  const { metaTitle, pageTitle, metaDescription } = data.contentfulContactPage
  const seoTitle = metaTitle ? metaTitle : pageTitle
  const seoDesc = metaDescription
    ? metaDescription
    : 'Nasza firma to pierwszy krok do uniezależnienia się od firm energetycznych oraz posiadania własnej ekologicznej energii! Zamów instalację do swojego domu.'
  return <Seo title={seoTitle} description={seoDesc} />
}

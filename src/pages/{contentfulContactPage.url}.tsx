import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'
import Title from 'src/components/Title/Title'
import BigText from 'src/components/BigText/BigText'
import FormWrap from 'src/components/FormWrap/FormWrap'
import { graphql } from 'gatsby'
import BackgroundSection from 'src/components/BackgroundSection/BackgroundSection'

interface QueryDataProps {
  data: {
    contentfulContactPage: {
      pageTitle: string
      url: string
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

  console.log(contactData)
  return (
    <section className="flex flex-col p-0 mt-32 md:flex-row lg:mt-0">
      <BackgroundSection image={bcgImg.gatsbyImageData} alt={bcgImg.title}>
        <div
          className={`pt-20 lg:pb-8 lg:pl-24 lg:pr-16 ${
            contactData ? undefined : 'max-w-[660px] container m-auto'
          }`}
        >
          <div className="mb-7">
            <Title
              text="Porozmawiajmy o Twoich oczekiwaniach"
              className="text-white-color"
            />
            <DescriptionParagraph
              className="text-white-color"
              text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt ornare massa eget egestas purus viverra accumsan."
            />
          </div>
          <FormWrap />
        </div>
      </BackgroundSection>
      {contactData ? (
        <div className="flex flex-col grow pb-8 px-10 pt-20 md:pl-16 md:pr-20 bg-gray-color">
          {contactData.DaneKontaktowe.map((item, index) => (
            <div key={index}>
              <p className="mb-10">{item.title}</p>
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
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulContactPage(id: { eq: $id }) {
      pageTitle
      contentful_id
      url
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

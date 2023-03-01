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
      contact: {
        contact: string
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
  const { pageTitle, url, contact, bcgImg } = data.contentfulContactPage
  console.log(bcgImg)
  return (
    <section className="flex flex-col p-0 mt-32 md:flex-row lg:mt-0">
      <BackgroundSection image={bcgImg.gatsbyImageData} alt={bcgImg.title}>
        <div
          className={`pt-20 lg:pb-8 lg:pl-24 lg:pr-16 ${
            contact ? undefined : 'max-w-[660px] container m-auto'
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
      {contact ? (
        <div className="flex flex-col grow pb-8 px-10 pt-20 md:pl-16 md:pr-20 bg-gray-color">
          <div>
            <p className="mb-10">Skontaktuj się bezpośrednio</p>
            <BigText text="sklep@green-tech.com.pl" />
            <BigText text="18 473 18 62" span="+48" />
            <p className="mb-10">Instalacje fotowoltaiczne</p>
            <div>
              <p>Edyta</p>
              <BigText text="797 189 015" span="+48" />
            </div>
            <div>
              <p>Angelika</p>
              <BigText text="531 831 555" span="+48" />
            </div>
            <p className="mb-10">Pompy ciepła</p>
            <div>
              <p>Hubert</p>
              <BigText text="531 831 555" span="+48" />
            </div>
          </div>
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
      contact {
        contact
      }
      bcgImg {
        gatsbyImageData
        title
      }
    }
  }
`

export default ContactPage

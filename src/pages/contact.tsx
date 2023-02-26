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
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const ContactPage = ({ data }: QueryDataProps) => {
  const { file } = data

  return (
    <section className="flex flex-col p-0 mt-32 md:flex-row lg:mt-0">
      <BackgroundSection className="max-w-[732px]" imgData={file}>
        <div className="pt-20 lg:pb-8 lg:pl-24 lg:pr-16">
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

      <div className="flex flex-col grow pb-8 px-10 pt-20 md:pl-16 md:pr-20 bg-gray-color">
        <div>
          <p className="mb-10">Skontaktuj się bezpośrednio</p>
          <BigText text="sklep@green-tech.com.pl" />
          <BigText text="18 473 18 62" span="+48" />
          <p className="mb-10">Instalacje fotowoltaiczne</p>
          <BigText text="531 831 555" span="+48" />
          <BigText text="530 821 814" span="+48" />
        </div>
        <p className="mt-auto text-secondary-color text-xs font-light">
          *Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Tincidunt
          ornare massa eget egestas purus viverra accumsan.
        </p>
      </div>
    </section>
  )
}

export const query = graphql`
  query getBcgImage {
    file(relativePath: { eq: "ask/bcg-img.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default ContactPage

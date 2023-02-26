import React from 'react'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import BackgroundSection from 'src/components/BackgroundSection/BackgroundSection'
import FormWrap from 'src/components/FormWrap/FormWrap'
import Title from 'src/components/Title/Title'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'

interface QueryDataProps {
  data: {
    file: {
      childImageSharp: {
        gatsbyImageData: IGatsbyImageData
      }
    }
  }
}

const AskPage = ({ data }: QueryDataProps) => {
  const { file } = data

  return (
    <section className="p-0 mt-32 lg:mt-0">
      <BackgroundSection imgData={file}>
        <div className="max-w-[660px] container m-auto">
          <div className="mb-7">
            <Title text="Potrzebujesz pomocy?" className="text-white-color" />
            <DescriptionParagraph
              className="text-white-color"
              text="Wypełnij poniższy formularz i skontaktuj się z nami już dziś!"
            />
          </div>
          <FormWrap />
        </div>
      </BackgroundSection>
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

export default AskPage

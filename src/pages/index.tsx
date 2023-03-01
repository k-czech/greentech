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
        image: {
          gatsbyImageData: IGatsbyImageData
        }
      }
      contentRefrences: any[]
    }
  }
}

const Homepage = ({ data }: MainPageProps) => {
  const { contentfulMainPage } = data

  return (
    <>
      <Hero />
      <ContentfulReferences references={contentfulMainPage.contentRefrences} />

      <section className="my-10">
        <div className="text-center">
          <Title text="Nasze realizacje" />
          <DescriptionParagraph
            text="A few words about what is depicted on the images or photos. Be concise
          and creative"
          />
        </div>
      </section>

      <section className="my-10">
        <Wrapper className="mx-auto">
          <Title text="Blog" />

          <div className="container mx-auto grid gap-y-10 lg:grid-cols-2 lg:gap-10">
            <div className="flex flex-row flex-wrap items-center">
              <div className="flex flex-col grow shrink basis-52">
                <Link to="#" className="text-secondary-color font-bold text-lg">
                  Moduły hybrydowe – czym są i jak działają?
                </Link>
                <p className="text-secondary-color font-light text-base">
                  Jeśli myślisz o tym, żeby nie tylko pozyskiwać prąd ze słońca,
                  ale dodatkowo...
                </p>
                <span className="text-secondary-color/40 text-sm">
                  Sierpień, 2022
                </span>
              </div>
            </div>

            <div className="flex flex-row flex-wrap items-center">
              <div className="flex flex-col grow shrink basis-52">
                <Link to="#" className="text-secondary-color font-bold text-lg">
                  Optymalizator mocy paneli fotowoltaicznych – czy warto?
                </Link>
                <p className="text-secondary-color font-light text-base">
                  Panel fotowoltaiczny to sprawdzony sposób na pozyskiwanie
                  prądu z odnawialnych źródeł...
                </p>
                <span className="text-secondary-color/40 text-sm">
                  Sierpień, 2022
                </span>
              </div>
            </div>

            <div className="flex flex-row flex-wrap items-center">
              <div className="flex flex-col grow shrink basis-52">
                <Link to="#" className="text-secondary-color font-bold text-lg">
                  Jak sprawdzić panel fotowoltaiczny – usterki i uszkodzenia
                  paneli...
                </Link>
                <p className="text-secondary-color font-light text-base">
                  Jak każde urządzenie, także panele fotowoltaiczne mogą ulec
                  uszkodzeniu lub posiadać wady...
                </p>
                <span className="text-secondary-color/40 text-sm">
                  Sierpień, 2022
                </span>
              </div>
            </div>

            <div className="flex flex-row flex-wrap items-center">
              <div className="flex flex-col grow shrink basis-52">
                <Link to="/" className="text-secondary-color font-bold text-lg">
                  Montaż paneli fotowoltaicznych - różne konstrukcje i
                  rozwiązania
                </Link>
                <p className="text-secondary-color font-light text-base">
                  Nie bez przyczyny coraz więcej osób decyduje się na montaż
                  paneli fotowoltaicznych...
                </p>
                <span className="text-secondary-color/40 text-sm">
                  Sierpień, 2022
                </span>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export const query = graphql`
  query {
    contentfulMainPage {
      contentRefrences {
        ...WelcomeSectionFragment
        ...ImageTextSectionFragment
        ...ImageGridFragment
        ...CounterFragment
        ...ColumnSectionFragment
        ...FeaturesFragment
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

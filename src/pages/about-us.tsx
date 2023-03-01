import React from 'react'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'
import Title from 'src/components/Title/Title'
import Wrapper from 'src/components/Wrapper/Wrapper'
import RichSection from 'src/components/RichSection/ImageTextSection'
import { graphql } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Image from 'src/components/Image/Image'
import ReadMore from 'src/components/ReadMore/ReadMore'
import { col1 } from 'src/data/features'

/// Components

/// images
import Arrow from 'src/assets/icons/arrow-right.svg'

interface ImageProps {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

interface QueryDataProps {
  data: {
    bigImg: ImageProps
    finanse: ImageProps
    image: ImageProps
  }
}

const WelcomeSection = () => (
  <section className="py-10 lg:py-24 lg:my-11 lg:mx-auto">
    <Wrapper className="mx-auto flex flex-col lg:flex-row lg:justify-between">
      <div className="md:w-2/3 lg:w-2/5 md:mr-14">
        <Title
          text="Panele fotowoltaiczne przyszłością całej planety"
          className="lg:mb-0 order-first lg:order-last"
        />
      </div>
      <div className="lg:w-1/3 order-last lg:order-first">
        <DescriptionParagraph
          text="Obecnie da się zaobserwować wzrost zainteresowania OZE, ponieważ konwencjonalne źródła energii są coraz bardziej niepewne.
            Równocześnie, zmiany klimatyczne wyraźnie sygnalizują, że ludzkość powinna zacząć inwestować w takie rodzaje energii, które są stabilne, nie eksploatują naturalnych złóż ziemskich oraz są bezpieczne zarówno dla środowiska, jak i dla ludzi."
        />
      </div>
    </Wrapper>
  </section>
)

const AboutUsPage = ({ data }: QueryDataProps) => {
  return (
    <>
      <Wrapper>
        <div className="max-w-[760px] mx-auto text-center mb-16 mt-32 lg:mt-0 px-10 sm:px-0">
          <Title text="O nas" />
          <DescriptionParagraph
            className="base-color"
            text="W branży OZE - Odnawialnych Źródeł Energii specjalizujemy się od 2010 roku. W całym tym okresie wykonaliśmy kilkaset instalacji fotowoltaicznych sieciowych oraz kilkadziesiąt instalacji hybrydowych i wyspowych. Głównym założeniem działalności naszej firmy jest maksymalne wykorzystanie energii słonecznej i przekształcenie jej na energię elektryczną."
          />
        </div>
      </Wrapper>
      <RichSection
        titleText="Finanse mają znaczenie!"
        descText="Wyobraź sobie świat, w którym część zarobionych przez Ciebie pieniędzy zostaje w portfelu lub idzie na Twoje konto oszczędnościowe. Pełen zwrot inwestycji w instalacje fotowoltaiczne sprawia, że podstawowe rachunki i opłaty za prąd zmieniają się diametralnie - znikają!"
        descText2="Dobrze przemyślany montaż paneli może wręcz wygenerować nadwyżkę, którą można odsprzedać do Zakładu Energetycznego lub wykorzystać w dowolny sposób."
        imgData={data.finanse}
        imageOnRigth
      />
      <RichSection
        titleText=""
        descText="Od początków istnienia naszej firmy zaznaczamy, jak opłacalna i pomocna w zarządzaniu domowym budżetem jest fotowoltaika. Jest to szczególnie istotne we współczesnych czasach, kiedy praktycznie bez przerw korzystamy z urządzeń elektronicznych"
        descText2="Pragniemy wykonywać naszą pracę jak najlepiej i chcemy dostarczać każdej rodzinie, przedsiębiorstwu czy gospodarstwu, spersonalizowany projekt fotowoltaiki. Wychodzimy również naprzeciw osób z mniejszym budżetem (możliwość spłaty ratalnej), doradzamy opierając się na wieloletnim doświadczeniu, a także słuchamy potrzeb naszych Klientów. Posiadamy ekipę projektantów, doradców i montażystów, których nieustanna praktyka i współpraca z Klientami sprawia, że są godnymi zaufania fachowcami."
        imgData={data.image}
      />
      <WelcomeSection />
      <section>
        <Image imgData={data.bigImg} />
      </section>
      <section className="features">
        <Wrapper className="flex flex-col gap-10 md:flex-row">
          <div className="mb-10 md:w-1/2">
            <p className="text-secondary-color font-bold text-xl">
              W czym się specjalizujemy?
            </p>
            <ul className="mt-4">
              {col1.map((item, index) => (
                <li key={index} className="flex items-baseline mb-4">
                  <div>
                    <Arrow />
                  </div>
                  <p className="ml-4 font-light">{item}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-10 md:w-1/2">
            <p className="text-secondary-color font-bold text-xl">
              W ramach naszej specjalizacji oferujemy:
            </p>
            <ul className="mt-4">
              {col1.map((item, index) => (
                <li key={index} className="flex items-baseline mb-4">
                  <div>
                    <Arrow />
                  </div>
                  <p className="ml-4 font-light">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </Wrapper>
      </section>
      <ReadMore />
    </>
  )
}

export const query = graphql`
  query getImages {
    bigImg: file(relativePath: { eq: "about/big-img.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    finanse: file(relativePath: { eq: "about/finanse.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    image: file(relativePath: { eq: "about/image.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default AboutUsPage

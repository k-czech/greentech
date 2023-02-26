import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import RichSection from 'src/components/RichSection/RichSection'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'
import Wrapper from 'src/components/Wrapper/Wrapper'
import Title from 'src/components/Title/Title'
import Image from 'src/components/Image/Image'
import { graphql } from 'gatsby'

interface ImageProps {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

interface QueryDataProps {
  data: {
    panele: ImageProps
    hero: ImageProps
  }
}

const Offer = ({ data }: QueryDataProps) => {
  return (
    <>
      <div className="flex flex-col sm:flex-row max-w-[1350px] mx-auto mt-32 lg:-mt-32 bg-gray-color ">
        <div className="order-last sm:order-first max-h-[560px] sm:max-h-none overflow-hidden">
          <Image imgData={data.hero} />
        </div>

        <div className="flex items-center justify-center order-first sm:order-last grow p-10 sm:p-0 sm:pl-10">
          <div className="flex flex-col max-w-[560px]">
            <Title
              text="Panele fotowoltaniczne Next2Sun"
              className="lg:text-6xl"
            />
            <DescriptionParagraph text="Koncepcja systemu Next2Sun - pionowa instalacja modułów słonecznych wykorzystująca promieniowanie słoneczne dwustronnie (moduły „bifacialne”)." />
          </div>
        </div>
      </div>
      <RichSection
        titleText="Panele fotowoltaiczne Next2Sun przyjazne dla rolnictwa"
        descText="Konstrukcja pionowo ustawianych modułów PV doskonale nadaje się zarówno pod budowę dużych farm fotowoltaicznych, jak również do indywidualnej produkcji energii elektrycznej w gospodarstwach rolnych lub zakładach przemysłowych."
        descText2="Panele fotowoltaiczne mogą znajdować się również na gruntach przeznaczonych pod wypas bydła lub drobiu."
        imgData={data.panele}
      />
      <Wrapper className="flex flex-col md:flex-row px-10 lg:px-0 mx-auto gap-10">
        <DescriptionParagraph
          text="Opracowana i opatentowana przez konstruktorów Next2Sun konstrukcja
          wykorzystania modułów dwustronnych ustawianych pionowo w orientacji
          wschód-zachód zapewni znacznie większą produktywność energii w porze
          porannej i popołudniowej, co umożliwia inwestorom skorzystanie z
          wyższych cen energii notowanych w tym czasie na giełdzie (gdy w środku
          dnia ceny będzie obniżać rosnąca generacja z fotowoltaiki
          konwencjonalnej)."
        />
        <DescriptionParagraph
          text=" W połączeniu ze zwiększoną produktywnością zapewni wyższe zyski nawet
          o 25% w stosunku do tradycyjnych instalacji PV. Panele zajmują jedynie ok.1% przeznaczonej do ich montażu powierzchni
          pola. Przestrzenie te pozwalają na zastosowanie konwencjonalnych
          maszyn rolniczych, co gwarantuje efektywne zarządzanie pracą w
          terenie, np. mechaniczne koszenie łąk przy użyciu ciągnika."
        />
      </Wrapper>
      <RichSection
        titleText="Panele fotowoltaiczne Next2Sun przyjazne dla rolnictwa"
        descText="Konstrukcja pionowo ustawianych modułów PV doskonale nadaje się zarówno pod budowę dużych farm fotowoltaicznych, jak również do indywidualnej produkcji energii elektrycznej w gospodarstwach rolnych lub zakładach przemysłowych."
        descText2="Panele fotowoltaiczne mogą znajdować się również na gruntach przeznaczonych pod wypas bydła lub drobiu."
        imgData={data.panele}
        imageOnRigth={true}
      />
    </>
  )
}

export const query = graphql`
  query getImages {
    panele: file(relativePath: { eq: "offer/panele.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    hero: file(relativePath: { eq: "offer/offer-hero.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export default Offer

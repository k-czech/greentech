import React from 'react'
import Seo from '../components/Seo'
import { Button } from '../components/Button/Button'
import { graphql, Link } from 'gatsby'
import '../assets/styles/homepage/homepage.scss'
import { Hero } from 'src/components/Hero/Hero'
import Title from 'src/components/Title/Title'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'
import Wrapper from 'src/components/Wrapper/Wrapper'
import Image from 'src/components/Image/Image'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import ModalWithVideo from 'src/components/ModalWithVideo/ModalWithVideo'

interface ImageProps {
  childImageSharp: {
    gatsbyImageData: IGatsbyImageData
  }
}

interface QueryDataProps {
  data: {
    welcome: ImageProps
    gallery_1: ImageProps
    gallery_2: ImageProps
    gallery_3: ImageProps
    gallery_4: ImageProps
    gallery_5: ImageProps
    gallery_6: ImageProps
    video: ImageProps
    blog_1: ImageProps
    blog_2: ImageProps
    blog_3: ImageProps
    blog_4: ImageProps
  }
}

const WelcomeSection = () => (
  <section className="bg-gray-color py-10 lg:py-24 lg:my-11 lg:mx-auto">
    <Wrapper className="mx-auto flex flex-col md:flex-row md:justify-between">
      <div className="md:w-2/3 lg:w-2/5 md:mr-14">
        <Title
          text="Pierwszy krok do niezależności energetycznej"
          className="lg:mb-0"
        />
      </div>
      <div className="md:w-1/3">
        <DescriptionParagraph
          text="Postaw na swobodę finansową i bądź jedną z wielu osób, które zaufały
          Odnawialnym Źródłom Energii! Instalacja fotowoltaiczna to pierwszy
          krok do niezależności energetycznej. Decydując się na oferowane przez
          nas rozwiązania, które są dla każdego personalizowane, masz możliwość
          zredukowania kosztów energii elektrycznej do zera."
        />
      </div>
    </Wrapper>
  </section>
)

const Homepage = ({ data }: QueryDataProps) => (
  <>
    <Hero />
    <WelcomeSection />
    <section className="my-10 lg:my-24">
      <Wrapper className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="md:w-2/5 md:order-last mb-5 md:mb-0">
          <Title text="Projektujemy panele generujące prąd" />
          <DescriptionParagraph
            text="Decydując się na budowę fotowoltaiki należy w pierwszej kolejności
            oszacować dotychczasowe zużycie energii elektrycznej oraz znaleźć
            odpowiednie miejsce na jej budowę. Kompletna instalacja
            fotowoltaiczna składa się z konstrukcji wsporczej, modułów
            fotowoltaicznych, inwertera sieciowego, zabezpieczeń prądu stałego
            oraz zmiennego a także uziemienia. Dopełnieniem budowy instalacji
            fotowoltaicznej jest jej zgłoszenie do Zakładu Energetycznego.
            Zapraszamy do obejrzenia naszych realizacji i poznania metod
            wykorzystywanych przez naszą firmę w pracy."
          />
          <br />
          <DescriptionParagraph
            text="Zapraszamy do obejrzenia naszych realizacji i poznania metod
            wykorzystywanych przez naszą firmę w pracy."
          />
        </div>
        <div className="md:w-1/2 mb-5 md:mb-0 md:mr-14 md:order-first relative welcome-image after:w-16 after:h-16 after:-bottom-5 after:-right-5 lg:after:w-24 lg:after:h-24 lg:after:-bottom-8 lg:after:-right-8">
          <Image imgData={data.welcome} />
        </div>
      </Wrapper>
    </section>
    <section className="my-10">
      <div className="text-center">
        <Title text="Nasze realizacje" />
        <DescriptionParagraph
          text="A few words about what is depicted on the images or photos. Be concise
          and creative"
        />
      </div>

      <div className="flex flex-col lg:mt-16">
        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <div className="mt-5 max-w-[524px]  mx-auto lg:w-2/5">
            <Image imgData={data.gallery_1} />
          </div>
          <div className="mt-5 max-w-[524px] mx-auto lg:w-1/5">
            <Image imgData={data.gallery_2} />
          </div>
          <div className="mt-5 max-w-[524px] mx-auto lg:w-2/5">
            <Image imgData={data.gallery_3} />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <div className="mt-5 max-w-[524px] mx-auto lg:w-1/5">
            <Image imgData={data.gallery_4} />
          </div>
          <div className="mt-5 max-w-[524px] mx-auto lg:w-2/5">
            <Image imgData={data.gallery_1} />
          </div>
          <div className="mt-5 max-w-[524px] mx-auto lg:w-2/5">
            <Image imgData={data.gallery_3} />
          </div>
        </div>
      </div>
    </section>

    <section className="bg-yellow-color pt-24 pb-16">
      <Wrapper className="mx-auto lg:space-y-16">
        <Title text="Dlaczego warto nam zaufać?" className="text-white" />
        <div className="flex flex-col md:flex-row md:justify-between md:items-start space-y-5 md:space-y-0">
          <div className="">
            <span className="text-white text-6xl font-extrabold pb-2 block">
              12
            </span>
            <p className="text-white text-base font-light">
              tyle lat na rynku energii odnawialnej
            </p>
          </div>
          <div className="">
            <span className="text-white text-6xl font-extrabold pb-2 block">
              500
            </span>
            <p className="text-white text-base font-light">
              Zrealizowanych projektów
              <br /> fotowoltaicznych
            </p>
          </div>
          <div className="">
            <span className="text-white text-6xl font-extrabold pb-2 block">
              59
            </span>
            <p className="text-white text-base font-light">
              MW wytworzonej energii
            </p>
          </div>
          <div className="">
            <span className="text-white text-6xl font-extrabold pb-2 block">
              4
            </span>
            <p className="text-white text-base font-light">
              kraje poza Polską w których działaliśmy
            </p>
          </div>
        </div>
        <div className="mt-11 lg:mt-0 lg:w-full flex justify-center">
          <Button path="/" text="Zapytaj o ofertę" />
        </div>
      </Wrapper>
    </section>
    <section>
      <Wrapper className="container mx-auto flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-10">
        <div className="flex flex-col lg:flex-row lg:w-2/3 lg:space-x-10 space-y-5 lg:space-y-0">
          <div className="space-y-3 lg:w-1/2">
            <h5 className="text-xl font-bold text-secondary-color">
              Zaopatrz się w darmowy prąd
            </h5>
            <DescriptionParagraph
              text="Warto także wspomnieć, że panele fotowoltaiczne są nie tylko
          polecane do montażu na dachach prywatnych domów. Wielką
          popularnością cieszą się wśród przedsiębiorców, zmniejszając tym
          samym koszty utrzymania biznesu. Podobnie sytuacja wygląda w
          przypadku gospodarstw rolnych, gdzie można uzyskać dofinansowanie na
          instalację systemu energii odnawialnej."
            />
          </div>
          <div className="lg:w-1/2">
            <h5 className="text-xl font-bold text-secondary-color">
              Fotowoltaika jest dobra
              <br /> w każdym miejscu
            </h5>
            <DescriptionParagraph
              text="Czas porzucić jeszcze jeden mit! Mówi on, że panele są nieskuteczne
            w miejscach pozbawionych słońca przez część roku. Produkowane
            obecnie moduły są jednak przystosowane do tego, aby zachować moc i
            wydajność również przy rozproszonym świetle, częstym zacienieniu czy
            nawet zabrudzeniach na powierzchni ogniwa!"
            />
          </div>
        </div>
        <div className="relative max-w-[400px] lg:max-w-none lg:w-1/3">
          <Image imgData={data.video} />
          <ModalWithVideo />
        </div>
      </Wrapper>
    </section>
    <section className="bg-base-color space-y-10 lg:space-y-16 pt-24 pb-16">
      <Wrapper className="container mx-auto flex flex-col">
        <div className="flex flex-col mb-16 lg:flex-row lg:justify-between lg:mb-36 ">
          <div className="lg:w-2/5">
            <Title text="Co nas wyróżnia?" className="text-white lg:mb-0" />
          </div>
          <div className="lg:w-2/5 lg:ml-36">
            <DescriptionParagraph
              text="Zapewne już wiesz, jak skuteczne w odkładaniu pieniędzy jest
          posiadanie na dachu domu lub na swojej posesji paneli
          fotowoltaicznych. Pozyskiwanie prądu z energii słonecznej pozwala
          wytwarzać niezbędną do życia elektryczność i magazynować jej nadwyżki,
          które występują szczególnie w ciepłych miesiącach."
              className="text-white"
            />
          </div>
        </div>

        <div className="stands container mx-auto">
          <ul className="flex flex-col lg:flex-row space-y-5 lg:space-y-0 lg:space-x-10">
            <li className="text-white">
              <span className="font-bold">01</span>
              <p className="text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                własna linia wysokowydajnych modułów fotowoltaicznych z serii
                Green-Tech
              </p>
            </li>
            <li className="text-white">
              <span className="font-bold">02</span>
              <p className="text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                wykorzystujemy inwertery sieciowe Growatt, Solar Edge, Fronius
              </p>
            </li>
            <li className="text-white">
              <span className="font-bold">03</span>
              <p className="text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                stosujemy wysokiej jakości zabezpieczenia sieciowe
              </p>
            </li>
            <li className="text-white">
              <span className="font-bold">04</span>
              <p className="text-white font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
                wykorzystujemy konstrukcje wsporcze z Polskiej huty
              </p>
            </li>
          </ul>
        </div>
      </Wrapper>
    </section>
    <section className="my-10">
      <Wrapper className="mx-auto">
        <Title text="Blog" />

        <div className="container mx-auto grid gap-y-10 lg:grid-cols-2 lg:gap-10">
          <div className="flex flex-row flex-wrap items-center">
            <Image imgData={data.blog_1} className="w-40 h-40 mr-8" />

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
            <Image imgData={data.blog_2} className="w-40 h-40 mr-8" />
            <div className="flex flex-col grow shrink basis-52">
              <Link to="#" className="text-secondary-color font-bold text-lg">
                Optymalizator mocy paneli fotowoltaicznych – czy warto?
              </Link>
              <p className="text-secondary-color font-light text-base">
                Panel fotowoltaiczny to sprawdzony sposób na pozyskiwanie prądu
                z odnawialnych źródeł...
              </p>
              <span className="text-secondary-color/40 text-sm">
                Sierpień, 2022
              </span>
            </div>
          </div>

          <div className="flex flex-row flex-wrap items-center">
            <Image imgData={data.blog_3} className="w-40 h-40 mr-8" />
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
            <Image imgData={data.blog_4} className="w-40 h-40 mr-8" />
            <div className="flex flex-col grow shrink basis-52">
              <Link to="/" className="text-secondary-color font-bold text-lg">
                Montaż paneli fotowoltaicznych - różne konstrukcje i rozwiązania
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

export const query = graphql`
  query {
    welcome: file(relativePath: { regex: "/1_welcome.jpg/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    gallery_1: file(relativePath: { regex: "/2_gallery.jpg/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    gallery_2: file(relativePath: { regex: "/3_gallery.jpg/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    gallery_3: file(relativePath: { regex: "/4_gallery.jpg/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    gallery_4: file(relativePath: { regex: "/5_gallery.jpg/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    gallery_5: file(relativePath: { regex: "/6_gallery.jpg/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    gallery_6: file(relativePath: { regex: "/7_gallery.jpg/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    video: file(relativePath: { regex: "/8_video.jpg/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    blog_1: file(relativePath: { regex: "/12_blog.jpg/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    blog_2: file(relativePath: { regex: "/13_blog.jpg/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    blog_3: file(relativePath: { regex: "/14_blog.jpg/" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
    blog_4: file(relativePath: { regex: "/15_blog.jpg/" }) {
      childImageSharp {
        gatsbyImageData
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

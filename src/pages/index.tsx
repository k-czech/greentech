import React from 'react'
import Seo from '../components/Seo'
import MainTemplate from '../components/MainTemplate'
import { Button } from '../components/Button/Button'
import { graphql, Link } from 'gatsby'
import '../assets/styles/homepage/homepage.scss'
import PlayButton from '../assets/icons/play.svg'

interface HeroProps {
  imageSource: string
}

interface ImagePublicUrl {
  publicURL: string
}

interface QueryDataProps {
  data: {
    hero: ImagePublicUrl
    welcome: ImagePublicUrl
    gallery_1: ImagePublicUrl
    gallery_2: ImagePublicUrl
    gallery_3: ImagePublicUrl
    gallery_4: ImagePublicUrl
    gallery_5: ImagePublicUrl
    gallery_6: ImagePublicUrl
    video: ImagePublicUrl
    blog_1: ImagePublicUrl
    blog_2: ImagePublicUrl
    blog_3: ImagePublicUrl
    blog_4: ImagePublicUrl
  }
}

interface TextProps {
  text: string
  className?: string | undefined
}

const HeroHeading = () => (
  <h1 className="text-white font-bold text-4xl lg:text-5xl lg:mb-10">
    Instalacje fotowoltaiczne
    <br /> tworzone z pasją
  </h1>
)

const HeroParagraph = () => (
  <p className="text-white font-normal text-lg">Zainwestuj w darmowy prąd</p>
)

const Hero = ({ imageSource }: HeroProps) => (
  <div
    className="w-full h-screen min-h-[560px] xl:max-h-[711px] xl:mx-10 xl:w-auto flex flex-col justify-center xl:justify-end bg-no-repeat bg-cover px-10"
    style={{ backgroundImage: `url(${imageSource})` }}
  >
    <div className="container mx-auto space-y-4 lg:px-10 xl:mb-14 xl:pl-40">
      <HeroHeading />
      <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0">
        <HeroParagraph />
        <Button path="/" text="Zapytaj o ofertę" className="lg:mt-0 lg:ml-20" />
      </div>
    </div>
  </div>
)

const Title = ({ text, className }: TextProps) => (
  <h3
    className={`text-secondary-color text-3xl mb-6 md:mb-11 lg:text-4xl ${className}`}
  >
    {text}
  </h3>
)

const DescriptionParagraph = ({ text, className }: TextProps) => (
  <p className={`text-secondary-color ${className}`}>{text}</p>
)

const WelcomeSection = () => (
  <section className="bg-gray-color p-10 lg:py-24 lg:m-11">
    <div className="container mx-auto flex flex-col md:flex-row  md:justify-between">
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
    </div>
  </section>
)

const Homepage = ({ data }: QueryDataProps) => (
  <MainTemplate>
    <Hero imageSource={data.hero.publicURL} />
    <WelcomeSection />
    <section className="m-10 lg:m-24">
      <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
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
          <img src={data.welcome.publicURL} alt="#" />
        </div>
      </div>
    </section>
    <section className="m-10">
      <div className="text-center">
        <Title text="Nasze realizacje" />
        <DescriptionParagraph
          text="A few words about what is depicted on the images or photos. Be concise
          and creative"
        />
      </div>

      <div className="flex flex-col lg:mt-16">
        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <div className="mt-5 lg:w-2/5">
            <img src={data.gallery_1.publicURL} alt="#" />
          </div>
          <div className="mt-5 lg:w-1/5">
            <img src={data.gallery_2.publicURL} alt="#" />
          </div>
          <div className="mt-5 lg:w-2/5">
            <img src={data.gallery_3.publicURL} alt="#" />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row lg:space-x-5">
          <div className="mt-5 lg:w-1/5">
            <img src={data.gallery_4.publicURL} alt="#" />
          </div>
          <div className="mt-5 lg:w-2/5">
            <img src={data.gallery_5.publicURL} alt="#" />
          </div>
          <div className="mt-5 lg:w-2/5">
            <img src={data.gallery_6.publicURL} alt="#" />
          </div>
        </div>
      </div>
    </section>
    <section className="p-10 lg:py-20 lg:mx-10 bg-yellow-color">
      <div className="container mx-auto lg:space-y-16">
        <Title text="Dlaczego warto nam zaufać?" className="text-white" />
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center space-y-5 lg:space-y-0">
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
      </div>
    </section>
    <section className="m-10 lg:my-20">
      <div className="container mx-auto flex flex-col lg:flex-row items-center space-y-5 lg:space-y-0 lg:space-x-10">
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
        <div className="relative lg:w-1/3">
          <img src={data.video.publicURL} alt="#" />
          <button
            onClick={() => console.log('dupa')}
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
          >
            <PlayButton />
          </button>
        </div>
      </div>
    </section>
    <section className="bg-base-color p-10 space-y-10 lg:space-y-16 lg:py-20 lg:mx-10">
      <div className="container mx-auto flex flex-col lg:flex-row">
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
            <p className="font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
              własna linia wysokowydajnych modułów fotowoltaicznych z serii
              Green-Tech
            </p>
          </li>
          <li className="text-white">
            <span className="font-bold">02</span>
            <p className="font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
              wykorzystujemy inwertery sieciowe Growatt, Solar Edge, Fronius
            </p>
          </li>
          <li className="text-white">
            <span className="font-bold">03</span>
            <p className="font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
              stosujemy wysokiej jakości zabezpieczenia sieciowe
            </p>
          </li>
          <li className="text-white">
            <span className="font-bold">04</span>
            <p className="font-light pt-3 mt-3 before:absolute before:top-0 before:h-0.5 before:bg-white/40 before:w-full relative">
              wykorzystujemy konstrukcje wsporcze z Polskiej huty
            </p>
          </li>
        </ul>
      </div>
    </section>
    <section className="m-10">
      <Title text="Blog" />
      <div className="container mx-auto flex flex-col space-y-5">
        <div className="flex flex-col space-y-3">
          <img src={data.blog_1.publicURL} alt="#" />
          <Link to="#" className="text-secondary-color font-bold text-lg">
            Moduły hybrydowe – czym są i jak działają?
          </Link>
          <p className="text-secondary-color font-light text-base">
            Jeśli myślisz o tym, żeby nie tylko pozyskiwać prąd ze słońca, ale
            dodatkowo...
          </p>
          <span className="text-secondary-color/40 text-sm">
            Sierpień, 2022
          </span>
        </div>
        <div className="flex flex-col space-y-3">
          <img src={data.blog_2.publicURL} alt="#" />
          <Link to="#" className="text-secondary-color font-bold text-lg">
            Optymalizator mocy paneli fotowoltaicznych – czy warto?
          </Link>
          <p className="text-secondary-color font-light text-base">
            Panel fotowoltaiczny to sprawdzony sposób na pozyskiwanie prądu z
            odnawialnych źródeł...
          </p>
          <span className="text-secondary-color/40 text-sm">
            Sierpień, 2022
          </span>
        </div>
        <div className="flex flex-col space-y-3">
          <img src={data.blog_3.publicURL} alt="#" />
          <Link to="#" className="text-secondary-color font-bold text-lg">
            Jak sprawdzić panel fotowoltaiczny – usterki i uszkodzenia paneli...
          </Link>
          <p className="text-secondary-color font-light text-base">
            Jak każde urządzenie, także panele fotowoltaiczne mogą ulec
            uszkodzeniu lub posiadać wady...
          </p>
          <span className="text-secondary-color/40 text-sm">
            Sierpień, 2022
          </span>
        </div>
        <div className="flex flex-col space-y-3">
          <img src={data.blog_4.publicURL} alt="#" />
          <Link to="/" className="text-secondary-color font-bold text-lg">
            Montaż paneli fotowoltaicznych - różne konstrukcje i rozwiązania
          </Link>
          <p className="text-secondary-color font-light text-base">
            Nie bez przyczyny coraz więcej osób decyduje się na montaż paneli
            fotowoltaicznych...
          </p>
          <span className="text-secondary-color/40 text-sm">
            Sierpień, 2022
          </span>
        </div>
      </div>
    </section>
  </MainTemplate>
)

export const query = graphql`
  query {
    hero: file(relativePath: { regex: "/0_hero.jpg/" }) {
      publicURL
    }
    welcome: file(relativePath: { regex: "/1_welcome.jpg/" }) {
      publicURL
    }
    gallery_1: file(relativePath: { regex: "/2_gallery.jpg/" }) {
      publicURL
    }
    gallery_2: file(relativePath: { regex: "/3_gallery.jpg/" }) {
      publicURL
    }
    gallery_3: file(relativePath: { regex: "/4_gallery.jpg/" }) {
      publicURL
    }
    gallery_4: file(relativePath: { regex: "/5_gallery.jpg/" }) {
      publicURL
    }
    gallery_5: file(relativePath: { regex: "/6_gallery.jpg/" }) {
      publicURL
    }
    gallery_6: file(relativePath: { regex: "/7_gallery.jpg/" }) {
      publicURL
    }
    video: file(relativePath: { regex: "/8_video.jpg/" }) {
      publicURL
    }
    blog_1: file(relativePath: { regex: "/12_blog.jpg/" }) {
      publicURL
    }
    blog_2: file(relativePath: { regex: "/13_blog.jpg/" }) {
      publicURL
    }
    blog_3: file(relativePath: { regex: "/14_blog.jpg/" }) {
      publicURL
    }
    blog_4: file(relativePath: { regex: "/15_blog.jpg/" }) {
      publicURL
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

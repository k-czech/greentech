import React from 'react'
import Seo from '../components/Seo'
import MainTemplate from '../components/MainTemplate'
import { Button } from '../components/Button/Button'
import { graphql } from 'gatsby'

interface HeroProps {
  imageSource: string
}

interface QueryDataProps {
  data: {
    file: {
      publicURL: string
    }
  }
}

const HeroHeading = () => (
  <h1 className="text-white font-bold text-4xl lg:text-5xl">
    Instalacje fotowoltaiczne tworzone z pasją
  </h1>
)

const HeroParagraph = () => (
  <p className="text-white font-normal text-lg">Zainwestuj w darmowy prąd</p>
)

const Hero = ({ imageSource }: HeroProps) => (
  <div
    className="w-full h-screen flex flex-col justify-center bg-no-repeat bg-cover space-y-4 px-5"
    style={{ backgroundImage: `url(${imageSource})` }}
  >
    <HeroHeading />
    <HeroParagraph />
    <Button path="/" text="Zapytaj o ofertę" />
  </div>
)

const Homepage = ({ data }: QueryDataProps) => (
  <MainTemplate>
    <Hero imageSource={data.file.publicURL} />
    <section>
      <div>
        <h3>Pierwszy krok do niezależności energetycznej</h3>
        <p>
          Postaw na swobodę finansową i bądź jedną z wielu osób, które zaufały
          Odnawialnym Źródłom Energii! Instalacja fotowoltaiczna to pierwszy
          krok do niezależności energetycznej. Decydując się na oferowane przez
          nas rozwiązania, które są dla każdego personalizowane, masz możliwość
          zredukowania kosztów energii elektrycznej do zera.
        </p>
      </div>
    </section>
    <section>
      <div>
        <img src="" alt="" />
        <div>
          <h3>Projektujemy panele generujące prąd</h3>
          <p>
            Decydując się na budowę fotowoltaiki należy w pierwszej kolejności
            oszacować dotychczasowe zużycie energii elektrycznej oraz znaleźć
            odpowiednie miejsce na jej budowę. Kompletna instalacja
            fotowoltaiczna składa się z konstrukcji wsporczej, modułów
            fotowoltaicznych, inwertera sieciowego, zabezpieczeń prądu stałego
            oraz zmiennego a także uziemienia. Dopełnieniem budowy instalacji
            fotowoltaicznej jest jej zgłoszenie do Zakładu Energetycznego.
            Zapraszamy do obejrzenia naszych realizacji i poznania metod
            wykorzystywanych przez naszą firmę w pracy.
          </p>
          <p>
            Zapraszamy do obejrzenia naszych realizacji i poznania metod
            wykorzystywanych przez naszą firmę w pracy.
          </p>
        </div>
      </div>
    </section>
    <section>
      <h3>Nasze realizacje</h3>
      <p>
        A few words about what is depicted on the images or photos. Be concise
        and creative
      </p>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </section>
    <section>
      <h3>Dlaczego warto nam zaufać?</h3>
      <div>
        <div>
          <span>12</span>
          <p>tyle lat na rynku energii odnawialnej</p>
        </div>
        <div>
          <span>500</span>
          <p>Zrealizowanych projektów fotowoltaicznych</p>
        </div>
        <div>
          <span>59</span>
          <p>MW wytworzonej energii</p>
        </div>
        <div>
          <span>4</span>
          <p>kraje poza Polską w których działaliśmy</p>
        </div>
      </div>
      <Button path="/" text="Zapytaj o ofertę" />
    </section>
    <section>
      <div>
        <div>
          <h5>Zaopatrz się w darmowy prąd</h5>
          <p>
            Warto także wspomnieć, że panele fotowoltaiczne są nie tylko
            polecane do montażu na dachach prywatnych domów. Wielką
            popularnością cieszą się wśród przedsiębiorców, zmniejszając tym
            samym koszty utrzymania biznesu. Podobnie sytuacja wygląda w
            przypadku gospodarstw rolnych, gdzie można uzyskać dofinansowanie na
            instalację systemu energii odnawialnej.
          </p>
        </div>
        <div>
          <h5>Fotowoltaika jest dobra w każdym miejscu</h5>
          <p>
            Czas porzucić jeszcze jeden mit! Mówi on, że panele są nieskuteczne
            w miejscach pozbawionych słońca przez część roku. Produkowane
            obecnie moduły są jednak przystosowane do tego, aby zachować moc i
            wydajność również przy rozproszonym świetle, częstym zacienieniu czy
            nawet zabrudzeniach na powierzchni ogniwa!
          </p>
        </div>
        <div>
          <img src="" alt="" />
        </div>
      </div>
    </section>
    <section>
      <div>
        <h3>Co nas wyróżnia?</h3>
        <p>
          Zapewne już wiesz, jak skuteczne w odkładaniu pieniędzy jest
          posiadanie na dachu domu lub na swojej posesji paneli
          fotowoltaicznych. Pozyskiwanie prądu z energii słonecznej pozwala
          wytwarzać niezbędną do życia elektryczność i magazynować jej nadwyżki,
          które występują szczególnie w ciepłych miesiącach.
        </p>
      </div>
      <div>
        <ul>
          <li>
            <span>01</span>
            <p>
              własna linia wysokowydajnych modułów fotowoltaicznych z serii
              Green-Tech
            </p>
          </li>
          <li>
            <span>02</span>
            <p>
              wykorzystujemy inwertery sieciowe Growatt, Solar Edge, Fronius
            </p>
          </li>
          <li>
            <span>03</span>
            <p>stosujemy wysokiej jakości zabezpieczenia sieciowe</p>
          </li>
          <li>
            <span>04</span>
            <p>wykorzystujemy konstrukcje wsporcze z Polskiej huty</p>
          </li>
        </ul>
      </div>
    </section>
    <section>
      <div>
        <h3></h3>
        <div>
          <button>{'<'}</button>
          <button>{'>'}</button>
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
      <Button path="/" text="Zapytaj o ofertę" />
    </section>
    <section>
      <h3>Blog</h3>
      <div>
        <div>
          <img src="" alt="" />
          <a href="#">Moduły hybrydowe – czym są i jak działają?</a>
          <p>
            Jeśli myślisz o tym, żeby nie tylko pozyskiwać prąd ze słońca, ale
            dodatkowo...
          </p>
          <span>Sierpień, 2022</span>
        </div>
        <div>
          <img src="" alt="" />
          <a href="#">
            Optymalizator mocy paneli fotowoltaicznych – czy warto?
          </a>
          <p>
            Panel fotowoltaiczny to sprawdzony sposób na pozyskiwanie prądu z
            odnawialnych źródeł...
          </p>
          <span>Sierpień, 2022</span>
        </div>
        <div>
          <img src="" alt="" />
          <a href="#">
            Jak sprawdzić panel fotowoltaiczny – usterki i uszkodzenia paneli...
          </a>
          <p>
            Jak każde urządzenie, także panele fotowoltaiczne mogą ulec
            uszkodzeniu lub posiadać wady...
          </p>
          <span>Sierpień, 2022</span>
        </div>
        <div>
          <img src="" alt="" />
          <a href="#">
            Montaż paneli fotowoltaicznych - różne konstrukcje i rozwiązania
          </a>
          <p>
            Nie bez przyczyny coraz więcej osób decyduje się na montaż paneli
            fotowoltaicznych...
          </p>
          <span>Sierpień, 2022</span>
        </div>
      </div>
    </section>
  </MainTemplate>
)

export const query = graphql`
  query {
    file(relativePath: { regex: "/0_hero.jpg/" }) {
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

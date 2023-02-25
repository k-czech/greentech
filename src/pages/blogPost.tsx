import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import DescriptionParagraph from 'src/components/DescriptionParagraph/DescriptionParagraph'
import { ListWrapper } from 'src/components/OffersListWrapper/OffersListWrapper'
import Title from 'src/components/Title/Title'
import Wrapper from 'src/components/Wrapper/Wrapper'

const blogPost = () => {
  return (
    <Wrapper className="mx-auto px-10 lg:px-0 ">
      <div className="max-w-[760px] mx-auto mt-32 mb-16 lg:my-16">
        <Title text="Moduły hybrydowe – czym są i jak działają?" />
        <StaticImage src="../assets/images/blogPosts/hybrid.png" alt="" />
        <p className="text-secondary-color/40 text-sm my-6">Sierpień, 2022</p>
        <DescriptionParagraph text="Jeśli myślisz o tym, żeby nie tylko pozyskiwać prąd ze słońca, ale dodatkowo ogrzewać w ten sposób wodę, zdecyduj się moduły hybrydowe. Proponowane rozwiązanie sprawdzi się w nowoczesnym budownictwie, niosąc za sobą sporo korzyści. Dowiedz się, czym się charakteryzują i jak działają, a następnie podejmij decyzję o ich montażu." />
        <div className="my-16">
          <Title text="Czym są moduły hybrydowe?" />
          <DescriptionParagraph text="To sprytne połączenie dwóch niezależnych urządzeń, które razem tworzą ergonomiczne rozwiązanie stworzone z myślą o potrzebach domów jednorodzinnych. Cieszą się obecnie rosnącym zainteresowaniem prosumentów poszukujących alternatywy dla tradycyjnej fotowoltaiki. Moduły hybrydowe powstają z połączenia paneli fotowoltaicznych i kolektora słonecznego." />
          <ul className="my-14">
            <li>Nulla pellentesque dignissim enim</li>
            <li>Egestas sed tempus urna et pharetra</li>
            <li>Sed sed risus pretium quam.</li>
          </ul>
          <Title text="Moduły hybrydowe – zalety i wady rozwiązania" />
          <DescriptionParagraph text="Jak już wspomnieliśmy, wybór ogniw o działaniu hybrydowym to sporo korzyści dla gospodarstwa domowego. Przede wszystkim, połączenie paneli fotowoltaicznych i kolektora słonecznego okazuje się tańsze w eksploatacji niż osobno działające dwa różne urządzenia. To przekłada się również na cenę za sam montaż. Kompatybilne, pracują znacznie efektywniej, są też łatwiejsze w konfiguracji i codziennej obsłudze." />
        </div>
        <Link to="/blog" className="text-base-color">
          Wróć
        </Link>
      </div>

      <div>
        <Title text="Przeczytaj również" />
        <ListWrapper classname="justify-center md:justify-start">
          <div className="max-w-[360px]">
            <Link to="/blogPost">
              <StaticImage src="../assets/images/blog/image.png" alt="" />
            </Link>
            <Link to="/blogPost" className="block mt-7">
              <p className="text-secondary-color text-lg font-bold">
                Optymalizator mocy paneli fotowoltaicznych – czy warto?
              </p>
              <p className="text-secondary-color/40 text-sm my-1.5">
                Sierpień, 2022
              </p>
            </Link>
          </div>
          <div className="max-w-[360px]">
            <Link to="/blogPost">
              <StaticImage src="../assets/images/blog/image.png" alt="" />
            </Link>
            <Link to="/blogPost" className="block mt-7">
              <p className="text-secondary-color text-lg font-bold">
                Optymalizator mocy paneli fotowoltaicznych – czy warto?
              </p>
              <p className="text-secondary-color/40 text-sm my-1.5">
                Sierpień, 2022
              </p>
            </Link>
          </div>
          <div className="max-w-[360px]">
            <Link to="/blogPost">
              <StaticImage src="../assets/images/blog/image.png" alt="" />
            </Link>
            <Link to="/blogPost" className="block mt-7">
              <p className="text-secondary-color text-lg font-bold">
                Optymalizator mocy paneli fotowoltaicznych – czy warto?
              </p>
              <p className="text-secondary-color/40 text-sm my-1.5">
                Sierpień, 2022
              </p>
            </Link>
          </div>
        </ListWrapper>
      </div>
    </Wrapper>
  )
}

export default blogPost

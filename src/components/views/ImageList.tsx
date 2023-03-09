import React from 'react'
import { IGatsbyImageData } from 'gatsby-plugin-image'

/// styles
import 'src/assets/styles/realizations/realizations.scss'
import Image from 'src/components/Image/Image'
import Pagination from 'src/components/Pagination/Pagination'
import MainWrapper from '../MainWrapper/MainWrapper'
import Wrapper from '../Wrapper/Wrapper'
import Zoom from 'react-medium-image-zoom'
import Filters from '../Filters/Filters'
import ContentfulRichTech from '../ContenfulRichText/ContentfulRichText'

interface nodeProps {
  node: {
    description: string
    gatsbyImageData: IGatsbyImageData
    title: string
  }
}

const ImageListView = ({ data, pageContext, info }: any) => {
  const { listOfAllTags, url } = pageContext
  const { imagesTopDescription } = info

  const tagsToShow = listOfAllTags.map((item: string) =>
    item === 'Wszystkie' ? item : item.split('- ')[1],
  )

  const showDesc = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement
    const desc: HTMLElement = target.querySelector('#desc-div')!
    desc.style.opacity = '1'
  }
  const hideDesc = (e: React.MouseEvent) => {
    const target = e.currentTarget as HTMLElement
    const desc: HTMLElement = target.querySelector('#desc-div')!
    desc.style.opacity = '0'
  }

  return (
    <MainWrapper className="mt-32 lg:mt-0">
      <Wrapper className="px-6 lg:px-0 max-w-[600px] text-center">
        <ContentfulRichTech richText={imagesTopDescription} />
        <Filters data={tagsToShow} url={url} />
      </Wrapper>
      <div className="mt-14 flex flex-wrap gap-4 justify-center mark-left">
        {data.edges.map((item: any, index: number) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={showDesc}
            onMouseLeave={hideDesc}
          >
            <Zoom>
              <Image
                image={item.node.gatsbyImageData}
                alt="image"
                classNameImg="w-full scale-up brightness-mask"
              />
            </Zoom>
            <div
              id="desc-div"
              className="absolute left-3 bottom-3 text-white-color font-light z-10"
              style={{ opacity: 0 }}
            >
              {item.node.description}
            </div>
          </div>
        ))}
      </div>
      <Pagination pageContext={pageContext} />
    </MainWrapper>
  )
}

export default ImageListView

import React from 'react'

/// components
import Image from 'src/components/Image/Image'
import Pagination from 'src/components/Pagination/Pagination'
import MainWrapper from '../MainWrapper/MainWrapper'
import Wrapper from '../Wrapper/Wrapper'
import Zoom from 'react-medium-image-zoom'
import Filters from '../Filters/Filters'
import ContentfulRichTech from '../ContenfulRichText/ContentfulRichText'
import { getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { ViewProps } from 'src/interfaces/CustomPagesProps'
import 'react-medium-image-zoom/dist/styles.css'

interface NodeProps {
  smallImage: IGatsbyImageData
  bigImage: IGatsbyImageData
  description: string
}

const ImageListView = ({ data, pageContext, info }: ViewProps) => {
  const { listOfAllTags, url } = pageContext
  const { topDescription } = info
  const { nodes } = data

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

  const zoomImageData = (image: IGatsbyImageData) => {
    const imageData = getImage(image)
    const src = imageData?.images.fallback?.src
    const { sizes, srcSet } = imageData?.images?.sources?.[0] ?? {}

    return { src, sizes, srcSet }
  }

  return (
    <MainWrapper className="mt-32 lg:mt-0">
      <Wrapper className="px-6 lg:px-0 max-w-[600px] text-center">
        <ContentfulRichTech richText={topDescription} />
        <Filters data={tagsToShow} url={url} />
      </Wrapper>
      <div className="mt-14 flex flex-wrap gap-4 justify-center mark-left">
        {nodes.map((item: NodeProps, index: number) => (
          <div
            key={index}
            className="relative"
            onMouseEnter={showDesc}
            onMouseLeave={hideDesc}
          >
            <Zoom zoomImg={{ alt: 'item', ...zoomImageData(item.bigImage) }}>
              <Image
                image={item.smallImage}
                alt="image"
                classNameImg=" max-w-[525px] h-[288px] scale-up brightness-mask"
              />
            </Zoom>
            <div
              id="desc-div"
              className="absolute left-3 bottom-3 text-white-color font-light z-10"
              style={{ opacity: 0 }}
            >
              {item.description}
            </div>
          </div>
        ))}
      </div>
      <Pagination pageContext={pageContext} />
    </MainWrapper>
  )
}

export default ImageListView

import React from 'react'
import { Link } from 'gatsby'
import Wrapper from 'src/components/Wrapper/Wrapper'
import { ListWrapper } from 'src/components/OffersListWrapper/OffersListWrapper'
import Image from 'src/components/Image/Image'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Pagination from 'src/components/Pagination/Pagination'
import Filters from '../Filters/Filters'
import MainWrapper from '../MainWrapper/MainWrapper'
import ContentfulRichTech from '../ContenfulRichText/ContentfulRichText'

interface nodeProps {
  category: {
    category: string
  }
  createdAt: string
  gatsbyPath: string
  pageTitle: string
  thubmnail: {
    gatsbyImageData: {
      images: IGatsbyImageData
    }
    title: string
  }
}

const BlogListView = ({ data, pageContext, info }: any) => {
  const { listOfCategories, url } = pageContext
  const { topDescription } = info

  return (
    <MainWrapper className="mt-32 lg:mt-0">
      <Wrapper className="px-6 lg:px-0 max-w-[600px] text-center">
        <ContentfulRichTech richText={topDescription} />
        <Filters data={listOfCategories} url={url} />
      </Wrapper>
      <Wrapper className="mt-14 px-10 lg:px-0 ">
        <ListWrapper>
          {data.map((node: nodeProps, index: number) => {
            const { pageTitle, gatsbyPath, thubmnail } = node
            return (
              <div key={index} className="max-w-[560px]">
                <Link to={gatsbyPath}>
                  <Image
                    image={thubmnail.gatsbyImageData}
                    alt={thubmnail.title}
                    classNameImg="scale-up"
                  />
                </Link>
                <div className="mt-6">
                  <Link to={gatsbyPath}>
                    <p className="text-secondary-color underline mb-2 text-xl font-semibold">
                      {pageTitle}
                    </p>
                  </Link>
                </div>
              </div>
            )
          })}
        </ListWrapper>
        <Pagination pageContext={pageContext} />
      </Wrapper>
    </MainWrapper>
  )
}

export default BlogListView

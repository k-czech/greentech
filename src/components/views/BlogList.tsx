import React from 'react'
import { Link } from 'gatsby'

/// Components
import Wrapper from 'src/components/Wrapper/Wrapper'
import { ListWrapper } from 'src/components/OffersListWrapper/OffersListWrapper'
import Image from 'src/components/Image/Image'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Pagination from 'src/components/Pagination/Pagination'
import Filters from '../Filters/Filters'
import MainWrapper from '../MainWrapper/MainWrapper'
import ContentfulRichTech from '../ContenfulRichText/ContentfulRichText'

// Props
import { ViewProps } from 'src/interfaces/CustomPagesProps'

interface NodeProps {
  category: {
    category: string
  }
  createdAt: string
  gatsbyPath: string
  pageTitle: string
  thubmnail: {
    gatsbyImageData: IGatsbyImageData
    title: string
  }
}

const BlogListView = ({ data, pageContext, info }: ViewProps) => {
  const { listOfCategories, url } = pageContext
  const { topDescription } = info
  const { nodes } = data

  return (
    <MainWrapper className="mt-32 lg:mt-0">
      <div className="px-6 lg:px-0 max-w-[600px] mx-auto text-center">
        <ContentfulRichTech richText={topDescription} />
        <Filters data={listOfCategories} url={url} />
      </div>
      <ListWrapper classname={`mt-14`}>
        {nodes.map((node: NodeProps, index: number) => {
          const { pageTitle, gatsbyPath, thubmnail } = node
          return (
            <div
              key={index}
              className="max-w-[560px] grow shrink basis-[500px]"
            >
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
    </MainWrapper>
  )
}

export default BlogListView

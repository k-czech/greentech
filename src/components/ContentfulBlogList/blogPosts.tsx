import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { IGatsbyImageData } from 'gatsby-plugin-image'
import Image from '../Image/Image'
import { ListWrapper } from '../OffersListWrapper/OffersListWrapper'
import 'src/assets/styles/categoryList/category-list.scss'

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

const BlogPosts = () => {
  const {
    allContentfulBlogPost: { nodes },
  } = useStaticQuery(graphql`
    query {
      allContentfulBlogPost {
        nodes {
          pageTitle
          gatsbyPath(filePath: "/{contentfulBlogPost.url}")
          category {
            category
          }
          thubmnail {
            gatsbyImageData
            title
          }
        }
      }
    }
  `)
  const [selectedCategory, setSelectedCategory] = React.useState(null)

  const categories = React.useMemo(() => {
    const allCategories = nodes.flatMap(
      (node: nodeProps) => node.category.category,
    )
    return [...new Set(allCategories)]
  }, [nodes])

  const cat = ['Wszystkie', ...categories]

  let filteredNodes = nodes

  if (selectedCategory === 'Wszystkie') {
    filteredNodes = nodes
  } else {
    filteredNodes = selectedCategory
      ? nodes.filter(
          (node: nodeProps) => node.category.category === selectedCategory,
        )
      : nodes
  }

  return (
    <div>
      <div className="cat-list">
        {cat.map((item: any, index: number) => (
          <button
            key={index}
            onClick={() =>
              setSelectedCategory(item === 'Wszystkie' ? null : item)
            }
          >
            {item}
          </button>
        ))}
      </div>
      <ListWrapper>
        {filteredNodes.map((node: nodeProps, index: number) => {
          const { pageTitle, gatsbyPath, thubmnail } = node
          return (
            <div key={index} className="max-w-[560px]">
              <Link to={gatsbyPath}>
                <Image
                  image={thubmnail.gatsbyImageData}
                  alt={thubmnail.title}
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
    </div>
  )
}

export default BlogPosts

const pathNode = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require('gatsby-awesome-pagination')

interface props {
  graphql: any
  actions: any
}

exports.createPages = async ({ graphql, actions }: props) => {
  const { createPage } = actions

  // return all images
  const resultImages = await graphql(`
    query {
      allContentfulAsset(
        filter: {
          metadata: { tags: { elemMatch: { name: { regex: "/realizacje/" } } } }
        }
      ) {
        totalCount
      }
    }
  `)

  const totalImages = resultImages.data.allContentfulAsset.totalCount
  const imagesPerPage = 9
  const numPages = Math.ceil(totalImages / imagesPerPage)

  Array.from({ length: numPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/images` : `/images/${i + 1}`,
      component: pathNode.resolve('./src/templates/imagesList.tsx'),
      context: {
        limit: imagesPerPage,
        skip: i * imagesPerPage,
        numPages,
        currentPage: i + 1,
      },
    })
  })

  //// CREATE BLOG LIST

  const resultPosts = await graphql(`
    query {
      allContentfulBlogPost(limit: 10, skip: 10) {
        totalCount
        edges {
          node {
            gatsbyPath(filePath: "/{contentfulBlogPost.url}")
            pageTitle
          }
        }
      }
    }
  `)

  const totalPosts = resultPosts.data.allContentfulBlogPost.totalCount
  const postPerPage = 10
  const numBlogPages = Math.ceil(totalPosts / postPerPage)

  Array.from({ length: numBlogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogList` : `/blogList/${i + 1}`,
      component: pathNode.resolve('./src/templates/blog-list-template.tsx'),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numBlogPages,
        currentPage: i + 1,
      },
    })
  })
}

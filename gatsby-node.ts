const pathNode = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require('gatsby-awesome-pagination')

interface props {
  graphql: any
  actions: any
}

exports.createPages = async ({ graphql, actions }: props) => {
  const { createPage } = actions

  // return data
  const result = await graphql(`
    {
      allContentfulAsset(
        filter: {
          metadata: { tags: { elemMatch: { name: { regex: "/realizacje/" } } } }
        }
      ) {
        totalCount
        nodes {
          metadata {
            tags {
              name
            }
          }
        }
      }
      allContentfulBlogPost {
        totalCount
        edges {
          node {
            gatsbyPath(filePath: "/{contentfulBlogPost.url}")
            pageTitle
          }
        }
      }
      contentfulListsSettings {
        contentful_id
        blogUrl
        imagesUrl
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Extract query results

  // paths
  const pathToBlog = result.data.contentfulListsSettings.blogUrl
  const pathToImages = result.data.contentfulListsSettings.imagesUrl

  // items amount
  const totalCountImages = result.data.allContentfulAsset.totalCount
  const totalCountPosts = result.data.allContentfulBlogPost.totalCount

  // list of tags / categories
  const listOfTags = result.data.allContentfulAsset.nodes.map((item: any) => {
    return item.metadata.tags
  })

  // settings
  const imagesPerPage = 9
  const postPerPage = 2

  // Load templates
  const imagesListTemplate = pathNode.resolve(
    './src/templates/image-list-template.tsx',
  )
  const blogListTemplate = pathNode.resolve(
    './src/templates/blog-list-template.tsx',
  )
  const imagesCategoryTemplate = pathNode.resolve(
    './src/templates/images-category-template.tsx',
  )

  //// CREATE IMAGE LIST
  const imageListItems = Array.from({ length: totalCountImages })

  paginate({
    createPage,
    items: imageListItems,
    itemsPerPage: imagesPerPage,
    pathPrefix: `/${pathToImages}`,
    component: imagesListTemplate,
  })

  //// CREATE IMAGE LISTS PER TAGS
  const allTags: string[] = []
  for (const subarr of listOfTags) {
    for (const item of subarr) {
      allTags.push(item.name)
    }
  }
  const uniqueTags = new Set(allTags)

  uniqueTags.forEach((tag) => {
    const friendlyUrl = tag.split('- ')[1]
    const url = `/${pathToImages}/${friendlyUrl}`
    const numOfImages = allTags.filter((name) => name === tag).length
    const tagItem = Array.from({ length: numOfImages })

    paginate({
      createPage,
      items: tagItem,
      itemsPerPage: imagesPerPage,
      pathPrefix: `${url}`,
      component: imagesCategoryTemplate,
      context: {
        name: tag,
      },
    })
  })

  //// CREATE BLOG LIST
  const blogListItem = Array.from({ length: totalCountPosts })
  paginate({
    createPage,
    items: blogListItem,
    itemsPerPage: postPerPage,
    pathPrefix: `/${pathToBlog}`,
    component: blogListTemplate,
  })

  //// CREATE BLOG LIST PER CATEGORY
}

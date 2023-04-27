const pathNode = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { paginate } = require('gatsby-awesome-pagination')
const slugify = require('slugify')

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
        group(field: { test: SELECT }) {
          totalCount
          fieldValue
        }
        distinct(field: { test: SELECT })
      }
      blog: contentfulListy(contentful_id: { eq: "7yjMi5HekJWv3cr5e6Qt7s" }) {
        url
        itemsPerPage
      }
      images: contentfulListy(contentful_id: { eq: "4tVxP1FSeMcbMN9WMkpD6a" }) {
        url
        itemsPerPage
      }
    }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Extract query results

  // paths
  const pathToBlog = result.data.blog.url
  const pathToImages = result.data.images.url

  // items amount
  const totalCountImages = result.data.allContentfulAsset.totalCount
  const totalCountPosts = result.data.allContentfulBlogPost.totalCount

  // list of tags / categories
  const listOfTags = result.data.allContentfulAsset.nodes.map((item: any) => {
    return item.metadata.tags
  })
  const listOfAllCategories = result.data.allContentfulBlogPost.distinct

  // settings
  const imagesPerPage = result.data.images.itemsPerPage
  const postPerPage = result.data.blog.itemsPerPage

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
  // const blogListCategoryTemplate = pathNode.resolve(
  //   './src/templates/blog-category-template.tsx',
  // )

  //// CREATE IMAGE LIST PER TAGS
  const allTags: string[] = []
  for (const subarr of listOfTags) {
    for (const item of subarr) {
      allTags.push(item.name)
    }
  }
  const uniqueTags = new Set(allTags)

  uniqueTags.forEach((tag) => {
    const friendlyUrl = tag.split('- ')[1]
    const url = `/${pathToImages}/${slugify(friendlyUrl)}`
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
        listOfAllTags: ['Wszystkie', ...uniqueTags],
        url: pathToImages,
      },
    })
  })

  //// CREATE IMAGE LIST WITH ALL
  const imageListItems = Array.from({ length: totalCountImages })
  paginate({
    createPage,
    items: imageListItems,
    itemsPerPage: imagesPerPage,
    pathPrefix: `/${pathToImages}`,
    component: imagesListTemplate,
    context: {
      listOfAllTags: ['Wszystkie', ...uniqueTags],
      url: pathToImages,
    },
  })

  // CREATE BLOG LIST
  const blogListItem = Array.from({ length: totalCountPosts })
  paginate({
    createPage,
    items: blogListItem,
    itemsPerPage: postPerPage,
    pathPrefix: `/${pathToBlog}`,
    component: blogListTemplate,
    context: {
      listOfCategories: ['Wszystkie', ...listOfAllCategories],
      url: pathToBlog,
    },
  })

  //// CREATE BLOG LIST PER CATEGORY
  // const listOfBlogCategories = result.data.allContentfulBlogPost.group
  // listOfBlogCategories.forEach(
  //   (group: { fieldValue: string; totalCount: number }) => {
  //     const categoryName = group.fieldValue
  //     const totalCountOfPostsForCategory = group.totalCount
  //     const friendlyURL = `/${pathToBlog}/${slugify(categoryName)}`

  //     const arrayOfPosts = Array.from({ length: totalCountOfPostsForCategory })

  //     paginate({
  //       createPage,
  //       items: arrayOfPosts,
  //       itemsPerPage: postPerPage,
  //       pathPrefix: `${friendlyURL}`,
  //       component: blogListCategoryTemplate,
  //       context: {
  //         category: categoryName,
  //         listOfCategories: ['Wszystkie', ...listOfAllCategories],
  //         url: pathToBlog,
  //       },
  //     })
  //   },
  // )
}

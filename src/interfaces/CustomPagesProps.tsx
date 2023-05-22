import {
  ContentfulRichTextGatsbyReference,
  RenderRichTextData,
} from 'gatsby-source-contentful/rich-text'

export interface PageContextProps {
  listOfCategories: []
  listOfAllTags: []
  url: string
  previousPagePath: string
  nextPagePath: string
  humanPageNumber: number
  numberOfPages: number
}

export interface ViewProps {
  data: {
    nodes: []
  }
  info: {
    topDescription: RenderRichTextData<ContentfulRichTextGatsbyReference>
  }
  pageContext: PageContextProps
}

export interface TemplateProps {
  allContentfulAsset: {
    nodes: []
  }
  allContentfulBlogPost: {
    nodes: []
  }
  contentfulListy: {
    metaTitle: string
    metaDescription: string
    topDescription: RenderRichTextData<ContentfulRichTextGatsbyReference>
  }
}

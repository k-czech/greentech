import { IGatsbyImageData } from 'gatsby-plugin-image'

interface BaseProps {
  __typename: string
  title: string
  url: string
  pageTitle: string
  shortDesc: string
  description: {
    description: string
  }
  image: {
    gatsbyImageData: IGatsbyImageData
  }
  thumbnail: {
    gatsbyImageData: IGatsbyImageData
    title: string
  }
}

interface WelcomeSectionReference {
  titleOnTheRigth: boolean
}

interface RichSectionReference {
  imageOnTheRight: boolean
  showTitle: boolean
}

interface ImageGridReference {
  images: [
    {
      title: string
      description: string
      gatsbyImageData: IGatsbyImageData
    },
  ]
  additinalDesc: {
    raw: []
  }
}

interface CounterReference {
  link?: string
  linkText?: string
  datas: {
    datas: string
  }
}

interface ColumnSectionReference {
  column: []
}

interface FeaturesReference {
  first: number
  firstDesc: string
  second: number
  secondDesc: string
  third: number
  thirdDesc: string
  fourth: number
  fourthDesc: string
}

interface ModalWithVideoReferece {
  videoId: string
}

export interface ContentfulReferencesProps
  extends BaseProps,
    WelcomeSectionReference,
    RichSectionReference,
    ImageGridReference,
    CounterReference,
    ColumnSectionReference,
    FeaturesReference,
    ModalWithVideoReferece {}

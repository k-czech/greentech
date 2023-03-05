import React from 'react'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import '../../assets/styles/menuLinks/menu-links.scss'

interface links {
  className: string
}

const MenuLinks = ({ className }: links) => {
  const {
    contentfulNavigation: { menuItem },
  } = useStaticQuery(graphql`
    query {
      contentfulNavigation {
        contentful_id
        menuItem {
          ... on ContentfulMenuItem {
            linkTo {
              ... on ContentfulContactPage {
                url
              }
              ... on ContentfulPage {
                url
              }
            }
            title
          }
        }
      }
    }
  `)
  console.log(menuItem.map((item: object) => item))
  return (
    <>
      <ul className={className}>
        {menuItem.map(
          (
            item: {
              linkTo: { url: string }
              title: string
            },
            index: number,
          ) => {
            if (!item.linkTo) return
            return (
              <li key={index}>
                <Link
                  to={`/${item.linkTo.url}`}
                  className="hover:font-semibold "
                >
                  {item.title}
                </Link>
              </li>
            )
          },
        )}
      </ul>
    </>
  )
}

export default MenuLinks

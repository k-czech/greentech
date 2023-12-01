import { Link } from 'gatsby'
import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import { useStaticQuery, graphql } from 'gatsby'

const FooterLink = ({ to, title }: { to: string; title: string }) => (
  <li className="my-4 md:my-2 hover:underline">
    <Link to={to} className="text-gray-600 text-base md:text-sm">
      {title}
    </Link>
  </li>
)

export const Footer = () => {
  const { contentfulFooter } = useStaticQuery(graphql`
    query {
      contentfulFooter {
        contentful_id
        companyName
        addressBlock {
          addressBlock
        }
        companyInfo {
          companyInfo
        }
        contactBlock {
          contactBlock
        }
        linksCol1 {
          references {
            url
            pageTitle
          }
        }
        linksCol2 {
          references {
            url
            pageTitle
          }
        }
        linksCol3 {
          references {
            url
            pageTitle
          }
        }
        facebook
        instagram
      }
    }
  `)

  const {
    companyName,
    addressBlock,
    companyInfo,
    contactBlock,
    linksCol1,
    linksCol2,
    linksCol3,
    facebook,
    instagram,
  } = contentfulFooter
  const addresData = addressBlock.addressBlock.split('\n')
  const companyData = companyInfo.companyInfo.split('\n')
  const contactData = contactBlock.contactBlock.split('\n')

  return (
    <footer className="bg-white">
      <Wrapper className="text-center mx-auto lg:text-left ">
        <div className="container mx-auto my-12">
          <div className="grid lg:grid-cols-5 md:grid-cols-2 items-baseline space-y-5">
            <div className="footer__columns">
              <p className="mb-2.5 text-base font-extrabold">{companyName}</p>

              <ul className="list-none mb-0">
                {addresData.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="text-secondary-color text-base md:text-sm my-4 md:my-2"
                  >
                    {item}
                  </li>
                ))}
                {companyData.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="text-gray-600 text-base md:text-sm my-4 md:my-2"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__columns">
              <p className="uppercase mb-2.5 text-base font-extrabold">
                Na skróty
              </p>

              <ul className="list-none mb-0">
                {linksCol1.references.map(
                  (link: { url: string; pageTitle: string }, index: number) => (
                    <FooterLink
                      key={index}
                      to={`/${link.url}`}
                      title={link.pageTitle}
                    />
                  ),
                )}
              </ul>
            </div>

            <div className="footer__columns">
              <p className="uppercase mb-2.5 text-base font-extrabold">
                Oferta
              </p>

              <ul className="list-none mb-0">
                {linksCol2.references.map(
                  (link: { url: string; pageTitle: string }, index: number) => (
                    <FooterLink
                      key={index}
                      to={`/${link.url}`}
                      title={link.pageTitle}
                    />
                  ),
                )}
              </ul>
            </div>

            <div className="footer__columns">
              <p className="uppercase mb-2.5 text-white">.</p>

              <ul className="list-none mb-0">
                {linksCol3.references.map(
                  (link: { url: string; pageTitle: string }, index: number) => (
                    <FooterLink
                      key={index}
                      to={`/${link.url}`}
                      title={link.pageTitle}
                    />
                  ),
                )}
                <li className="hover:underline">
                  <Link
                    to="https://sklep.green-tech.com.pl/"
                    className="text-gray-600 text-base md:text-sm"
                  >
                    Nasz sklep
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__columns">
              <p className="uppercase mb-2.5 text-base font-extrabold">
                Kontakt
              </p>

              <ul className="list-none mb-0">
                {contactData.map((item: string, index: number) => (
                  <li
                    key={index}
                    className="text-gray-600 text-base md:text-sm my-4 md:my-2"
                  >
                    <a href={`${index === 0 ? `mailto:${item}` : `tel:${item}`}`}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer__social mt-24">
            <a
              target="_blank"
              href={`${facebook}`}
              className="mr-6 text-base font-extrabold"
              rel="noreferrer"
            >
              facebook
            </a>
            <a
              target="_blank"
              href={`${instagram}`}
              className="text-base font-extrabold"
              rel="noreferrer"
            >
              instagram
            </a>
          </div>
        </div>
      </Wrapper>
    </footer>
  )
}

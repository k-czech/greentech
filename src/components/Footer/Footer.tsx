import { Link } from 'gatsby'
import React from 'react'
import Wrapper from '../Wrapper/Wrapper'
import { useStaticQuery, graphql } from 'gatsby'

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
              <h5 className="mb-2.5 text-base text-extrabold">{companyName}</h5>

              <ul className="list-none mb-0">
                {addresData.map((item: string, index: number) => (
                  <li key={index} className="text-secondary-color text-sm">
                    {item}
                  </li>
                ))}
                {companyData.map((item: string, index: number) => (
                  <li key={index} className="text-gray-400 text-sm">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer__columns">
              <h5 className="uppercase mb-2.5 text-base text-extrabold">
                Na skróty
              </h5>

              <ul className="list-none mb-0">
                {linksCol1.references.map(
                  (link: { url: string; pageTitle: string }, index: number) => (
                    <li key={index} className="hover:underline">
                      <Link
                        to={`/${link.url}`}
                        className="text-gray-400 text-sm"
                      >
                        {link.pageTitle}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="footer__columns">
              <h5 className="uppercase mb-2.5 text-base text-extrabold">
                Oferta
              </h5>

              <ul className="list-none mb-0">
                {linksCol2.references.map(
                  (link: { url: string; pageTitle: string }, index: number) => (
                    <li key={index} className="hover:underline">
                      <Link
                        to={`/${link.url}`}
                        className="text-gray-400 text-sm"
                      >
                        {link.pageTitle}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </div>

            <div className="footer__columns">
              <h5 className="uppercase mb-2.5 text-white">.</h5>

              <ul className="list-none mb-0">
                {linksCol3.references.map(
                  (link: { url: string; pageTitle: string }, index: number) => (
                    <li key={index} className="hover:underline">
                      <Link
                        to={`/${link.url}`}
                        className="text-gray-400 text-sm"
                      >
                        {link.pageTitle}
                      </Link>
                    </li>
                  ),
                )}
                <li>
                  <Link
                    to="https://sklep.green-tech.com.pl/"
                    className="text-gray-400 text-sm"
                  >
                    Nasz sklep
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer__columns">
              <h5 className="uppercase mb-2.5 text-base text-extrabold">
                Kontakt
              </h5>

              <ul className="list-none mb-0">
                {contactData.map((item: string, index: number) => (
                  <li key={index} className="text-gray-400 text-sm">
                    <a href={item}>{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="footer__social mt-24">
            <a
              target="_blank"
              href="https://tailwind-elements.com/"
              className="mr-6 text-base font-extrabold"
              rel="noreferrer"
            >
              facebook
            </a>
            <a
              target="_blank"
              href="https://tailwind-elements.com/"
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

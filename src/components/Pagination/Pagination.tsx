import React from 'react'
import { Link } from 'gatsby'

const Pagination = ({ pageContext }: any) => {
  const { previousPagePath, nextPagePath, humanPageNumber, numberOfPages } =
    pageContext

  return (
    <div className="mt-10">
      <nav
        className="flex justify-center"
        role="navigation"
        aria-label="Page navigation"
      >
        <div className="flex items-center">
          {previousPagePath && (
            <Link
              to={previousPagePath}
              rel="prev"
              aria-label="Previous"
              className="relative block rounded mr-2 bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 text-secondary-color hover:bg-secondary-color hover:text-white"
            >
              <span aria-hidden="true">&laquo;</span>
            </Link>
          )}
          {numberOfPages > 1 && (
            <div className="text-secondary-color">
              Strona {humanPageNumber} z {numberOfPages}
            </div>
          )}
          {nextPagePath && (
            <Link
              to={nextPagePath}
              rel="next"
              aria-label="Next"
              className="relative block rounded ml-2 bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300  text-secondary-color hover:bg-secondary-color hover:text-white"
            >
              <span aria-hidden="true">&raquo;</span>
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}

export default Pagination

import React from 'react'
import { Link } from 'gatsby'

const NotFoundPage = () => (
  <main>
    <section className="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Wybacz, nie mogliśmy znaleźć szukanej strony
          </p>
          <p className="mt-4 mb-8 dark:text-gray-400">
            W zamian za to zobacz naszą stronę główną!
          </p>
          <Link
            rel="noopener noreferrer"
            to="/"
            className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
          >
            Powrót
          </Link>
        </div>
      </div>
    </section>
  </main>
)

export default NotFoundPage

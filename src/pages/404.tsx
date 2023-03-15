import React from 'react'
import { Button } from 'src/components/Button/Button'

const NotFoundPage = () => (
  <main>
    <section className="flex items-center h-full p-16 text-gray-100">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Wybacz, nie mogliśmy znaleźć szukanej strony
          </p>
          <p className="mt-4 mb-8 text-gray-400">
            W zamian za to zobacz nasze inne podstrony!
          </p>
          <div className="flex gap-10">
            <Button text="Blog" path="/blog" className="bg-base-color" />
            <Button
              text="Nasza oferta"
              path="/oferty"
              className="bg-base-color"
            />
            <Button text="Strona główna" path="/" className="bg-base-color" />
          </div>
        </div>
      </div>
    </section>
  </main>
)

export default NotFoundPage

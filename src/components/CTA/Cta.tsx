import React from 'react'
import { Parallax } from 'react-scroll-parallax'
import { Button } from '../Button/Button'
import Wrapper from '../Wrapper/Wrapper'

export const Cta = () => (
  <section className="bg-base-color p-10 lg:p-14 lg:mx-auto">
    <Parallax translateY={[0, -10]}>
      <Wrapper className="container mx-auto flex flex-col md:flex-row md:items-baseline md:justify-between">
        <h3 className="text-white text-3xl">
          Porozmawiajmy o Twoich oczekiwaniach
        </h3>
        <Button path="/zapytaj" text="Zapytaj o ofertę" className="mt-5" />
      </Wrapper>
    </Parallax>
  </section>
)

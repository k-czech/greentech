import React from 'react'
import { Button } from '../Button/Button'

export const Cta = () => (
  <div className="bg-base-color p-10 lg:p-14 lg:mx-11">
    <div className="container mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
      <h3 className="text-white text-3xl">
        Porozmawiajmy o Twoich oczekiwaniach
      </h3>
      <Button path="/" text="Zapytaj o ofertę" className="mt-5" />
    </div>
  </div>
)

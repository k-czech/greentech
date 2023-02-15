import React from 'react'
import { Button } from '../Button/Button'

export const Cta = () => (
  <div className="bg-base-color py-14 mx-11">
    <div className="container mx-auto flex items-center justify-between">
      <h3 className="text-white">Porozmawiajmy o Twoich oczekiwaniach</h3>
      <Button path="/" text="Zapytaj o ofertę" />
    </div>
  </div>
)

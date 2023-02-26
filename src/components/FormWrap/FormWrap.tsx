import React from 'react'
import { Button } from '../Button/Button'

// styles
import 'src/assets/styles/formWrap/form.scss'

const FormWrap = () => {
  return (
    <form className="form container">
      <div className="form__field-wrap">
        <input type="input" name="name" id="name" />
        <label htmlFor="name">Imie i nazwisko</label>
      </div>
      <div className="form__field-wrap">
        <input type="input" name="name" id="name" />
        <label htmlFor="name">E-mail</label>
      </div>
      <div className="form__field-wrap">
        <input type="input" name="name" id="name" />
        <label htmlFor="name">Numer telefonu</label>
      </div>
      <div className="form__field-wrap">
        <textarea name="name" id="name" rows={5} />
        <label htmlFor="name">Treść wiadomości</label>
      </div>
      <Button path="/" text="Wyślij" />
    </form>
  )
}

export default FormWrap

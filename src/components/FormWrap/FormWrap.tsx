import React, { FocusEvent } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import emailjs from '@emailjs/browser'

// styles
import 'src/assets/styles/formWrap/form.scss'

interface IFormInput {
  name: string
  email: string
  phone: string
  msg: string
}

const FormWrap = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<IFormInput>()
  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const formData = { ...data }
    await emailjs
      .send(
        'service_2t2wypm',
        'template_tryovbl',
        formData,
        'Y6QAP3EoAbOiPYDZE',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )

    reset()
  }

  const regexEmail =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/i

  function showValue(e: FocusEvent<HTMLInputElement>) {
    const nameAttr = e.target.getAttribute('id')!
    const label: HTMLLabelElement = document.querySelector(
      `label[for=${nameAttr}]`,
    )!
    const value: string = e.target.value

    label.classList.remove('hide')
    e.target.classList.remove('filled')

    if (value) {
      label.classList.add('hide')
      e.target.classList.add('filled')
    }
  }

  return (
    <form
      className="form container"
      id="my-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="form__field-wrap" onBlur={showValue}>
        <input
          type="input"
          id="name"
          {...register('name', { required: true })}
        />
        <label htmlFor="name">Imię i nazwisko</label>
        {errors.name && <span className="form__error">Uzupełnij pole</span>}
      </div>
      <div className="form__field-wrap" onBlur={showValue}>
        <input
          type="input"
          id="email"
          {...register('email', {
            pattern: regexEmail,
            required: true,
          })}
        />
        <label htmlFor="email">E-mail</label>
        {errors.email && (
          <span className="form__error">Wpisz poprawny e-mail</span>
        )}
      </div>
      <div className="form__field-wrap" onBlur={showValue}>
        <input type="input" id="phone" {...register('phone')} />
        <label htmlFor="phone">Numer telefonu</label>
      </div>
      <div className="form__field-wrap" onBlur={showValue}>
        <textarea id="msg" rows={5} {...register('msg')} />
        <label htmlFor="msg">Treść wiadomości</label>
      </div>
      <button
        type="submit"
        className="bg-white hover:bg-blue-color text-secondary-color hover:text-white transition-colors py-4 px-14 lg:max-w-[270px] text-center block"
      >
        <span className="text-base uppercase font-bold underline">Wyślij</span>
      </button>
    </form>
  )
}

export default FormWrap

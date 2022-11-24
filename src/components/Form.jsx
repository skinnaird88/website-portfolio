import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <>
    <h1>Form</h1>
    <form>
      <input name='name' placeholder="Name" type='text'></input>
      <input name='email' placeholder="Email" type='email'></input>
      <textarea placeholder="Message"></textarea>
    </form>
    </>
  )
}

export default Form
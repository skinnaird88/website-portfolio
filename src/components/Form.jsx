import {React, useRef} from 'react'
import './Form.css'
import emailjs from '@emailjs/browser'

const Form = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mht1x7o', 'template_y3acv7e', form.current, '3o7zwsZbWjwinoxxw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='upper-container'>
    <h1>Form</h1>
    <form className='form-container' ref={form} onSubmit={sendEmail}>
      <input name='user_name' placeholder="Name" type='text' className='form-item'></input>
      <input name='user_email' placeholder="Email" type='email' className='form-item'></input>
      <textarea name="message"placeholder="Message"></textarea>
      <button type='submit'>Submit</button>
    </form>
    </div>
  )
}

export default Form
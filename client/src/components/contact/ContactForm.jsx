import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import '../../styles/contactform.scss';
import { useState } from 'react';


const ContactForm = () => {
    const [phone, setPhone] = useState()
  return (
    <form className='contact-form-main-container'>
        <h1>Contact Us</h1>
        <input 
            type="text"
            name="name"
            placeholder='Enter your name' 
            required
        />
        <input
            type="email"
            name="email"
            placeholder='Enter your email' 
        />

        <PhoneInput
            placeholder="Enter phone number"
            value={phone}
            onChange={setPhone}
            defaultCountry="MY"
            required
      />
        <input
        type="text"
        name="subject"
        placeholder='subject'
        required
        />
        <textarea
        name="comment"
        placeholder="comment...."
        rows={10}
        required
        >
        </textarea>
        <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
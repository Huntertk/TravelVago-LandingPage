import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import '../../styles/contactform.scss';
import { useState } from 'react';


const ContactForm = () => {
    const [data, setData] = useState({
        name:"",
        email:"",
        subject:"",
        comment:""
    }) 
    const [phone, setPhone] = useState();
    const handleInputData = (e) => {
        setData(prev =>  (
            {
                ...prev,
                [e.target.name]:e.target.value
            }
        ))
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();
    }

  return (
    <form className='contact-form-main-container' onSubmit={handleFormSubmit}>
        <h1>Contact Us</h1>
        <input 
            type="text"
            name="name"
            placeholder='Enter your name' 
            value={data.name}
            onChange={handleInputData}
            required
        />
        <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInputData}
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
        onChange={handleInputData}
        value={data.subject}
        required
        />
        <textarea
        name="comment"
        placeholder="comment...."
        rows={10}
        value={data.comment}
        onChange={handleInputData}
        required
        >
        </textarea>
        <button type="submit">Send</button>
    </form>
  )
}

export default ContactForm
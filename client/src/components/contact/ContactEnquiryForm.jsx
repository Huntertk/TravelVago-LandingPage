import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import '../../styles/contactenquiryform.scss'
import { useState } from 'react';


const ContactEnquiryForm = () => {
    const [data, setData] = useState({
        name:"",
        email:"",
        subject:"",
        comment:"",
    })
    const [phone, setPhone] = useState();

    const onChangeHandler = (e) => {
        setData((prev) => ({
            ...prev,
            [e.target.name]:e.target.value
        }))
    }


    const formSubmitHandler = (e) => {
        e.preventDefault();
        console.log(data);
        console.log(phone);
    }

  return (
    <form className='contact-enquiry-container' onSubmit={formSubmitHandler}>
         <h1>Enquiry Form</h1>
        <input 
            type="text"
            name="name"
            placeholder='Enter your name' 
            value={data.name}
            onChange={onChangeHandler}
            required
        />
        <input
            type="email"
            name="email"
            placeholder='Enter your email' 
            value={data.email}
            onChange={onChangeHandler}
            required
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
        value={data.subject}
        onChange={onChangeHandler}
        required
        />
        <textarea
        name="comment"
        placeholder="comment...."
        rows={10}
        value={data.comment}
        onChange={onChangeHandler}
        required
        >
        </textarea>
        <button type="submit">Send</button>
    </form>
  )
}

export default ContactEnquiryForm
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

    const monthName = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]

  return (
    <form className='contact-form-main-container' onSubmit={handleFormSubmit}>
        <h1>Contact Us</h1>
        <div className="travel-information-container">
            <h3>TRAVEL INFORMATION</h3>
            <div className="duration-date-container">
                <label htmlFor="duration">
                    <h4>Duration of your trip <span>*</span></h4>
                    <input 
                    name='duration'
                    type="number"
                    placeholder='Duration of your trip'
                    min={1}
                    required
                    />
                </label>
                <label htmlFor="duration">
                    <h4>Your travel date <span>*</span></h4>
                    <div className="">
                        <select name="month" required>
                        {
                            monthName.map((month) => (
                                <option value={month} key={month}>{month}</option>
                            ))
                        }
                        </select>

                        <select name="year" required>
                        {
                            [2024,2025,2026,2027].map((year) => (
                                <option value={year} key={year}>{year}</option>
                            ))
                        }
                        </select>
                    </div>
                </label>
            </div>
            <div className="pax-selection-container">
                <label htmlFor="pax">
                    <h4>Number of Adult <span>*</span></h4>
                    <div className="pax-section-input">

                        <input 
                        type="number"
                        name='adult'
                        placeholder='Adult'
                        min={1}
                        required
                        />
                        <input 
                        type="number"
                        name='child'
                        placeholder='Child'
                        min={0}
                        required
                        />
                        <input 
                        type="number"
                        name='infant'
                        placeholder='Infant'
                        min={0}
                        required
                        />
                    </div>
                </label>
            </div>
            <div className="budget-container">
                <label htmlFor="">
                <h4>Your approximated budget <span>*</span></h4>
                <div className="budget-selection-container">
                    <select name="budget">
                        <option value="1200-1500 MYR/Person">1200 - 1500 MYR/person</option>
                        <option value="1500-2000 MYR/Person">1500 - 2000 MYR/person</option>
                        <option value="Above 2000 MYR/Person">Above 2000 MYR/person</option>
                    </select>
                </div>
                </label>
            </div>
            <div className="how-you-know-container">
                <label htmlFor="">
                    <h4>How do you know about Travelvago? <span>*</span></h4>
                        <select name="how-you-know">
                            <option value="Searching on Internet">Searching on Internet</option>
                            <option value="Recommendation">Recommendation</option>
                            <option value="By Social Network">By Social Network</option>
                        </select>
                </label>
            </div>
        </div>
    </form>
  )
}

export default ContactForm
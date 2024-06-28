import { IoLocationSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { IoIosMail } from "react-icons/io";
import {motion} from 'framer-motion';
import { FaArrowUp, FaArrowDown  } from "react-icons/fa";
import { useState } from "react";
import { IoIosDocument } from "react-icons/io";

const ContactCardContainer = ({title, address,email, phone,licenceNo}) => {

    const [isDropDownOpen, setIsDropDownOpen] = useState(false);

    const easeUpLeft = {
        initial:{
            x:-100,
            opacity:0,
            scale:0,
        },
        whileInView:{
            x:0,
            opacity: 1,
            scale:1,
          },
          transition:{
            duration:0.3
          }
        }
  return (
    <motion.div {...easeUpLeft} className="contactCard">
            <div className="dropDownOpen" onClick={ () => setIsDropDownOpen((prev) => !prev)}>
                <h1>{title}</h1>
                {isDropDownOpen ?  <FaArrowUp /> : <FaArrowDown /> }
            </div>
            {
                isDropDownOpen ?   <div className={`contactDetailsContainer`} >
                <div className="contactDetails">
                    <IoLocationSharp />
                    <p>{address}</p>
                </div>
                {
                    licenceNo && (
                        <div className="contactDetails">
                            <IoIosDocument />
                            <p>{licenceNo}</p>
                        </div>
                    )
                }
                
                <div className="contactDetails">
                    <BsFillTelephoneFill />
                    <p>{phone}</p>
                </div>
                <div className="contactDetails">
                    <IoIosMail />
                    <p>{email}</p>
                </div>
                </div> : <></>
            }
           
          </motion.div>
  )
}

export default ContactCardContainer
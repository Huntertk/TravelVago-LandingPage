import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom'
import { packageDetails } from '../data';
import '../styles/packageDetail.scss';
import ContactQuotationForm from '../components/contact/ContactQuotationForm';
import { DynamicHeading } from '../components';

const PackagesDetails = () => {
    const {slug} = useParams();
    const packageDetailsData = packageDetails.filter(packages => packages.slug === slug);
    
    const divRef = useRef(null);

    useEffect(() => {
      divRef.current.focus();
  
    },[]) 
  return (
    <>
        <DynamicHeading title={packageDetailsData[0].title} />
        <section className='packages-detials-main-section'>
             <div className="packageDetailsImageContainer"
                ref={divRef}
                tabIndex={0}
                >
            <img className='packageDetailsImage' src={packageDetailsData[0].imageCover} alt={packageDetailsData[0].title} />
        </div>
        <h1 className='title'>{packageDetailsData[0].title}</h1>
        <hr />

            <div className="package-details-main-container">
                {
                    packageDetailsData.map((pac, i) => (
                        <div key={pac.id}>
                        <div className="package-details-section" >
                            {
                                pac.sections.map((sect, j) => (
                                    <div key={j}>
                                         <h1>{sect.sectionTitle}</h1>
                                            {
                                                sect.sectionData.map((sectData, k) => (
                                                    <div className={`package-details-wrapper ${sectData.rowReverse ? "rowReverse" : ""}`} key={k}>
                                                        <div className="package-detail-container">
                                                            <h2>{sectData.title}</h2>
                                                            <ul>
                                                            {
                                                                sectData.listItems.map((list, l) => {
                                                                    return <li key={l}>{list}</li>
                                                                })

                                                            }
                                                            </ul>

                                                        </div>
                                                        <div className="package-detail-container">
                                                            <img src={sectData.sectionImg} alt="" />
                                                        </div>
                                                    </div>
                                                ))
                                            }
                                        
                                    </div>
                                ))
                            }
                           
                        </div>
                        <h1 className='title'>Hotel List</h1>
                        <div className='package-detail-hotel-container'>
                            {
                                pac.hotelList.map((data, index) => (
                                    <div key={index} className='package-hotel-card'>
                                        <img src={data.imageUrl} alt={data.title} />
                                        <h3>{data.title}</h3>
                                        <h4>{data.hotelLocation}</h4>
                                    </div>
                                ))
                            }
                        </div>
                        </div>
                    ))
                }
                    {/*Quotation Form */}
                <ContactQuotationForm />
                
            </div>



        </section>
    </>
  )
}

export default PackagesDetails
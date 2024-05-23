import React from 'react'
import { ImageSlider } from '../components'
import { useParams } from 'react-router-dom'
import { packageDetails } from '../data';
import '../styles/packageDetail.scss';
import {Helmet} from "react-helmet";

const PackagesDetails = () => {
    const {slug} = useParams();
    const packageDetailsData = packageDetails.filter(packages => packages.slug === slug)
    console.log(packageDetailsData);
  return (
    <>
     <Helmet>
        <title>{packageDetailsData[0].title} | Travelvago</title>
      </Helmet>
        <section className='packages-detials-main-section'>
            <ImageSlider imgData={[{
                img: packageDetailsData[0].imageCover,
                title: packageDetailsData[0].locations,
                subTitle: packageDetailsData[0].title
            }]} />

            <div className="package-details-main-container">
                {
                    packageDetailsData.map((pac, i) => (
                        <div className="package-details-section" key={pac.id}>
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
                    ))
                }
                
            </div>


        </section>
    </>
  )
}

export default PackagesDetails
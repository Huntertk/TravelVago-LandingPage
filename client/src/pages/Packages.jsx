import React from 'react'
import { DynamicHeading, ImageSlider, ProductContainer } from '../components'
import { allPackageData, packagesImgViwerData } from '../data'

const Packages = () => {
  return (
    <>
      <DynamicHeading title={"All Packages"} />
      <section className='package-page-main-section'>
          <ImageSlider imgData={packagesImgViwerData} />
          <ProductContainer prodData={allPackageData} para={"Travel far enough, meet yourself"} title={"All Packages"}/>
      </section>
    </>
  )
}

export default Packages
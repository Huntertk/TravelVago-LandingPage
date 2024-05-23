import React from 'react'

const PackageOverview = () => {
  return (
    <div className='package-overview-main-container row-reverse'>
        <div className="package-overview-container">
            <div className="package-overview-container-header">
                <h1>Itinerary in brief</h1>
            </div>
            <ul className="package-overview-container-list">
                <li>Day 01: Hanoi arrival</li>
                <li>Day 02: Hanoi city tour in jeep car - Night train to Lao Cai</li>
                <li>Day 03: Sapa - Villages</li>
                <li>Day 04: Sapa - Fanxipan peak - Drive to Hanoi</li>
                <li>Day 05: Hanoi - Tam Coc - Bich Dong - Mua Cave</li>
                <li>Day 06: Tam Coc - Ha Long Bay</li>
                <li>Day 07: Lan Ha bay - Halong - Hanoi</li>
                <li>Day 08: Hanoi free - Departure</li>
            </ul>
        </div>
        <div className="package-overview-container">
            <img src="/assets/images/packageVietnamOneImgOne.jpg" alt="Hanoi" />
        </div>
    </div>
  )
}

export default PackageOverview
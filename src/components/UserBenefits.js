import React from 'react'
import BenefitsBg from '../assets/benefitsBg.png'
import benefitsillustration from '../assets/benefitsIllustration.png'
import benefit1 from '../assets/benefits1.svg'
import benefit2 from '../assets/benefits2.svg'
import benefit3 from '../assets/benefits3.svg'
import benefit4 from '../assets/benefits4.svg'

const UserBenefits = () => {
  return (
    <div>
      <div className='benefits'>
        <div className='pattern'>
          <img className='img' src={BenefitsBg} alt="pattern" />
        </div>
        <div className="benefits_contents">

          <div className='benefits_contents_upper'>
            <div className="left">
              <img className='img' src={benefitsillustration} alt="pattern" />
            </div>
            <div className="right">
              <div className="top">
                <h1>Benefits of using Paladar app</h1>
              </div>
              <div className="bottom">
                <div className='div_content'>
                  <img className='img' src={benefit1} alt="pattern" />
                  <p>You have the chance to meet the locals and they can give you tips on the best places to visit.
                  </p>
                </div>
                <div className='div_content'>
                  <img className='img' src={benefit2} alt="pattern" />
                  <p>You can try traditional food in their own homes, while saving Money and escaping the routine of restaurants.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='benefits_contents_lower'>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBenefits
import React from 'react'
import rightArrow from '../assets/rightArrow.png'
import pattern from '../assets/subscriptionBg.png'

const UserSubsciption = () => {
  return (
    <div>
      <div className='subscription'>
        <div className='pattern'>
          <img className='img' src={pattern} alt="pattern" />
        </div>
        <div className='content'>
          <h1>Subscription</h1>
          <p>Get monthly updates so you dont miss any oportunity to have an awesome experience anymore</p>
          <div class="buttonIn">
            <input type="text" id="enter" placeholder='Your Email address' />
            <button id="clear">
              <span>
                Get Started
                <img src={rightArrow} />
              </span></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserSubsciption
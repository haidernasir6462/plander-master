import React from 'react';
import Logo from '../assets/Logo.png'
import ourSolution from '../assets/ourSolution.png'
import Circle from '../assets/circle.svg'


const UserOurSolution = () => {
  return (
    <>
      <div className='ourSolution'>
        <div className='Logo'>
          <img src={Logo} />
        </div>
        <div className='imgWithText'>
          <div className='img'>
            <img src={ourSolution} />
          </div>
          <div className='text'>
            <h1>
              Our Solution
            </h1>
            <p>
              There is a solution for travelers who, like you, are not satisfied with this mass way of travelling.
              With the Paladar application it has never been so easy to meet the local population (not even before the low-cost airlines!).
              We will be the bridge between you and the locals who like to cook and meet people from all over the world, through a simple and totally safe mobile application.
              There's no better way to get to know a culture than to walk into their house and sit down at the table with them.
              The Paladar application is a network for sharing meals in the locals private homes – designated in the application by Paladares -  among those who are willing to be hosts and the travellers who are looking for and authentic experience of tourism, interacting with the local population and learning about their culture.
            </p>
          </div>
        </div>
      </div>
      <div className='circle'>
        <img src={Circle} />
      </div>
    </>
  )
}

export default UserOurSolution
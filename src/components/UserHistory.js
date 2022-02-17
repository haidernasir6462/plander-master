import React from 'react';
import Logo from '../assets/Logo.png'
import History from '../assets/History.png'

const UserHistory = () => {
  return (
    <>
      <div className='History'>
        <div className='imgWithText'>
          <div className='text'>
            <h1>
              The History of “Paladares”
            </h1>
            <p>
              Paladar is the name used by Cuban for restaurants.
              For many years, the paladares were authentic underground restaurants where people served meals in their own homes, expecially to tourists who wanted to live a diferente experience and interact with the local population.
            </p>
          </div>
          <div className='img'>
            <img src={History} />
          </div>
        </div>
        <div className='Logo'>
          <img src={Logo} />
        </div>
      </div>
    </>)
}

export default UserHistory
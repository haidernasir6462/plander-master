import React from 'react';
import Img404 from '../assets/404.png'
import pattern from '../assets/ourTourism.png'

const UserOverTourism = () => {
  return (
    <div className="container">
      <div className='pattern'>
        <img className='img' src={pattern} alt="pattern" />
      </div>
      <div className="img-text">
        <h1>The problem of “overtourism”</h1>
        <p>
          We have all felt on a trip the feeling of not really knowing the place. Without contact with the locals, without sharing some of their experiences, we can hardly claim knowledge of a culture and a place.
          The most touristic cities are so full of tourists that it is increasingly difficult to eat traditional food and get to know the local people and their culture.
          This desire for a more authentic tourist experience is more frequent than you think, it conects you with more travelers than you can imagine!
        </p>
        <img src={Img404} alt={404} />
      </div>
    </div>
  )
}

export default UserOverTourism
import React from 'react'
import googlePlay from '../assets/googlePlay.png'
import appStore from '../assets/appStore.png'
import pladdarTextWithLogo from '../assets/pladdarTextWithLogo.png'
import footerBg from '../assets/footerBg.png'
import footerLogo from '../assets/footerLogo.png'
import fb from '../assets/fb.svg'
import twitter from '../assets/twitter.svg'
import insta from '../assets/insta.svg'
import linkdIn from '../assets/linkdIn.svg'
import copyright from '../assets/copyright.svg'

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className='pattern'>
          <img className='img' src={footerBg} alt="pattern" />
        </div>

        <div className="top">
          <img className="logo" src={pladdarTextWithLogo} alt="logo" />
        </div>

        <div className="medium">
          <img className="logo" src={googlePlay} alt="logo" />
        </div>

        <div className="bottom">
          <div className="right">
            <img src={appStore} alt={appStore} />
          </div>
          <div className="links">
            <ul>
              <li>
                <a href="#home">
                  <img src={fb} alt={fb} />
                </a>
              </li>
              <li>
                <a href="#problem">
                  <img src={twitter} alt={twitter} />
                </a>
              </li>
              <li>
                <a href="#solution">
                  <img src={insta} alt={insta} />
                </a>
              </li>
              <li>
                <a href="#history">
                  <img src={linkdIn} alt={linkdIn} />
                </a>
              </li>
            </ul>
          </div>
          {/* <div className="right">
          <img src={appStore} alt={appStore} />
        </div> */}
        </div>


        <hr className='hr' />


        <div className='copyright'>
          <div className="left">
            <img src={footerLogo} alt="logo" />
          </div>
          <div className="right">
            <img src={copyright} alt="logo" />
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
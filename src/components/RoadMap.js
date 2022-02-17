import React from 'react'
import roadMap1 from '../assets/roadMap1.svg'
import roadMap2 from '../assets/roadMap2.svg'
import roadMap3 from '../assets/roadMap3.svg'
import roadMap4 from '../assets/roadMap4.svg'
import roadMap5 from '../assets/roadMap5.svg'
import roadMap6 from '../assets/roadMap6.svg'
import roadMap7 from '../assets/roadMap7.svg'

const roadMap = () => {
  return (
    <div className='roadMap'>
      <div className='heading'>
        <h1>How it Works</h1>
        <p>
          You should make many requests for the same time to diferente Paladares! When the first one accepts, all others will be deleted. This way you will  increase your chance of having a unique experience of having a meal at a local's home!
        </p>
      </div>
      <div class="timeline">
        <ul>
          <li>
            <div class="content">
              <p>You select, on the main screen, a Paladar that you like</p>
            </div>
            <div class="point"></div>
            <div class="date">
              <img src={roadMap1} alt="img" style={{ width: '100%' }} />
            </div>
          </li>
          <li>
            <div class="content">
              <p>After viewing your information, click on the “send a request” button</p>
            </div>
            <div class="point"></div>
            <div class="date">
                <img src={roadMap2} alt="img" style={{ width: '100%' }} />
            </div>
          </li>
          <li>
            <div class="content">
              <p>Choose the day you want to book, if you haven't chosen it before.</p>
            </div>
            <div class="point"></div>
            <div class="date">
                <img src={roadMap3} alt="img" style={{ width: '100%' }} />
            </div>
          </li>
          <li>
            <div class="content">
              <p>You select the time that suits you best.</p>
            </div>
            <div class="point"></div>
            <div class="date">
                <img src={roadMap4} alt="img" style={{ width: '100%' }} />
            </div>
          </li>
          <li>
            <div class="content">
              <p>You confirm the request to this Host</p>
            </div>
            <div class="point"></div>
            <div class="date">
                <img src={roadMap5} alt="img" style={{ width: '100%' }} />
            </div>
          </li>
          <li>
            <div class="content">
              <p>Before confirming, you can change the information and choose to have the experience alone or with other travelers</p>
            </div>
            <div class="point"></div>
            <div class="date">
                <img src={roadMap6} alt="img" style={{ width: '100%' }} />
            </div>
          </li>
          <li>
            <div class="content">
              <p>You sent a request. Your reservation will be confirmed when the host accepts it. Send more requests for the same time to inscrease your chances of having na amazing experience.</p>
            </div>
            <div class="point"></div>
            <div class="date">
                <img src={roadMap7} alt="img" style={{ width: '100%' }} />
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default roadMap
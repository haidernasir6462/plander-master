import React from 'react'
import { useState } from 'react'
import { FiMinus, FiPlus } from 'react-icons/fi'
import plus from '../assets/plus.svg'
import xmark from '../assets/xmark.png'

const FAQs = () => {
  const QuestionsAnswerArray = [
    {
      id: 0,
      question: 'How does the payment work?',
      answer:
        'The payment will be made through the application in a totally secure way. You can make several requests for the same time to different Paladars, but the money will only come out of your account when the first host accepts it and all the other requests will be eliminated. Afterwards, the money will stay with us until a few days after your experience and you will be refunded if anything goes wrong.',
    },

    {
      id: 1,
      question: 'Is the mobile app secure?',
      answer:
        '',
    },

    {
      id: 2,
      question: 'What are the ways to get a panda and join the fight against The Syndicate?',
      answer:
        '',
    },

    {
      id: 3,
      question: 'I have multiple allergies, how does the host know?',
      answer:
        '',
    },

    {
      id: 4,
      question: 'I am vegetarian or vegan. Are there any Paladares for me?',
      answer:
        '',
    },

    {
      id: 5,
      question: 'Could there be moments of embarrassment with the host?',
      answer:
        'The payment will be made through the application in a totally secure way. You can make several requests for the same time to different Paladars, but the money will only come out of your account when the first host accepts it and all the other requests will be eliminated. Afterwards, the money will stay with us until a few days after your experience and you will be refunded if anything goes wrong.'
    },
  ]
  const [clicked, setClicked] = useState(false)

  const toggle = (index) => {
    if (clicked === index) {
      return setClicked(null)
    }
    setClicked(index)
  }

  return (
    <>
      <div className="faqs_section" id="faqs">
        <h1>FAQs</h1>
        <div className="faq_container">
          {QuestionsAnswerArray.map((item, index) => (
            <div>
              <div className="question_heading" onClick={() => toggle(index)} key={index}>
                <div className='counter'>
                  <span>01</span>
                </div>
                <div className='question'>
                  <span>{item.question}</span>
                </div>
                <div className="icon_container">{clicked === index ? <img src={xmark} /> : <img src={plus} />}</div>
              </div>
              {clicked === index ? (
                <div className="answer_dropdown">
                  <p>{item.answer}</p>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </>

  )
}

export default FAQs
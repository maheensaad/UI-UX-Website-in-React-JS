import React from 'react'
import './feature.css'
const Feature = ({title, text}) => { /* feature component accepts title and text as props here */
  return (
    <div className='gpt3__features-container__feature'>
      <div className='gpt3__features-container__feature-title'>
        <div /> {/* empty div to give space */}
        <h1>{title}</h1>
      </div>

      <div className='gpt3__features-container_feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature
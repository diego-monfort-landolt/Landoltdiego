import { useState } from 'react'
import './time.css'

const Time = () => {
  let time = new Date().toLocaleTimeString()
    const [currentTime, setCurrentTime] =  useState(time)
    const updateTime = () => {
      let time = new Date().toLocaleTimeString()
      setCurrentTime(time)
    }
    setInterval(updateTime, 1000);  
  return (
    <>
      <div className='time-container'>
        <h2>{ currentTime }</h2>
      </div>
    </>
  )
}
export default Time
import React from 'react'
import'./Portfolio.css'

const Portfolio = () => {
  return (
    <>
<br></br>
    <div className='portfolio-grid'>

      <div className='align-content'>
      <a href='https://github.com/skinnaird88/The-xG-Map' target='_blank'>
        <img src='./public/xg-map.png' className='project-icon'></img>
        </a>
        <p className='project-label'>The xG Map</p>
      </div>
      
      <div className='align-content'>

      <a href='https://github.com/skinnaird88/Habit-tracker-group-project' target='_blank'>
        <img src='./code-chef.png' className='project-icon'></img>
        </a>
        <p className='project-label'>Habit Trakkerz</p>
      </div>
      
      <div className='align-content'>

      <a href='https://github.com/skinnaird88/solo-python-project-spending-tracker' target='_blank'>
        <img src='./public/spending-tracker.png' className='project-icon'></img>
        </a>
      <p className='project-label'>Spending Tracker</p>
      </div>
      
    </div>
    </>
  )
}

export default Portfolio
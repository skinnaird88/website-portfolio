import React from 'react'
import'./Portfolio.css'

const Portfolio = () => {
  return (
    <>
    <h1>Portfolio</h1>
    <div className='portfolio-grid'>
      <a href='https://github.com/skinnaird88/The-xG-Map'>
        <img src='../../public/xg-map.png' className='project-icon'></img>
        </a>
      <p>Habit Trackers</p>
      <p>Spending Tracker</p>
    </div>
    </>
  )
}

export default Portfolio
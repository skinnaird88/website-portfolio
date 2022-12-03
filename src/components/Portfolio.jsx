import React from 'react'
import'./Portfolio.css'

const Portfolio = () => {
  return (
    
<div id="center-grid">
<br></br>

    <div className='portfolio-grid'>

      <div className='align-content'>
      <a href='https://github.com/skinnaird88/The-xG-Map' target='_blank'>
        <img src='./xg-map.png' className='project-icon'></img>
        </a>
        <div className='project-label'><h2><u>The xG Map</u></h2>
        <ul>
          <li>Football statistics app focussing on expected goals (xG). Featuring an interactive pitch graphic.</li>
          <li>JavaScript, React, Java, Spring</li>
          </ul>
          </div>
      </div>
      
      <div className='align-content'>

      <a href='https://github.com/skinnaird88/Habit-tracker-group-project' target='_blank'>
        <img src='./mindful-meal.png' className='project-icon'></img>
        </a>
        <div className='project-label'><h2><u>Habit Trakkerz</u></h2>
        <ul>
          <li>Group project allowing the user to plan and record meals using a recipe API</li>
          <li>JavaScript, React, MongoDB, Express</li>
          </ul>
          </div>
      </div>
      
      <div className='align-content'>

      <a href='https://github.com/skinnaird88/solo-python-project-spending-tracker' target='_blank'>
        <img src='./spending-tracker.png' className='project-icon'></img>
        </a>
      <div className='project-label'><h2><u>Spending Tracker</u></h2>
      <ul>
          <li>Personal money manager allowing the user to record merchants, categories and transactions</li>
          <li>Python, Flask, PostgreSQL, Psycopg2</li>
          </ul>
          </div>
      </div>
      
    </div>
</div>
  
  )
}

export default Portfolio
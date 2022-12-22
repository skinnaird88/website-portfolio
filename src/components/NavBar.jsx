import React from 'react'
import './NavBar.css'

const NavBar = () => {

  return (
    <nav>
      <a href='https://github.com/skinnaird88' target="_blank">
        <img src='../../github.png' id='github'></img>
      </a>
      <a href='../../SKinnaird-CV.pdf' target="_blank">
        <img src='../../cv.png' id='cv'></img>
      </a>
      <a href='https://www.linkedin.com/in/stephen-kinnaird-a9b713112/' target="_blank">
        <img src='../../linkedin.png' id='linkedin'></img>
      </a>

    </nav>
  )
}

export default NavBar
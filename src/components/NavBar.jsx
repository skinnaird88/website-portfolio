import React from 'react'
import './NavBar.css'

const NavBar = () => {

  return (
    <nav>
      <h1>NavBar</h1>
      <a href='https://github.com/skinnaird88'>
        <img src='../../github.png' className='link-icon'></img>
      </a>
      <a href='https://www.linkedin.com/in/stephen-kinnaird-a9b713112/'>
        <img src='../../linkedin.png' className='link-icon'></img>
      </a>

    </nav>
  )
}

export default NavBar
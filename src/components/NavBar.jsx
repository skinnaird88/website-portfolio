import React from 'react'
import { useState } from 'react'
import './NavBar.css'

const NavBar = () => {

  const [showList, setShowList] = useState(false)
  const toggleButton = () => setShowList((current) => (!current));

  function DropdownMenu(){
    if(showList){
    return(
      <div className='dropdown'>
        <a href='https://github.com/skinnaird88' target="_blank">GitHub</a>
        <a href='../../SKinnaird-CV.pdf' target="_blank">CV</a>
        <a href='https://www.linkedin.com/in/stephen-kinnaird-a9b713112/' target="_blank">LinkedIn</a>
        <button onClick={toggleButton}>X</button>
      </div>
    )}
    else{
      return(
        <a href="#" className='toggle-button' onClick={toggleButton}>
        <span className='bar'></span>
        <span className='bar'></span>
        <span className='bar'></span>
      </a>
      )
    }
  }


  return (
    <nav>

      <DropdownMenu/>
    
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
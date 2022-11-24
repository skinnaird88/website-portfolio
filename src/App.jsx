import './App.css'
import NavBar from './components/NavBar'

import Bio from './components/Bio'
import Portfolio from './components/Portfolio'
import Form from './components/Form'

function App() {


  return (
    <div className="App">
      <NavBar/>
      <Picture/>
      {/* <img src='./public/code-chef.png' alt='profile image'></img> */}
      <Bio/>
      <Portfolio/>
      <Form/>
    </div>
  )
}

export default App

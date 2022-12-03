import './App.css'
import NavBar from './components/NavBar'
import Picture from './components/Picture'
import Bio from './components/Bio'
import Portfolio from './components/Portfolio'
import Form from './components/Form'

function App() {


  return (
    <div className="App">
      <NavBar/>
      <section id='header'>Stephen Kinnaird - React, Javascript and Java Developer</section>
      <Picture/>
      <Bio/>
      <Portfolio/>
      <Form/>
      <footer>
      <section id="signature">Stephen Kinnaird</section>
      <img src='./sk-footer.png' className='photo'></img>
      </footer>
    </div>
  )
}

export default App

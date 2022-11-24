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
      <Picture/>
      <Bio/>
      <Portfolio/>
      <Form/>
    </div>
  )
}

export default App

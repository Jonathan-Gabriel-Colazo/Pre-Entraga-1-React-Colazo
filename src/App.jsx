
import './App.css'
import Itemlist from './components/Itemcontainer';
import Navbar from './components/Navbar';


function App() {

  return (
    <main className='main'> 
      <Navbar>
      <Itemlist greetings="Hello world" />
      </Navbar>
    </main>

  )
}

export default App

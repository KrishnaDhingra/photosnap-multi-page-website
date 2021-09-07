import './index.css'
import Navbar from './components/navbar.js'
import { Home1 } from './components/home.js'
import { Home2 } from './components/home.js'
import { Home3 } from './components/home.js'

function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <Home1></Home1>
      <Home2></Home2>
      <Home3></Home3>
    </div>

  );
}

export default App;

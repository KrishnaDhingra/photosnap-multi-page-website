import './index.css'
import Navbar from './components/navbar.js'
import { Home1, Home2, Home3 } from './components/home.js'


function App() {
  return (

    <div className="App">
      {/* <Navbar></Navbar> */}
      <Home1/>
      <Home2/>
      <Home3/>
    </div>

  );
}

export default App;

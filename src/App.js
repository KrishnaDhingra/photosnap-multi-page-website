import './index.css'
import Navbar from './components/navbar.js'
import { Home1, Home2, Home3 } from './components/home.js'
import { Stories_Preview_Container } from './components/stories_preview.js';
import { FeautresContainer } from './components/features.js'


function App() {
  return (

    <div className="App">
      <Navbar></Navbar>
      <Home1/>
      <Home2/>
      <Home3/>
      <Stories_Preview_Container/>
      <FeautresContainer/>
    </div>

  );
}

export default App;

import './index.css'
import Navbar from './components/navbar.js'
import { Home1, Home2, Home3 } from './components/home.js'
import { Stories_Preview_Container } from './components/stories_preview.js';
import { FeautresContainer } from './components/features.js'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'


export let App = () => {
  return (
    <Router>

      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/stories" exact component={Stories}/>
          <Route path="/features" exact component={Features}/>
          <Route path="/pricing" exact component={Pricing}/>
        </Switch>
      </div>
    </Router>

  );
}

export let Home = () => {
  return (
    <>
      <Home1/>
      <Home2/>
      <Home3/>
      <Stories_Preview_Container/>
      <FeautresContainer/>
    </>
  )
}
export let Stories = () => {
  return (
    <Stories_Preview_Container/>
  )
}

export let Features = () => {
  return(
    <FeautresContainer/>
  )
}

export let Pricing = () => {
  return(
    <p>This is pricing</p>
  )
}

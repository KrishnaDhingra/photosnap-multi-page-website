import './index.css'
import Navbar from './components/navbar.js'
import { Home1, Home2, Home3 } from './components/home.js'
import { Stories_Preview_Container } from './components/stories_preview.js';
import { FeaturesContainer } from './components/features.js'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import { Stories_Top, StoriesMain } from './components/stories_top.js';
import { Features_Top, Main_Features_Container } from './components/features_top.js'
import { Footer } from './components/footer.js'


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
        <Footer/>
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
      <FeaturesContainer/>
    </>
  )
}
export let Stories = () => {
  return (
    <>
      <Stories_Top/>
      <StoriesMain/>
    </>
  )
}

export let Features = () => {
  return(
    <>
      <Features_Top/>
      <Main_Features_Container/>
    </>
  )
}

export let Pricing = () => {
  return(
    <p>This is pricing</p>
  )
}

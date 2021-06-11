import './App.css';
import Navigation from './components/Navbar'
import { Route, Switch } from 'react-router-dom';
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import './App.css'
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/portfolio' component={Portfolio}/>
      </Switch>
      <Footer/>
    </div>
  );
}

export default App;

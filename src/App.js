import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/HomeComponent';
import Services from './components/ServiceComponents';
import Contact from './components/ContactComponent';
import Header from './components/HeaderComponent';
import Footer from './components/FooterComponent'
import "./App.css";
import Profiles from './components/AboutusComponent';
import Message from './components/MessageComponent';




function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Services} />
          <Route path="/messages" component={Message} />
          <Route path="/aboutus" component={Profiles} />
          <Route path="/contactus" component={Contact} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

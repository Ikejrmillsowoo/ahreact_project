import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Footer from './components/FooterComponent';
import Header from './components/HeaderComponent';
import Home from './components/HomeComponent';
import Service from './components/ServiceComponents';
import Contact from './components/ContactComponent';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" component={Service} />
          <Route path="/contactus" component={Contact} />
          </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

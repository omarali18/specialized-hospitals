
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Doctors from './components/Doctors/Doctors';
import Header from './components/Header/Header';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Appointment from './components/Appointment/Appointment';
import About from './components/About/About';
import Pharmacy from './components/Pharmacy/Pharmacy';

function App() {
  return (
    <div >
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <Header></Header>
            <Doctors></Doctors>
            <Footer></Footer>
          </Route>
          <Route path="/about">
            <Header></Header>
            <About></About>
            <Footer></Footer>
          </Route>
          <Route path="/pharmacy">
            <Header></Header>
            <Pharmacy></Pharmacy>
            <Footer></Footer>
          </Route>
          <Route path="/service/:id">
            <Header></Header>
            <ServiceDetails></ServiceDetails>
            <Footer></Footer>
          </Route>
          <Route path="/appointment/:name">
            <Header></Header>
            <Appointment></Appointment>
            <Footer></Footer>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

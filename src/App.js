
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
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div >
      <AuthProvider>
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
            <Route path="/login">
              <Header></Header>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/service">
              <Header></Header>
              <ServiceDetails></ServiceDetails>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/appointment/:name">
              <Header></Header>
              <Appointment></Appointment>
              <Footer></Footer>
            </PrivateRoute>
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;

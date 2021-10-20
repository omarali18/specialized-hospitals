
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Doctors from './components/Doctors/Doctors';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';
import NotFound from './components/NotFound/NotFound';
import Footer from './components/Footer/Footer';
import Appointment from './components/Appointment/Appointment';
import About from './components/About/About';
import Pharmacy from './components/Pharmacy/Pharmacy';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MenueBar from './components/MenueBar/MenueBar';

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
              <MenueBar></MenueBar>
              <Doctors></Doctors>
              <Footer></Footer>
            </Route>
            <Route path="/about">
              <MenueBar></MenueBar>
              <About></About>
              <Footer></Footer>
            </Route>
            <Route path="/pharmacy">
              <MenueBar></MenueBar>
              <Pharmacy></Pharmacy>
              <Footer></Footer>
            </Route>
            <Route path="/login">
              <MenueBar></MenueBar>
              <Login></Login>
              <Footer></Footer>
            </Route>
            <PrivateRoute path="/service">
              <MenueBar></MenueBar>
              <ServiceDetails></ServiceDetails>
              <Footer></Footer>
            </PrivateRoute>
            <PrivateRoute path="/appointment/:name">
              <MenueBar></MenueBar>
              <Appointment></Appointment>
              <MenueBar></MenueBar>
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

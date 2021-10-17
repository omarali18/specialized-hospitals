
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import Doctors from './components/Doctors/Doctors';
import Header from './Header/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/home">
            <Header></Header>
            <Home></Home>
          </Route>
          <Route path="/doctors">
            <Header></Header>
            <Doctors></Doctors>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

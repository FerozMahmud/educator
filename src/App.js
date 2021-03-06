import './App.css';
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import Home from './Pages/Home/Home';
import Services from './Pages/Services/Services';
import Team from './Pages/Team/Team';
import About from './Pages/About/About';
import Error from './Pages/Error/Error';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';


function App() {
  return (
    <div className="App">

      {/*  ...............................................
           ..............React router use here............
           ...............................................  */}

      <Router>
        <Header></Header>
        <Switch>

          <Route exact path='/Home'>
            <Home></Home>
          </Route>

          <Route exact path='/'>
            <Home></Home>
          </Route>

          <Route exact path='/About'>
            <About></About>
          </Route>

          <Route exact path='/Services'>
            <Services></Services>
          </Route>

          <Route exact path='/Team'>
            <Team></Team>
          </Route>

          <Route exact path='/*'>
            <Error></Error>
          </Route>

        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;

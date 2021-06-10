import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import BookList from "./components/BookList";
import MyJumbotron from "./components/MyJumbotron";
import WarningSign from "./components/WarningSign";
import SingleBook from "./components/SingleBook";
import fantasy from "./data/fantasy.json";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignIn from "./components/SignIn";
import Registration from "./components/Registration";

function App() {
  return (
      <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to="/">StriveBook</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/sign-in">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Register</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Switch>
              <Route path="/sign-in" component={SignIn} />
              <Route path="/register" component={Registration} />
            </Switch>
          </div>
        </div>
      </div>
        {/* <MyJumbotron title="Strive Books" /> */}
        {/* <SingleBook book = {fantasy[0]} ></SingleBook> */}
        <Route exact path='/' render={(routerProps)=> < BookList{...routerProps} books={fantasy}/>} />
      </Router>
  );
}

export default App;

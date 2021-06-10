// import React from "react";
// import { Component } from "react";
// import { Container, Nav, Navbar } from "react-bootstrap";
// import Fantasy from "../data/fantasy.json";
// import Horror from "../data/horror.json";
// import Romance from "../data/romance.json";
// import Scifi from "../data/scifi.json";
// import BookList from "./BookList";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import SingleBook from "./SingleBook";
// import Registration from "./Registration";
// import SignIn from "./SignIn";
// import Successful from "./Successful";
// class MyNav extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <nav className="navbar navbar-expand-lg navbar-light fixed-top">
//             <div className="container">
//               <Link className="navbar-brand" to="/">
//                 StriveBook
//               </Link>
//               <div
//                 className="collapse navbar-collapse"
//                 id="navbarTogglerDemo02"
//               >
//                 <ul className="navbar-nav ml-auto">
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/sign-in">
//                       Login
//                     </Link>
//                   </li>
//                   <li className="nav-item">
//                     <Link className="nav-link" to="/register">
//                       Register
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </nav>

//           <div className="auth-wrapper">
//             <div className="auth-inner">
//               <Switch>
//                 <Route path="/sign-in" component={SignIn} />
//                 <Route path="/register" component={Registration} />
//                 <Route path="/success" component={Successful} />
//               </Switch>
//             </div>
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }
// export default MyNav;

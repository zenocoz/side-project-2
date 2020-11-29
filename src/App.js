import logo from "./logo.svg"
import "bootstrap/dist/css/bootstrap.min.css" //always needs to be before App.css
import "./App.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/Home"
import Backoffice from "./components/Backoffice"
import Cart from "./components/Cart"
import Navbar from "./components/NavBar"

function App() {
  return (
    <Router>
      <Navbar />
      <Route path="/" exact component={Home} />
      <Route path="/backoffice" exact component={Backoffice} />
      <Route path="/cart" exact component={Cart} />
    </Router>
  )
}

export default App

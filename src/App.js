import logo from "./logo.svg"
import "bootstrap/dist/css/bootstrap.min.css" //always needs to be before App.css
import "./App.css"
import {BrowserRouter as Router, Route} from "react-router-dom"
import Home from "./components/Home"
import Backoffice from "./components/Backoffice"
import Cart from "./components/Cart"
import Navbar from "./components/NavBar"
import React from "react"

class App extends React.Component {
  state = {
    query: "",
  }

  onChangeHandler = (e) => {
    this.setState({query: e.target.value})
  }

  render() {
    return (
      <Router>
        <Navbar
          onChangeHandler={this.onChangeHandler}
          query={this.state.query}
        />
        <Route path="/" exact component={Home} />

        <Route
          path="/backoffice"
          exact
          render={(props) => <Backoffice {...props} query={this.state.query} />}
        />

        <Route path="/cart" exact component={Cart} />
      </Router>
    )
  }
}

export default App

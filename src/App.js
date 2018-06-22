import React, { Component } from "react";
import "./App.css";

import NavBar from "./components/NavBar";
import Landing from "./components/Landing";
class App extends Component {
  constructor () {
    super ()
    this.state = {
      route: '/main'
    }
    window.onhashchange = () =>{this.hasChange()}
  }
  componentDidMount () {
    this.hasChange()
  }

  hasChange () {
    const validRoutes = ['/main', '/quoteRequest', '/customer', '/tasks']
    const defaultRoute='/main'
    const newRoute = window.location.hash.replace(/^#/, '').trim()
    const isValidRoute = validRoutes.includes(newRoute)

    if(isValidRoute) {
      this.setState({route:newRoute})
    } else {
      window.location.hash = defaultRoute
    }
  }

  render() {
    let pageComponent = <Landing />
    // if (this.state.route === '/quoteRequest'){
    //   pageComponent = <QuoteRequest />
    // } else if (this.state.route === '/customer') {
    //   pageComponent = <Customer />
    // }else if (this.state.route === '/tasks') {
    //   pageComponent = <Tasks />
    // } 


    return (
      <main className="App">
        <NavBar activeRoute={this.state.route} />
        {pageComponent}
      </main>
    );
  }
}

export default App;

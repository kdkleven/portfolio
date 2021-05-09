import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import NoMatch from "./pages/NoMatch";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Wrapper>
          <Route exact path="/" component={About} />
          <Route exact path="/home" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route component={NoMatch} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/**Header */}
      <Header />

      <Router>
        <Switch>
          {/**Individual chat screen */}
          {/**chat screen */}
          <Route path="/chat">
            <h1>Chat page here</h1>
          </Route>

          {/**default page, should always be at the buttom of the pages routed */}

          <Route path="/">
            {/**Tinder Card */}
            <TinderCards />
            <SwipeButtons />
            {/**Footer Icon buttons */}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

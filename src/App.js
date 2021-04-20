import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      {/**Header */}
      <Header />

      <Router>
        <Switch>
          {/**chat screen */}
          <Route path="/chat">
            <h1>Chat page here</h1>
          </Route>

          {/**default page, should always be at the buttom of the pages routed */}

          <Route path="/">
            {/**Tinder Card */}
            <TinderCards />
          </Route>
        </Switch>

        {/**Footer Icon buttons */}

        {/**Individual chat screen */}
      </Router>
    </div>
  );
}

export default App;

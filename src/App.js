import "./App.css";
import Header from "./components/Header";
import TinderCards from "./components/TinderCards";
import SwipeButtons from "./components/SwipeButtons";
import Chats from "./components/Chats";
import ChatScreen from "./components/Chats/ChatScreen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          {/**Individual chat screen */}
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          {/**chat screen */}
          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          {/**default page, should always be at the buttom of the pages routed */}

          <Route path="/">
            <Header />
            {/**Tinder Card */}
            <TinderCards />

            {/**Footer Icon buttons */}
            <SwipeButtons />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

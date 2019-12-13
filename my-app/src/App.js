import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";

const Homepages = props => {
  console.log(props);
  return (
    <div>
      <h1>HomePage</h1>
    </div>
  );
};

const TopicsList = () => (
  <div>
    <h1>Topics List Page</h1>
  </div>
);

const TopicDetail = () => (
  <div>
    <h1>Topic Detail Page</h1>
  </div>
);

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepages} />
      <Route exact path="/topics" component={TopicsList} />
      <Route path="/topics/:topicId" component={TopicDetail} />
    </div>
  );
}

export default App;

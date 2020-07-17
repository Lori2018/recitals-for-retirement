import React from "react";
import logo from "./logo.svg";
import { Switch, Route } from "react-router-dom";
import "./App.scss";
import Home from "./components/Home.js";
import GetInvolved from "./components/GetInvolved.js";
import ContactUs from "./components/ContactUs.js";

class App extends React.Component {
  render() {
    return (
      <>
        <div className="home-container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/get-involved" component={GetInvolved} />
            <Route path="/contact-us" component={ContactUs} />
          </Switch>
          {/* <!-- The core Firebase JS SDK is always required and must be listed first --> */}
          <script src="/__/firebase/7.15.5/firebase-app.js"></script>

          {/* <!-- TODO: Add SDKs for Firebase products that you want to use
         https://firebase.google.com/docs/web/setup#available-libraries --> */}
          <script src="/__/firebase/7.15.5/firebase-analytics.js"></script>

          {/* <!-- Initialize Firebase --> */}
          <script src="/__/firebase/init.js"></script>
        </div>
      </>
    );
  }
}

export default App;

import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage/homepage";
import ShopPage from "./pages/shop/shop";
import SignInUp from "./pages/sign-in-up/sign-in-up";
import Header from "./components/header/header";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import { app } from "firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }

  // This is how we connect the user to our app. We created this user authentication pack with firebase. So the important thing to know when creating this dfuction is that we need to close it
  // To close it we will use unsubscribeFromAuth and we will unmount to be able to close the cycle
  // This is a test
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(onSnapshot => {
          this.setState(
            {
              currentUser: {
                id: onSnapshot.id,
                ...onSnapshot.data()
              }
            },
            () => {
              console.log(this.state);
            }
          );
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInUp} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Fade } from "react-awesome-reveal";
import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import LoginScreen from "./screens/LoginScreen";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from "./firebase";
import SignupScreen from "./screens/SignupScreen";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // User in signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Header />
            <HomeScreen />
            <Fade>
              <Footer />
            </Fade>
          </Route>
          <Route exact path="/account/signin">
            {user ? <Redirect to="/menu" /> : <LoginScreen />}
          </Route>
          <Route exact path="/account/create">
            {user ? <Redirect to="/menu" /> : <SignupScreen />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

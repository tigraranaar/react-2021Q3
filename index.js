import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  useLocation,
} from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Home from "./src/pages/Home";
import About from "./src/pages/About";
import Empty from "./src/pages/Empty";
import "./src/styles/index.scss";
import PostDetail from "./src/components/PostDetail/PostDetail";

const Content = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition timeout={500} classNames="page" key={location.key}>
        <Switch location={location}>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          {/* <Route exact path="/details/:postID"> */}
          <Route exact path="/details/:value/:query">
            <PostDetail />
          </Route>
          <Route path="*">
            <Empty />
          </Route>
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
};

const App = () => (
  <Router>
    <>
      <nav className="nav">
        <NavLink to="/" activeClassName="is-active" exact>
          Home
        </NavLink>
        <NavLink to="/about" activeClassName="is-active" exact>
          About
        </NavLink>
      </nav>
      <div className="container">
        <Content />
      </div>
    </>
  </Router>
);

render(<App />, document.getElementById("app"));

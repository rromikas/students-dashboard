import React, { useState } from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { Router, Switch, Route } from "react-router-dom";
import history from "./history";
import LeftSideMenu from "./components/LeftSideMenu";
import LeftSideMenuFloating from "./components/LeftSideMenuFloating";
import Dashboard from "./components/Dashboard";

function App() {
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  return (
    <Provider store={store}>
      <Router history={history}>
        <div className="container-fluid px-0 h-100">
          <div className="row no-gutters h-100 position-relative">
            <LeftSideMenuFloating
              isMenuOpened={isMenuOpened}
              setMenu={setIsMenuOpened}
            ></LeftSideMenuFloating>
            <div className="col-auto text-white bg-dark py-4 px-5 d-none d-md-block">
              <LeftSideMenu></LeftSideMenu>
            </div>
            <div className="col p-4">
              <Switch>
                <Route
                  exact
                  path="/"
                  render={() => (
                    <Dashboard setMenu={setIsMenuOpened}></Dashboard>
                  )}
                ></Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;

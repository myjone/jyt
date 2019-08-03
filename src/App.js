import React from 'react'
import { MediaQuery } from 'react-responsive'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import routes from "@/router/Router.js"
function App() {
  return (
    <div className="App">
      <div>
          <Router>
              <Switch>
                {renderRoutes(routes)}
              </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;

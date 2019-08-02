import React from 'react'
import { MediaQuery } from 'react-responsive'
import { renderRoutes } from 'react-router-config'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import routes from "@/router/router.js"
function App() {
  return (
    <div className="App">
      <div>
        <MediaQuery query='(min-device-width:1224px)'>
          <Router>
              <Switch>
                {renderRoutes(routes)}
              </Switch>
        </Router>
        </MediaQuery>
        <MediaQuery query='(max-device-width:1224px)'>
          <Router>
            {/* <Route path='/' component={MobileApp}/>
                        <Route path='/details/:uniquekey' component={MobileNewsDetail}/> */}
          </Router>
        </MediaQuery>
      </div>
    </div>
  );
}

export default App;

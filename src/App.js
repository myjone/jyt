import React from 'react'
import { MediaQuery } from 'react-responsive'
import { BrowserRouter as Router,Route,Switch } from "react-router-dom"
import PcContainer from '@/pages/pc/PcContainer/PcContainer.js'
import Notfound from '@/pages/pc/error/NotFound'

function App() {
  return (
    <div className="App">
      <div>
        <MediaQuery query='(min-device-width:1224px)'>
          <Router>
        <Switch>
        <Route  path='/' exact component={PcContainer}>
            
         </Route>
        <Route component={Notfound} />
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

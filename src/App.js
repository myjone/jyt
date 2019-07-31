import React from 'react'
import { MediaQuery } from 'react-responsive'
import { BrowserRouter as Router,Route } from "react-router-dom"
import PcContainer from '@/pages/pc/PcContainer/PcContainer.js'


function App() {
  return (
    <div className="App">
      <div>
        <MediaQuery query='(min-device-width:1224px)'>
          <Router>
            <Route  path='/' component={PcContainer}>
            
            </Route>
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

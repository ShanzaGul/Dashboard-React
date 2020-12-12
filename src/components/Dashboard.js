import React, { Component } from 'react'
import '../stylescss/sidebar.css'
import Sidebar from './Sidebar'
import '../stylescss/dash.css'
import Content from './Content'
import SourceViews from './SourceViews'
import AllCharts from './AllCharts'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class Dashboard extends Component {
    render() {
        return (
<Router>
  <div className="container-fluid px-4">

    <div className="row ml-lg-3 g-5 pt-3 mb-3">
      <div className="col-lg-3 col-md-12">
        <Sidebar />
      </div>

      <div className="col-lg-9 col-md-12">
        <Switch>
            <Route path="/source">
              <SourceViews />
            </Route>
            <Route path="/charts">
              <AllCharts />
            </Route>
            <Route path="/">
              <Content />
            </Route>
          </Switch>
      </div>
    </div>

        
  </div>
 </Router>
        )
    }
}

export default Dashboard;
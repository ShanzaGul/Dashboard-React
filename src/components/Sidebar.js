import React, { Component } from 'react'
import '../stylescss/sidebar.css'
import {
    Link
  } from "react-router-dom";
class Sidebar extends Component {
    render() {
        return (
            <div>
                 <div className="d-flex flex-md-row flex-lg-column shadow-sm rounded-top bg-white kk">
                  <Link to="/" style={{textDecoration:"none"}}><div className="link">Dashboard</div></Link>
                  <Link to="/source" style={{textDecoration:"none"}}><div className="link">Views</div></Link>
                  <Link to="charts" style={{textDecoration:"none"}}><div className="link">Charts</div></Link>
              </div>
            </div>
        )
    }
}

export default Sidebar;

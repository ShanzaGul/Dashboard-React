import './App.css';
import Dashboard from './components/Dashboard.js'

function App() {
  return (
    <div className="App container-fluid bg-light">
    <div className="row p-3 header">
     <div className="col-12">
     <div className="text-center">
      <h2>DASHBOARD APP</h2></div>
     </div>
  </div>
      <Dashboard />

      <div className="row border-top">
     <div className="col-12 p-2">
        <div className="footer d-flex justify-content-center">
        <p style={{fontWeight:"200" , color:"darkgray"}}>
        2020 © Dashboard.com
        </p>
        </div>
     </div>
  </div>
    </div>
  );
}

export default App;

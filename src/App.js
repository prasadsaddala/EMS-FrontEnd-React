import './App.css';
import {BrowserRouter as BrowserRouter,Route, Routes}  from 'react-router-dom'

import HeaderComponent from './components/HeaderComponent';
import Employees from './components/Employees';
import AddEmployee from './components/AddEmployee';
import FooterComponent from './components/FooterComponent';
import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <div>
          <div classname="container">
            <HeaderComponent />
              <br></br>  
              <br></br>
              <div className="container">
                <Routes>
                    <Route exact path="/Login" element={<Login/>}/>
                    <Route exact path="/Employees" element={<Employees/>}/>
                    <Route exact path="/add-employee" element={<AddEmployee/>}/>
                    <Route exact path="/add-employee/:id" element={<AddEmployee/>}/>
                    <Route exact path="/Registration" element={<Registration/>}/>

                 </Routes>
              </div>  
            <FooterComponent />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

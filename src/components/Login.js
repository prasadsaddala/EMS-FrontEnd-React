import {  useState } from "react";
import { Link,useNavigate } from 'react-router-dom';
import axios from "axios";

 
 
function Login() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
 
 
    async function login(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/register/login", {
            email: email,
            password: password,
            }).then((res) =>
            {
             console.log(res.data);
            
             if (res.data.message === "Email not exits")
             {
               alert("Email not exits");
             }
             else if(res.data.message === "Login Success")
             {
                
                navigate('/Employees');
             }
              else
             {
                alert("Incorrect Email and Password not match");
             }
          }, fail => {
           console.error(fail); // Error!
  });
        }
 
         catch (err) {
          alert(err);
        }
      
      }
  
  
    return (
        <div>
        <div className="container mt-4">
            <div className=" row justify-context-center">
            <div className="card col-md-4 offset-md-3 offset-md-3 w-40 boarder loginform">
                <h2 className="text-center">Login</h2>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label classname="form-label">Email</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                placeholder="Enter Email"
                                value={email}
                                onChange={(e)=>setEmail(e.target.value)}>
                            </input>
                        </div>
                        <div className="form-group">
                            <label classname="form-label">Password</label>
                            <input 
                                type="password" 
                                className="form-control" 
                                placeholder="Enter Password"
                                value={password}
                                onChange={(e)=>setPassword(e.target.value)}>
                            </input>
                        </div>
                        <br></br>
                        <div className='d-grid'>
                            <button type="submit" className="btn btn-primary" onClick={login} >Login</button>
                        </div >
                        <br></br>
                        <div className="text-center">
                            Don't have an Account?
                            &nbsp;
                            <Link to="/Registration" >Sign Up</Link>
                        </div>
                    </form>
 
                </div>
            </div>
        </div>
        </div>
     </div>
    );
  }
  
  export default Login;
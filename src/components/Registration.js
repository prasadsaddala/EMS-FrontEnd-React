import React, {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom';
import axios from "axios";

function Registration(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
 
    async function save(event) {
        event.preventDefault();
        try {
          await axios.post("http://localhost:8080/api/register/save", {
          name: name,
          email: email,
          password: password,
          });
          alert("Employee Registation Successfully");
 
        } catch (err) {
          alert(err);
        }
        navigate('/Login');
      }



    return(
        <div>
            <div className="container mt-4">
                <div className="row justify-context-center">
                    <div className="card col-md-4 offset-md-3 offset-md-3 w-40 boarder loginform">
                        <h2 className="text-center">Sign Up</h2>
                        <div className="card-body">
                            <form>
                                <div className="form-group">
                                    <label classname="form-label">Name</label>
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Enter Name"
                                        value={name}
                                        onChange={(e)=>setName(e.target.value)}>
                                    </input>
                                </div>
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
                                    <button type="submit" className="btn btn-primary" onClick={save} >Sign Up</button>
                                </div>
                                <br></br>
                                <div className="text-center">
                                    Already have an Account?
                                    &nbsp;
                                    <Link to="/Login" >Login</Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;
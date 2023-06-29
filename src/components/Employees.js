import React, {Fragment, useState, useEffect} from 'react';
import {Button, Table} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeService from '../services/EmployeeService';
import {Link} from 'react-router-dom'


function Employees(){

    const [employees, setEmployees]=useState([])

    useEffect(() => {

        getAllEmployees();

    }, [])
    const getAllEmployees =()=>{

        EmployeeService.getAllEmployees().then((response)=>{
            setEmployees(response.data);
            console.log(response)
        }).catch(error =>
            console.log(error));

    }
    const deleteEmployee=(e, id)=>{
        e.preventDefault();
        EmployeeService.deleteEmployee(id).then( getAllEmployees()).catch(e=>console.log(e));
    }
    return(
        <Fragment>
            <div style={{margin:"10rem"}}>
            <div className="row">
                    <div className="card col-md-10 offset-md-3 offset-md-3">
                    <div className="text-center"><h2>All Employee List</h2> </div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        
                                <th>Name</th>
                                <th>Gender</th>
                                <th>DOB</th>
                                <th>Salary </th>
                                <th>Department</th>
                                <th></th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                            employees.map(
                                    employee =>
                                    <tr id={employee.id}>
                                        <td>{employee.empName}</td>
                                        <td>{employee.sex}</td>
                                        <td>{employee.dob}</td>
                                        <td>{employee.salary}</td>
                                        <td>{employee.department}</td>
                                        <td>
                                            <Link className="btn btn-info" to={`/add-employee/${employee.id}`}>Edit</Link>
                                            &nbsp;
                                            <Button className="btn btn-danger" onClick={(e) => deleteEmployee(e, employee.id)}
                                            style={{marginLeft:"10px"}}>Delete</Button>
                                        </td>
                                    </tr>
                                )
                            
                       }
                        
                    </tbody>
                </Table>
                <br>
                </br>
                <Link clasName="btn btn=primary mb-2" to="/add-employee">
                    <Button size="sm">Add Employee</Button>
                </Link>
                <br></br>
            </div>
            </div>
            </div>
        </Fragment>
    )

}

export default Employees;
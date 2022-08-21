import React,{Component} from 'react'
import employees from './data'
class Employee extends Component{
    constructor(props){
    super(props)
    this.state={
        employees:employees
    }
}
render(){
    return <div className="container">
        <pre>{JSON.stringify(this.state.employees)}</pre>
        <div className="row">
            <div className="col-md-8">
                <div className=" table table-hover">
                  <thead className="bg-dark text-white">
                  <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Gender</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{this.state.id}</td>
                            <td>{this.state.name}</td>
                            <td>{this.state.email}</td>
                            <td>{this.state.gender}</td>
                        </tr>
                    </tbody>
                </div>

            </div>
        </div>
    </div>
}
}
export default Employee
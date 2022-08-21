import React, {Component} from 'react'
class Form extends Component{
    constructor(props){
        super(props);
this.state={
            Name:"",
            Role:"",
            Age:""
        }
    }
        nameHandler=(event)=>{
            this.setState({Name:event.target.value})
        }
        roleHandler=(event)=>{
            this.setState({Role:event.target.value})
        }
        ageHandler=(event)=>{
            this.setState({Age:event.target.value})
        }
        submitHandler = (event) => {
            event.preventDefault()
            console.log(this.state)
        }
        render(){
            return <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <div className=" table table-hover">
                        <div className="card">
                        <pre>{JSON.stringify(this.state)}</pre>
                            <div className="card-header">
                               
                            </div>
                            <div className="card-body">
                           
                            <div >
                                    <input placeholder="Name" type="text"   onChange={this.nameHandler}/>
                                </div>
                                <div>
                                    <input placeholder="Role" type="text"   onChange={this.roleHandler}/>
                                </div>
                                <div >
                                    <input placeholder="Age" type="number"  onChange={this.ageHandler}/>
                                </div><br/>
                                <input type="submit" className="btn btn-success" value="Submit" />
                               
                            </div>
                        </div>
                        
                        
                    <thead className="bg-dark text-white">
                        <th>SLNO</th>
                        <th>NAME</th>
                        <th>ROLE</th>
                        <th>AGE</th>
                       
                    </thead>
                         <tbody>
                            <tr>
                                <td>{this.state.SLNO}</td>
                                <td>{this.state.NAME} </td>
                                <td>{this.state.ROLE} </td>
                                <td>{this.state.AGE}</td>
                                
                            </tr>
                            <tr>
      <th scope="row"></th>
                               <td>{this.state.SLNO}</td>
                                <td>{this.state.NAME} </td>
                                <td>{this.state.ROLE} </td>
                                <td>{this.state.AGE}</td>
                                
    </tr>
    <tr>
      <th scope="row"></th>
      <td></td>
      <td></td>
      <td></td>
    </tr>
                         </tbody>
                    </div>
                    </div>
            </div>
           
        
                    <button type="button" class="btn btn-primary">Primary</button>
<button type="button" class="btn btn-secondary">Secondary</button>
<button type="button" class="btn btn-success">Success</button>
<button type="button" class="btn btn-danger">Danger</button>

              
       
</div>  
                    
          }
        }
        
            export default Form
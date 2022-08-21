import React,{Component} from "react"
class Form extends Component{
    constructor(props){
        super(props)
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
    render() {
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    
                        <pre>{JSON.stringify(this.state)}</pre>
                        </div>
                        
                          
                                <div className="form-group">
                                    <input type="text" className="form-control" onChange={this.nameHandler}  />
                                </div><br/>
                                <div className="form-group">
                                    <input  type="text" className="form-control" onChange={this.roleHandler} />
                                </div><br/>
                                <div className="form-group">
                                    <input  type="number" className="form-control" onChange={this.ageHandler} />
                                </div><br/>
                                <input type="submit" className="btn btn-success" value="submit" /><br/>
                           
                        </div>
                    </div>
                
        
    }

}
export default Form


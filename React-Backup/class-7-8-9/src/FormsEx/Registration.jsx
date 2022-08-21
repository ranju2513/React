import React,{Component} from "react"
class Registration extends Component{
    constructor(props){
        super(props)
        this.state={
            e_Name:"",
            e_Email:"",
            e_Mobile:""
        }
    }
    updateHandler=(event)=>{
        this.setState({[event.target.name]:event.target.value})
  }
  submitHandler=(event)=>{
    event.preventDefault()
    console.log(this.state)
  }
    render(){
        return <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h3>Registration Details</h3>
                        </div>
                            <div className="card-body">
                            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
                <div className="form-group">
           
            <input placeholder=" User Name" type="text" onChange={this.updateHandler} name="e_Name"/>
            </div>
            <div className="form-group">
           
            <input placeholder="Email" type="email" onChange={this.updateHandler} name="e_Email"/>
            </div>
            <div className="form-group">
            
            <input placeholder="Number" type="number" onChange={this.updateHandler} name="e_Mobile" />
            </div>
            <input type="submit" value="Registration " />
            </form>


                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    
    }
        

}
export default Registration
import React, { Component } from 'react'

class Registration extends Component {
    constructor(props) {
        super(props);
        this.state = {
            e_Name: "",
            e_Email: "",
            e_Mobile: ""
        }
    }
    nameHandler=(event)=>{
        this.setState({e_Name:event.target.value})
    }
    emailHandler=(event)=>{
        this.setState({e_Email:event.target.value})
    }
    mobileHandler=(event)=>{
        this.setState({e_Mobile:event.target.value})
    }
    
    submitHandler = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() {
        return(
        
        <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <form onSubmit={this.submitHandler}>
            <label>user name</label>
            <input type="text" onChange={this.nameHandler}/><br/>
            <label>Email</label>
            <input type="email" onChange={this.emailHandler}/><br/>
            <label>Mobile</label>
            <input type="number" onChange={this.mobileHandler}/><br/>
            <input type="submit"  className="btn btn-success" value="Registration"/>
            </form>
        </div>
       
       
       )        
                            
}
}
export default Registration
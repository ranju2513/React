import React,{Componenet} from 'react'
import Axios from 'axios'
class Users extends Componenet{
    constructor(props){
        super(props)
        console.log("First Constructor - will execute")
        this.state={
        users:[]
    }
}
getUserData=()=>{
    Axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
        console.log(response.data)
            this.setState({users:response.data})
        }).catch(() => { })
    }

render(){
    console.log("Second -Render Method")
    return (
        <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <button onClick={this.getUserData}>Get Data</button>
        </div>
    )

}


}
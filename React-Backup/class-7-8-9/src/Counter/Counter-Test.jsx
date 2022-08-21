import React from 'react'
class Counter extends React.Component {
    state={
        qty:1,


    }
    decrHandler=()=>{
    this.setState({qty: this.state.qty -1})
}
    incrHandler=()=>{
        this.setState({qty: this.state.qty +1})
    }
    render(){
        return<div>
            <h1>Counter Example</h1>
            <>&nbsp;&nbsp;</>
            <button onclick={this.decrHandler}>-</button>
            <span>QTY:{this.state.qty}</span>
            <button onclick={this.incrHandler}>+</button>
        </div>
    }

}
export default Counter



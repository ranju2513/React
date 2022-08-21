import React  from "react"
class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            Name: "Freedom Refined Sunflower Oil",
            price: 169,
            qty: 1,
            image: 'https://rukminim1.flixcart.com/image/280/280/jwkzwy80/fmcg-combo/k/y/f/rozana-gold-basmati-5-kg-with-freedom-sunflower-oil-1-l-daawat-original-imafh43xzuwfethy.jpeg?q=70',
    
        }
    }
    incrHandler=()=>{
        this.setState({qty:this.state.qty +1})
    }
    decrHandler=()=>{
        this.setState({qty: this.state.qty -1})

    }
    render(){
        return<div classname="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <div className=" table table-hover">
                    <thead className="bg-dark text-white">
                        <th>Name</th>
                        <th>image</th>
                        <th>price</th>
                        <th>qty</th>
                        <th>total</th>
                    </thead>
                         <tbody>
                            <tr>
                                <td>{this.state.Name}</td>
                                <td><img src={this.state.image}height="80px" alt="Buy Oil Packet" /></td>
                                <td>{this.state.price}</td>
                                <td><i className="fa fa-minus-circle" onClick={this.decrHandler}></i>{this.state.qty}<i onClick={this.incrHandler} className="fa fa-plus-square"></i></td>
                                <td>{this.state.qty * this.state.price}</td>
                            </tr>
                         </tbody>
                    </div>

                </div>
            </div>
        </div>
    }

}
export default Counter


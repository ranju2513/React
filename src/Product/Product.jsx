import React,{Component} from 'react'
class Product extends Component{
    constructor(props){
    super(props)
    this.state={
        p_name:"vivo",
        p_image:"https://cdn1.smartprix.com/rx-iz3nnCfxy-w1200-h1200/z3nnCfxy.jpg",
        p_Price:15000,
        p_QTY:1

    }
}
render(){
    return <div className="container">
        <div className="row">
            <div className="col-md-8">
                <table>
                    <th></th>
                    <tbody>
                        <tr>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
}

}
   
import React from 'react'
/*import Message from './Message/Message'*/
/*import Counter from './Counter/Counter'*/
/*import Employee from './Employee/Employee'*/
/*import Navbar from './Navbar/Navbar'*/
/*import Salary from './Salary/Salary'*/
import Registration from './FormsEx/Registration'
/*import Form from './Form/Form'*/

class App extends React.Component {
    render() {
        return <div>
            {/*<Navbar />*/}
            <h1>Registration Form</h1>
            <hr />
            <Registration/>

           {/* <Salary />*/}
            
             {/*  <Employee /> */}
            {/* <Counter /> */}
           
        </div>
    }
}
export default App
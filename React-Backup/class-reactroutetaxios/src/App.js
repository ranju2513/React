import React, { Fragment } from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Service from './Components/Service'
import Users from './Users/Users'
import { Link, BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = () => {
    return <Fragment>
        <Router>
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/about">React Router Example</Link>
                <div className="ml-auto">
                    <ul className="navbar-nav">
                        <li className="nav-list"><Link className="nav-link" to="/service">Service</Link></li>
                        <li className="nav-list"><Link className="nav-link" to="/home">Home</Link></li>
                    </ul>
                </div>
            </nav>
            <Routes>
                <Route path="/about" component={About} />
                <Route path="/service" component={Service} />
                <Route path="/home" component={Home} />

            </Routes>
        </Router>
    </Fragment>
}

export default App

import React,{ Component} from 'react'
import Navbar from './Navbar/Navbar'
import ContactApp from './ContactApp/ContactApp'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
class App extends Component {
    render() {
        return <React.Fragment>
            <Router>
                <Navbar />
                <Routes>
                    <Route path="/contacts" element={<ContactApp />} />
                </Routes>
            </Router>
        </React.Fragment>
    }
}

export default App
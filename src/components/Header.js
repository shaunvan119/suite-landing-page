import logo from '../assets/logo.svg'
import {Link} from "react-router-dom"


function Header() {
    
    return (
        <header className="top-header">
            <img src={logo} alt="Logo" className="suite--logo" />   
            <Link to="/contact"><button className="call-button">Request Beta Access</button></Link>
        </header>
    )
}

export default Header
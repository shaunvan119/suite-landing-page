import logo from '../assets/logo.svg'


function Header() {
    
    return (
        <header className="top-header">
            <img src={logo} alt="Logo" className="suite--logo" />   
            <button className="call-button">Request Beta Access</button>
        </header>
    )
}

export default Header
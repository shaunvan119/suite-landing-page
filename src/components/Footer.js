import logo from '../assets/logo.svg'


function Footer() {
    
    return (
        <footer className="top-header">
            <img src={logo} alt="Logo" className="suite--logo" /> 
            <p className='copyright'>Copyright - Suite</p>  
        </footer>
    )
}

export default Footer
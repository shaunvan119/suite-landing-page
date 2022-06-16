import curve from '../assets/curved.svg'
import phone from '../assets/phone.png'



function MainTop() {
   
    return (
        <div className="main-top">
          <div className="main-left">
            <img src={curve} alt="Logo" className="curve" />
            <h1 className="main-top-heading">A super solution<br/>for your business.</h1>
            <p className="main-top-p">Our marketing and sales automations<br/> 
                help you scale your outreach to get<br/>
                more leads for your company. </p>
            <button className="main-top-button">Request Beta Access</button>
            </div>
            <div className='main-right'>
            <img src={phone} alt="Logo" className="phone" />
            </div>
     
        
        </div>


        
    )
    
}

export default MainTop
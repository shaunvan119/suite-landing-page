import jeremy from '../assets/jeremy-large.png'
import blur from '../assets/pattern-blur.svg'
import curved from '../assets/curved-line-2.svg'
import jeremyTwo from '../assets/jeremy-small.png'

function MainBottom() {
   
    return (
        <div className="main-bottom">
            <div className="jeremy-img">
            <img src={jeremy} alt="pick-of-person" className="jeremy" />
            <img src={jeremyTwo} alt="pick-of-person" className="jeremyTwo" />
            <img src={blur} alt="blur" className="blur" />
            </div>
            <div className="jeremy-testimonial">
            <img src={curved} alt="curve-line" className="curved-line" />
                <h1 className='it-just'>It just <span className='works'>works.</span></h1>
                <p className='jeremy-paragraph'>“I really like how it is an all-in-one
                <br/> solution that handle many of the<br/>
                tasks that you would normally need<br/>
                separate tools to do the same job.<br/>
                This thing is a miracle worker.”</p>
                <h3 className='jeremy-name-bottom'>JEREMY ROBINSON</h3>
                <p className='bottom-sig'>CMO, FYLO</p>
            </div>
          
     
        
        </div>


        
    )
    
}

export default MainBottom
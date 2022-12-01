import LogoIcon from '../assets/nexum_logo.png'

const Footerland = () => {
    return (   <>
        <div className="classFooter">
            <div className="ft1">
                <div><h3>Contact Nexum</h3></div><br />
                    <div className='paraStyle-landing'>
                        <div>We're here to help and answer any questions you<br />
                            might have. We look forward to hearing from you.
                        </div>
                    </div>
            </div>

            <div className='form-area-landing' >
                <div >
                    <form className='contactus-landing'>
                        <fieldset>
                            <legend>First Name*</legend>
                            <input type="text" />
                        </fieldset>
                        <fieldset>
                            <legend>Last Name*</legend>
                            <input type="text" />
                        </fieldset>
            
                        <fieldset className='landing-email'>
                            <legend>Email*</legend>
                            <input type="email" />
                        </fieldset>
                        <fieldset className='landing-email'>
                            <legend>Message:</legend>
                            <textarea rows="4" ></textarea>
            
                        </fieldset>
                    <div className='button-landing'>
                    <button  className='contactus-landing-button' > Submit</button>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        <div className="hr">
            
            <img className="footerImg" src={LogoIcon} alt="logo"/>
        </div>
        </>
    );
}
 
export default Footerland;

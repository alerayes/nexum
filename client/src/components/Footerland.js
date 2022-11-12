import LogoIcon from '../assets/nexum_logo.png'

const Footerland = () => {
    return (   <>
        <div className="classFooter">
            <div className="ft1">
                <div><h3>Contact Nexum</h3></div><br />
                    <div>
                        <div>We're here to help and answer any questions you<br />
                            might have. We look forward to hearing from you.
                        </div>
                    </div>
            </div>

            <div className="footerForm">
                <div className="whiteBg">
                    <form>
                    <fieldset>
                        <legend>First name*</legend>
                    </fieldset>

                    <fieldset>
                        <legend>Last name*</legend>
                    </fieldset>

                    <fieldset>
                        <legend>Email*</legend>
                    </fieldset>
                    
                    <input type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
        <div className="hr">
            <hr />
            <img className="footerImg" src={LogoIcon} />
        </div>
        </>
    );
}
 
export default Footerland;
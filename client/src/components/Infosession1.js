import ft2Pic from '../assets/2.png'
import ft3Pic from '../assets/3.png'
import ft4Pic from '../assets/4.png'


const Infosession1 = () => {
    return (   <>
        <div className="column">
            
            <div className="forMain">
                <div className="columnFt1">
                    <h2>Manage Students and Alumni</h2>
                    <div>
                        Brief description about feature 1. Lorem ipsum dolor sit amet<br /> 
                        consectetur adipisicing elit. Non corporis, omnis natus,<br /> 
                        excepturi iusto iste aliquid obcaecati nemo ab eveniet ut<br /> 
                        rerum porro sit molestiae cum fugiat? Iste, ratione<br /> 
                        aspernatur?.
                    </div>
                </div>

                <div className="columnFt1Photo">
                    {/* <img src="" alt="Feature 1" /> */}
                    <img className="ft1Pic" src={ft2Pic} />
                    
                </div>

                <div className="columnFt2Photo">
                    <img className="ft1Pic" src={ft3Pic} />
                </div>
                
                <div className="columnFt2">
                    <h2>Connecting Building</h2>
                    <div>
                        Brief description about feature 1. Lorem ipsum dolor sit amet<br /> 
                        consectetur adipisicing elit. Non corporis, omnis natus,<br /> 
                        excepturi iusto iste aliquid obcaecati nemo ab eveniet ut<br /> 
                        rerum porro sit molestiae cum fugiat? Iste, ratione<br /> 
                        aspernatur?.
                    </div>
                </div>

                <div className="columnFt3">
                    <h2>Find and Share jobs</h2>
                    <div>
                        Brief description about feature 1. Lorem ipsum dolor sit amet<br /> 
                        consectetur adipisicing elit. Non corporis, omnis natus,<br /> 
                        excepturi iusto iste aliquid obcaecati nemo ab eveniet ut<br /> 
                        rerum porro sit molestiae cum fugiat? Iste, ratione<br /> 
                        aspernatur?.
                    </div>
                </div>

                <div className="columnFt3Photo">
                    <img className="ft1Pic" src={ft4Pic} />
                </div>
            </div>
        </div>
        </>
    );
}
 
export default Infosession1;

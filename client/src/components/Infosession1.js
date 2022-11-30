import ft2Pic from "../assets/2.png";
import ft3Pic from "../assets/3.png";
import ft4Pic from "../assets/4.png";

const Infosession1 = () => {
    return (   <>
        <div className="column">
            
            <div className="forMain">
                <div className="columnFt1">
                    <h2>Manage Students and Alumni</h2>
                    <div>
                        <p>
                        Our SaaS application allows institution administrators to <br/>
                         track and manage students and alumni.
                        Admins are provided an <br/> intuitive way to access information in list and graphical formats. <br/>The UI
                        is focused on providing simplicity and functional
                        behavior.
                        </p>
                        {/* Brief description about feature 1. Lorem ipsum dolor sit amet<br /> 
                        consectetur adipisicing elit. Non corporis, omnis natus,<br /> 
                        excepturi iusto iste aliquid obcaecati nemo ab eveniet ut<br /> 
                        rerum porro sit molestiae cum fugiat? Iste, ratione<br /> 
                        aspernatur?. */}
                    </div>
                </div>

          <div className="columnFt1Photo">
            {/* <img src="" alt="Feature 1" /> */}
            <img className="ft1Pic" src={ft2Pic} alt="landing avatar" />
          </div>

                <div className="columnFt2Photo">
                    <img className="columnFt2Photo" src={ft3Pic} alt="landing avatar" />
                </div>
                
                <div className="columnFt2">
                    <h2>Networking</h2>
                        <p>
                        Enhancing communication between students <br/>
                        and alumni is the core of our application. <br/>
                        Everything we have built revolves around improving the<br/> interaction of students with other 
                        students, alumni and job <br/>opportunities that 
                        are shared within a private community of the <br/>
                        institution.
                        </p>
                    {/* <div>
                        Brief description about feature 1. Lorem ipsum dolor sit amet<br /> 
                        consectetur adipisicing elit. Non corporis, omnis natus,<br /> 
                        excepturi iusto iste aliquid obcaecati nemo ab eveniet ut<br /> 
                        rerum porro sit molestiae cum fugiat? Iste, ratione<br /> 
                        aspernatur?.
                    </div> */}
                </div>

                <div className="columnFt3">
                    <h2>Find and Share jobs</h2>
                    <p>
                    Our application tries to make it easier for
                    students <br/>by sharing  exclusive community job
                    oppportunities that <br/>are visible to the students
                    and alumnis of the instituition. These <br/> job
                    listings make it easier and more comfortable
                    for students <br/>as they try to fnd a job in their
                    industry.
                    </p>
                    {/* <div>
                        Brief description about feature 1. Lorem ipsum dolor sit amet<br /> 
                        consectetur adipisicing elit. Non corporis, omnis natus,<br /> 
                        excepturi iusto iste aliquid obcaecati nemo ab eveniet ut<br /> 
                        rerum porro sit molestiae cum fugiat? Iste, ratione<br /> 
                        aspernatur?.
                    </div> */}
                </div>

          <div className="columnFt3Photo">
            <img className="ft1Pic" src={ft4Pic} alt="landing avatar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Infosession1;

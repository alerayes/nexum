import ft2Pic from "../assets/2.png";
import ft3Pic from "../assets/3.png";
import ft4Pic from "../assets/4.png";

const Infosession1 = () => {
  return (
    <>
      <div className="column">
        <div className="forMain">
          <div className="columnFt1">
            <h2>Manage Students and Alumni</h2>
            <p>
              Our SaaS application allows institution adminis- trators to track
              and manage students and alumni. Admins are provided an intuitive
              way to access information in list and graphical formats. The UI is
              focused on providing simplicity and functional behavior.
            </p>
          </div>

          <div className="columnFt1Photo">
            {/* <img src="" alt="Feature 1" /> */}
            <img className="ft1Pic" src={ft2Pic} alt="landing avatar" />
          </div>

          <div className="columnFt2Photo">
            <img className="columnFt2Photo" src={ft3Pic} alt="landing avatar" />
          </div>

          <div className="columnFt2">
            <h2>Connecting Building</h2>
            <p>
              Enhancing communication between students and alumni is the core of
              our application. Everything we have built revolves around im-
              proving the interaction of students with other students, alumni
              and job opportunities that are shared within a private community
              of the institution.
            </p>
          </div>

          <div className="columnFt3">
            <h2>Find and Share jobs</h2>
            <p>
              Our application tries to make it easier for students by sharing
              exclusive community job oppportunities that are visible to the
              students and alumnis of the instituition. These job listings make
              it easier and more comfortable for students as they try to find a
              job in their industry.
            </p>
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

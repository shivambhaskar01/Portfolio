import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              Shivam
              <br />
              <span>Bhaskar</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>DevSecOps ⋅ SRE ⋅ Platform</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Manager</div>
              <div className="landing-h2-2">Engineer</div>
              
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">Manager</div>
            </h2>
          </div>
          {/* {/* <div className="landing-info">
            <div className="landing-title-container">
              <div className="landing-title">DevSecOps</div>
              <div className="landing-title">SRE</div>
              <div className="landing-title">Platform Engineering</div>
            </div>

            <h3 className="landing-manager">Manager</h3>
          </div>  */}
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;

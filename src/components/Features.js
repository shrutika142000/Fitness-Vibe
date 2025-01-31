import React from "react";
import { FaDumbbell, FaRunning, FaHeartbeat, FaBicycle } from "react-icons/fa";
import "../styles/Features.css";

const Features = () => {
  return (
    <section id="features" className="features-section">
      <div className="container">
        <h2 className="section-title">Our Features</h2>
        <div className="row">
          <div className="col-lg-3 col-md-6 text-center">
            <FaDumbbell className="feature-icon" />
            <h4>Weight Lifting</h4>
            <p>
              Build your strength and muscle mass with our specialized
              equipment.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <FaRunning className="feature-icon" />
            <h4>Cardio Exercise</h4>
            <p>
              Enhance your stamina and heart health with intense cardio
              workouts.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <FaHeartbeat className="feature-icon" />
            <h4>Flex Your Muscle</h4>
            <p>
              Engage in muscle flexing routines to improve posture and
              performance.
            </p>
          </div>
          <div className="col-lg-3 col-md-6 text-center">
            <FaBicycle className="feature-icon" />
            <h4>Specific Muscle Training</h4>
            <p>Target specific muscle groups with focused training sessions.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;

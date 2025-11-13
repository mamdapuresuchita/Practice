import React, { useState, useContext } from "react";
import ThemeContext from "../Context/ThemeContext";
// import "./AboutSection.css"; // add a simple CSS file for fade effect

const Bio = () => {
  const [activeTab, setActiveTab] = useState("about");
  const { darkMode } = useContext(ThemeContext);

  const sectionStyle = {
    background: darkMode
      ? "linear-gradient(180deg, #0f2027, #203a43, #2c5364)"
      : "linear-gradient(160deg, #f5f7fa, #71a2f0ff)",
    color: darkMode ? "white" : "black",
    minHeight: "90vh",
    transition: "background 0.6s ease, color 0.3s ease",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    width:"60%",
  };

  return (
    <section style={sectionStyle} className="border  rounded-4 mx-auto">
      <h2 className="mb-4 text-center fw-bold">About Dr. A.P.J. Abdul Kalam</h2>

      {/* Buttons */}
      <div className="btn-group mb-4">
        <button
          className={`btn ${activeTab === "about" ? "btn-warning" : "btn-outline-warning"}`}
          onClick={() => setActiveTab("about")}
        >
          About
        </button>
        <button
          className={`btn ${activeTab === "education" ? "btn-warning" : "btn-outline-warning"}`}
          onClick={() => setActiveTab("education")}
        >
          Education
        </button>
        <button
          className={`btn ${activeTab === "career" ? "btn-warning" : "btn-outline-warning"}`}
          onClick={() => setActiveTab("career")}
        >
           Profession
        </button>
      </div>

      {/* Content */}
      <div className="fade-content text-center" style={{ maxWidth: "700px" }}>
        {activeTab === "about" && (
          <div className="fade-in">
            <h4>Full Name:</h4>
            <p>Avul Pakir Jainulabdeen Abdul Kalam</p>
            <p><strong>Born:</strong> October 15, 1931, Rameswaram, Tamil Nadu, India</p>
            <p><strong>Died:</strong> July 27, 2015, Shillong, Meghalaya, India</p>
            <p><strong>Nicknames:</strong> “Missile Man of India”, “People’s President”</p>
            <p className="mt-3 fw-bolder">
              Dr. Kalam rose from humble beginnings to become one of India’s most beloved leaders.
              His pioneering work in missile and space programs earned him the title “Missile Man of India.”
              As President, he inspired millions with his simplicity and devotion to youth and education.
            </p>
          </div>
        )}

        {activeTab === "education" && (
          <div className="fade-in">
            <h4>Education</h4>
            <ul className="list-unstyled mt-3">
              <li><strong>Schooling:</strong> Schwartz Higher Secondary School, Ramanathapuram</li>
              <li><strong>Graduation:</strong> St. Joseph’s College, Tiruchirappalli (Physics, 1954)</li>
              <li><strong>Engineering:</strong> Madras Institute of Technology (MIT), Chennai – Aeronautical Engineering</li>
            </ul>
          </div>
        )}

        {activeTab === "career" && (
          <div className="fade-in">
            <h4>Professional Life</h4>
            <ul><li className="fw-bolder mt-4">Dr. Kalam joined DRDO in 1958 and later ISRO, where he led India’s first Satellite Launch Vehicle (SLV-III).
              He played a crucial role in developing the Agni and Prithvi missiles, shaping India’s defense technology.
            </li>
            <li className="fw-bolder mt-4"> As the 11th President (2002–2007), he was known as the “People’s President,” inspiring youth to dream and innovate for a better India.
            </li></ul>
          
          </div>
        )}
      </div>
    </section>
  );
};

export default Bio;

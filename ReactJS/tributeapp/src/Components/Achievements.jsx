import React, { useContext } from "react";
import ThemeContext from "../Context/ThemeContext";

const Achievements = () => {
  const { darkMode } = useContext(ThemeContext);

  const achievements = [
    { year: "1981", title: "Padma Bhushan Award" },
    { year: "1990", title: "Padma Vibhushan Award" },
    { year: "1997", title: "Bharat Ratna — India’s highest civilian award" },
    { year: "1999", title: "Published *Wings of Fire*, his autobiography" },
    { year: "2002–2007", title: "Served as the 11th President of India" },
    { year: "2015", title: "Passed away while delivering a lecture at IIM Shillong" },
    { year: "2021", title: "Birthday (Oct 15) declared World Students’ Day by the United Nations" },
  ];

  return (
    <section
      className="achievements-section text-center py-5"
      style={{
        background: darkMode
          ? "linear-gradient(180deg, #0f2027, #203a43, #2c5364)"
          : "linear-gradient(120deg, #accbfbff, #c7daf7ff)",
        color: darkMode ? "white" : "black",
      }}
    >
      <div className="container">
        <h2 className="fw-bold mb-5"> Major Achievements</h2>

        <div className="row justify-content-center">
          {achievements.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-4">
              <div
                className="achievement-card p-4 rounded-4 shadow-sm h-100"
                style={{
                  background: darkMode
                    ? "linear-gradient(135deg, #243b55, #141e30)"
                    : "linear-gradient(135deg, #e0eafc, #cfdef3)",
                  color: darkMode ? "#fff" : "#000",
                  border: darkMode ? "1px solid #fbc531" : "1px solid #aaa",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                <h4 className="fw-bold">{item.year}</h4>
                <p className="mt-3">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

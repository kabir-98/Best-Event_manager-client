import React from "react";
import eventImg from "../../../images/event.jpeg";

const HeaderMain = () => {
  const btnDesign = {
    fontSize: "20px",
    backgroundImage: "linear-gradient(90deg, #19D3AF, #0FCFEA)",
    border: "none",
    padding: "15px 30px",
    color: "white",
    borderRadius: "10px",
  };
  const textColor2 = { color: "#b4b5b5" };
  const headingColor = { color: "#3A4256" };
  const textColor = { color: "#3A3056" };
  return (
    <main className="bg-light pb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 pb-5">
            <div className="pt-5">
              <h1 className="pb-5" style={headingColor}>
                Let us <br /> arrange your events
              </h1>
              <p className="pb-5" style={textColor}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa
                ullam magnam assumenda asperiores in tempore, commodi natus.
                Accusantium quas culpa perferendis dicta maiores commodi,
                quisquam sunt ducimus consequuntur id ratione.
              </p>
              <button style={btnDesign}>Book Now</button>
            </div>
          </div>
          <div className="col-md-6">
            <img src={eventImg} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeaderMain;

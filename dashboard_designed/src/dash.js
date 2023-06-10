import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./dash.css";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const MulticolorButton = styled.button`
  background: linear-gradient(to right, red, plum, green);
  border: none;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 10px;
  cursor: pointer;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;
const myclass = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100%"
};
const Feature = ({ title, text, data }) => {
  return (
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
      <div className="feature-content">
        <div className="feature-title">{title}</div>
        <div className="feature-text">{text}</div>
        <div className="feature-link">{data}</div>
        {/* <div className="feature-link">{users}</div> */}
      </div>
    </div>
  );
};
const Dash = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <Container>
        <h2 className="pb-2 border-bottom">Admin Dashboard</h2>
        <MulticolorButton>Click me!</MulticolorButton>
      </Container>
      <div
        style={myclass}
        className=" field row g-4 py-5 row-cols-1 row-cols-lg-3 "
      >
        <div className="cont Box1">
          <Feature title="Medical Needs" text="Count: 1" data="Solved?" />
        </div>

        <div className="cont Box2">
          <Feature
            style={{ backgroundColor: "#264653" }}
            title="Identification Needs"
            text="Count: 1"
            data="Solved?"
          />
        </div>

        <div className="cont Box3">
          <Feature
            style={{ backgroundColor: "#E9C46A" }}
            title="Employment Needs"
            text="Count: 1"
            data="Solved?"
          />
        </div>

        <div className="cont Box4">
          <Feature
            style={{ backgroundColor: "#d62828" }}
            title="Emergency Needs"
            text="Count: 1"
            data="Solved?"
          />
        </div>

        <div className="cont Box5">
          <Feature
            style={{ backgroundColor: "#F4A261" }}
            title="Sponsorship Needs"
            text="Count: 1"
            data="Solved?"
          />
        </div>

        <div className="cont Box6">
          <Feature
            style={{ backgroundColor: "#E76F51 !important" }}
            title="Upcoming Birthdays"
            text="Count: 1"
            data="Solved?"
          />
        </div>
      </div>
    </div>
  );
};

export default Dash;

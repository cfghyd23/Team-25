
import React, { useEffect, useState } from 'react';

import "bootstrap/dist/css/bootstrap.css";
import "./dash.css";
import styled from "styled-components";
import dbData from "./db.json";
console.log(dbData);
var usersData = dbData["users"];
// Function to calculate the medical needs count
const calculateMedicalNeedsCount = () => {
  let count = 0;
  usersData.forEach((user) => {
    count += user['medical history'];
  });

  return count;
};

// const data = [
//   {
//     "_id": {
//       "$oid": "648496e3673f1994d8c2eea4"
//     },
//     "medical history": 20,
//     "id": 0,
//     "housing": 1,
//     "sponsorship": 1
//   },
//  
// ];

const medicalNeedsCount = calculateMedicalNeedsCount(dbData);
// console.log(medicalNeedsCount);

// const medicalNeedsCount = dbData.reduce(
//   (count, item) => (item['medical history'] ? count + 1 : count),0);
// console.log(medicalNeedsCount);

// const medicalHistoryCount = dbData.reduce((count, obj) => {
//   if (obj.hasOwnProperty("medical history")) {
//     return count + obj["medical history"];
//   }
//   return count;
// }, 0);

// console.log("Medical History Count:", medicalHistoryCount);



// const [medicalHistoryCount, setMedicalHistoryCount] = useState(0);
// useEffect(() => {
//   fetch('http://localhost:8000/users')
//     .then((response) => response.json())
//     .then((data) => {
//       // Calculate the count of medical history
//       const count = data.reduce((total, item) => total + item['medical history'], 0);
//       setMedicalHistoryCount(count);
//     })
//     .catch((error) => {
//       console.error('Error fetching data:', error);
//     })
// }, []);
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

        {/* <div className="cont Box1">
          <Feature title="Medical Needs" text="Count:  ${medicalNeedsCount}" data="Solved?" />
        </div> */}
        <div className="cont Box1">
        <Feature
        title="Medical Needs"
        text={`Count: ${medicalNeedsCount}`}
        data="Solve"
        />
</div>


        <div className="cont Box2">
          <Feature
            style={{ backgroundColor: "#264653" }}
            title="Identification Needs"
            text="Count: 2"
            data="Solve"
          />
        </div>

        <div className="cont Box3">
          <Feature
            style={{ backgroundColor: "#E9C46A" }}
            title="Employment Needs"
            text="Count: 3"
            data="Solve"
          />
        </div>

        <div className="cont Box4">
          <Feature
            style={{ backgroundColor: "#d62828" }}
            title="Emergency Needs"
            text="Count: 6"
            data="Solve"
          />
        </div>

        <div className="cont Box5">
          <Feature
            style={{ backgroundColor: "#F4A261" }}
            title="Sponsorship Needs"
            text="Count: 5"
            data="Solve"
          />
        </div>

        <div className="cont Box6">
          <Feature
            style={{ backgroundColor: "#E76F51 !important" }}
            title="Upcoming Birthdays"
            text="Count: 1"
            data="Solve"
          />
        </div>
      </div>
    </div>
  );
};

export default Dash;
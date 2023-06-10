import React from "react";
import "bootstrap/dist/css/bootstrap.css";
const Feature = ({ title, text, data }) => {
  return (
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3"></div>
      <div className="feature-content">
        <div className="feature-title">{title}</div>
        <div className="feature-text">{text}</div>
        <div className="feature-link">{data}</div>
      </div>
    </div>
  );
};
const Dash = () => {
  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Columns with icons</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
        <Feature title="Featured title 1" text="Paragraph 1" data="data 1" />
        <Feature title="Featured title 1" text="Paragraph 1" data="data 1" />
        <Feature title="Featured title 1" text="Paragraph 1" data="data 1" />
        {/* Repeat the above Feature component with different props */}
        <Feature title="Featured title 1" text="Paragraph 1" data="data 1" />
        <Feature title="Featured title 1" text="Paragraph 1" data="data 1" />
        <Feature title="Featured title 1" text="Paragraph 1" data="data 1" />
        {/* Repeat the above Feature component with different props */}
        <Feature title="Featured title 1" text="Paragraph 1" data="data 1" />
        <Feature title="Featured title 1" text="Paragraph 1" data="data 1" />
      </div>
    </div>
  );
};

export default Dash;
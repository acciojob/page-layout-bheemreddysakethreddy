import React from "react";

const PageLayout = ({ header, footer }) => {
  return (
    <div>
      <h1>{header}</h1>
      <p>This is the content on my website</p>
      <p>{footer}</p>
    </div>
  );
};

export default PageLayout;

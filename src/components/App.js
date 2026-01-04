import React from "react";
import "./../styles/App.css";
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
      <PageLayout
        header={"Welcome to my website"}
        footer={"c 2023 My Website. All rights reserverd"}
      >
        <p>This is the content on my website</p>
      </PageLayout>
    </div>
  );
};

export default App;

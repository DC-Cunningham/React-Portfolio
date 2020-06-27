import * as React from "react";
import "./PageContainer.css";

interface PageProps {
  name: string;
}

const PageContainer: React.FC<PageProps> = ({ name }) => {
  switch (name) {
    case "Portfolio":
      return <div className="container">Portfolio component</div>;
      break;
    case "Resume":
      return <div className="container">Resume component</div>;
      break;
    case "Contact":
      return <div className="container">Contact component</div>;
      break;
    default:
      return <div className="container">Profile component</div>;
  }
};

export default PageContainer;

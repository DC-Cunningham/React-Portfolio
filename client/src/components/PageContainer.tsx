import * as React from "react";
import "./PageContainer.css";
import Profile from "./Profile";
import Portfolio from "./Portfolio";
import Resume from "./Resume";
import Contact from "./Contact";

interface PageProps {
  name: string;
}

const PageContainer: React.FC<PageProps> = ({ name }) => {
  switch (name) {
    case "Portfolio":
      return <Portfolio />;
    case "Resume":
      return <Resume />;
    case "Contact":
      return <Contact />;
    default:
      return <Profile />;
  }
};

export default PageContainer;

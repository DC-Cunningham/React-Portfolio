import React from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";

const Resume: React.FC = () => (
  <IonContent>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>This is a Resume</IonCardTitle>
        <IonCardSubtitle>It's all about me</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <h3>Skills:</h3>
        <h5>Front End:</h5> REACT, HTML, CSS and Javascript. Frameworks:
        Bootstrap, Material UI, Materialize and Ionic. <h5>Back End:</h5>{" "}
        MongoDB, Mongoose, Express, MySQL, NodeJS and Sequelize. <h5>Tools:</h5>{" "}
        VS Code, Photoshop, Illustrator, and Git.
        <ul>
          {" "}
          <li>Strong interpersonal skills</li>{" "}
          <li>Excellent communication skills</li>{" "}
          <li>Ability to prioritise and manage time well</li>
          <li>
            Logical, analytical and efficient approach to solving problems and
            resolving issues{" "}
          </li>
        </ul>
        <h3>Education: </h3>
        <h5>Full Stack Coding Bootcamp: Monash University</h5>
        <h5>Bachelor of Environmental Science: The University of Melbourne</h5>
        <h5>
          Certificate IV in Small Business: Swinburne University of Technology
        </h5>
        <br />
        <br />
        References available on request
      </IonCardContent>
    </IonCard>
  </IonContent>
);

export default Resume;

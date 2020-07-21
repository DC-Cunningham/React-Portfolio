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
        <IonCardTitle>Skills:</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <h5></h5> REACT, HTML, CSS and Javascript. Frameworks: Bootstrap,
        Material UI, Materialize and Ionic.
        <IonCardSubtitle>Back End:</IonCardSubtitle>
        MongoDB, Mongoose, Express, MySQL, NodeJS and Sequelize.
        <IonCardSubtitle>Tools:</IonCardSubtitle>
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
        <IonCardTitle>Education:</IonCardTitle>
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

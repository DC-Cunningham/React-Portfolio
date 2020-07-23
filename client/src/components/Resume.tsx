import React from "react";
import {
  IonContent,
  IonCard,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItemDivider,
} from "@ionic/react";

const Resume: React.FC = () => (
  <IonContent>
    <IonCard>
      <IonCardContent>
        <IonCardTitle>Soft Skill Highlights:</IonCardTitle>
        <ul>
          <li>Strong interpersonal skills</li>
          <li>Excellent communication skills</li>{" "}
          <li>
            Ability to prioritise and manage time as the conditions demand
          </li>
          <li>
            Logical, analytical and efficient approach to solving problems and
            resolving issues
          </li>
        </ul>
      </IonCardContent>
      <IonItemDivider />
      <IonCardContent>
        <IonCardTitle>Technology Skills:</IonCardTitle>
        <br />
        <IonCardSubtitle>Front End:</IonCardSubtitle>
        <IonCardContent>
          REACT, HTML, CSS and Javascript. Frameworks: Bootstrap, Material UI,
          Materialize and Ionic.
        </IonCardContent>
        <IonCardSubtitle>Back End:</IonCardSubtitle>
        <IonCardContent>
          MongoDB, Mongoose, Express, MySQL, NodeJS and Sequelize.
        </IonCardContent>
        <IonCardSubtitle>Tools:</IonCardSubtitle>
        <IonCardContent>
          VS Code, Photoshop, Illustrator, and Git.
        </IonCardContent>
      </IonCardContent>

      <IonItemDivider />

      <IonCardContent>
        <IonCardTitle>Education:</IonCardTitle>
        <br />
        <IonCardSubtitle>
          Full Stack Coding Bootcamp: Monash University
        </IonCardSubtitle>
        <br />
        <IonCardSubtitle>
          Bachelor of Environmental Science: The University of Melbourne
        </IonCardSubtitle>
        <br />
        <IonCardSubtitle>
          Certificate IV in Small Business: Swinburne University of Technology
        </IonCardSubtitle>
        <br />
        <br />
        References available on request
      </IonCardContent>
    </IonCard>
  </IonContent>
);

export default Resume;

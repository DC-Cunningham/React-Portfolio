import React from "react";
import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import "./Avatar.css";

export const Avatar: React.FC = () => (
  <IonItem>
    <IonAvatar slot="start">
      <img
        src="https://avatars0.githubusercontent.com/u/47209814?s=460&u=1fdffb7687345e75a160fda9847638d47ce05b5d&v=4"
        alt="Avatar"
      />
    </IonAvatar>
    <IonLabel>
      <h1>DC Cunningham</h1>
    </IonLabel>
    <IonLabel>Full Stack Web Developer</IonLabel>
  </IonItem>
);

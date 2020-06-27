import React from "react";
import {
  IonAvatar,
  IonItem,
  IonLabel,
  IonContent,
  IonNote,
} from "@ionic/react";
import "./Avatar.css";

export const Avatar: React.FC = () => (
  <IonContent>
    <IonItem>
      <IonAvatar slot="start">
        <img src="https://avatars0.githubusercontent.com/u/47209814?s=460&u=1fdffb7687345e75a160fda9847638d47ce05b5d&v=4" />
      </IonAvatar>
      <IonLabel>
        <h1>DC Cunningham</h1>
        <IonNote>Full Stack Web Developer</IonNote>
      </IonLabel>
    </IonItem>
  </IonContent>
);

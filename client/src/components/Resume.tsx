import React from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import Resume from "../images/DavidCunningham.pdf"

const Resume: React.FC = () => (
  <IonContent>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>This is a Resume</IonCardTitle>
        <IonCardSubtitle>It's all about me</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        <Resume>
      </IonCardContent>
    </IonCard>
  </IonContent>
);

export default Resume;

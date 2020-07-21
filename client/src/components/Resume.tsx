import React from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import ResumePDF from "../images/DavidCunningham.pdf";

const Resume: React.FC = () => (
  <IonContent>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>This is a Resume</IonCardTitle>
        <IonCardSubtitle>It's all about me</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <ResumePDF />
      </IonCardContent>
    </IonCard>
  </IonContent>
);

export default Resume;

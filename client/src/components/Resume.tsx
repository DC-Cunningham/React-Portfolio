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
        Lorem ipsum dolor sit amet, consectetur adip
      </IonCardContent>
    </IonCard>
  </IonContent>
);

export default Resume;

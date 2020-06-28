import React from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import "./Profile.css";

const Profile: React.FC = () => (
  <IonContent>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>This is a profile</IonCardTitle>
        <IonCardSubtitle>It's all about me</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>
        Lorem ipsum dolor sit amet, consectetur adip
      </IonCardContent>
    </IonCard>
  </IonContent>
);

export default Profile;

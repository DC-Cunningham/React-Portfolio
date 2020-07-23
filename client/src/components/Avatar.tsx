import React from "react";
import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import "./Avatar.css";

export const Avatar: React.FC = () => (
  <IonItem>
    <IonAvatar slot="start">
      <img
        src="https://media-exp1.licdn.com/dms/image/C5635AQHPu_g_3phhjg/profile-framedphoto-shrink_200_200/0?e=1595552400&v=beta&t=CZK8pqKC8v2XmVAaxpU7i67v9cFXgOElx0R6PK21nig"
        alt="Avatar"
      />
    </IonAvatar>
    <IonLabel>
      <h1>DC Cunningham</h1>
    </IonLabel>
    <IonLabel>Full Stack Web Developer</IonLabel>
  </IonItem>
);

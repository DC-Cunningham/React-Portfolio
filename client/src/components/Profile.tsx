import React from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import "./Profile.css";

const Profile: React.FC = () => (
  <IonContent>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>
          Full stack Web Developer leveraging an extensive background in the
          bicycle industry to build user focused experiences on multiple
          platforms.
        </IonCardTitle>
      </IonCardHeader>

      <IonCardContent>
        By incorporating a solid understanding in web technologies with
        substantial bicycle industry experience I have built multiple workshops
        from the ground up into highly efficient and profitable enterprises.
        <br />
        <br />
        Adept at swift problem solving and great time management with a focus on
        achieving strong and financially efficient outcomes for business.
        <br />
        <br />
        Recently earned a certificate in Full Stack Development from Monash
        University Coding Bootcamp, to further develop skills in React.js,
        responsive web design, JavaScript, and Node.
        <br />
        <br />I am excited to leverage my broad skill set as part of a
        fast-paced, quality-driven team in order to build better experiences for
        technology users.
      </IonCardContent>
    </IonCard>
  </IonContent>
);

export default Profile;

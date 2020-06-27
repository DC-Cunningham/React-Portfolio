import {
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import PageContainer from "../components/PageContainer";
import { Avatar } from "../components/Avatar";
import "./Page.css";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <Avatar />
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <PageContainer name={name}></PageContainer>
      {/* <IonContent> */}
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle className="" size="large">
            {name}
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      {/* </IonContent> */}
    </IonPage>
  );
};

export default Page;

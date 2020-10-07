import {
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonContent,
} from "@ionic/react";
import React from "react";
import { useParams } from "react-router";
import PageContainer from "../components/PageContainer";
import { Avatar } from "../components/Avatar";
import "./Page.css";

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>
              <a href="https://www.beautifulrevolution.com.au">
                <img
                  src="https://www.beautifulrevolution.com.au/assets/images/TBR_WebHeader_880x218_W.png"
                  style={{ width: "400px" }}
                  alt="The Beautiful Revolution Logo"
                ></img>
              </a>
            </IonTitle>
          </IonToolbar>
          <Avatar />
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton />
            </IonButtons>
            <IonContent class="background" />
            <IonTitle>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <PageContainer name={name}></PageContainer>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle className="" size="large">
              {name}
            </IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonPage>
    </>
  );
};

export default Page;

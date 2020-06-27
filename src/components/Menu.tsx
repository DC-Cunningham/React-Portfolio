import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import React from "react";
import { useLocation } from "react-router-dom";
import {
  readerOutline,
  readerSharp,
  personOutline,
  personSharp,
  mailOutline,
  mailSharp,
  briefcaseOutline,
  briefcaseSharp,
} from "ionicons/icons";
import "./Menu.css";
import { Avatar } from "./Avatar";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Profile",
    url: "/Profile",
    iosIcon: personOutline,
    mdIcon: personSharp,
  },
  {
    title: "Portfolio",
    url: "/Portfolio",
    iosIcon: briefcaseOutline,
    mdIcon: briefcaseSharp,
  },
  {
    title: "Resume",
    url: "/Resume",
    iosIcon: readerOutline,
    mdIcon: readerSharp,
  },
  {
    title: "Contact",
    url: "/Contact",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
];

const labels = ["React", "Node", "Javascript"];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection="none"
                  lines="none"
                  detail={false}
                >
                  <IonIcon
                    slot="start"
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>
        {/* use this are for skill logos perhaps with hover characteristics
        <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

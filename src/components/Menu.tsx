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
  logoGithub,
  logoLinkedin,
} from "ionicons/icons";
import "./Menu.css";

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

const labels = [
  { name: "Github", logo: logoGithub, link: "https://github.com/DCRevResLabs" },
  {
    name: "LinkedIn",
    logo: logoLinkedin,
    link: "https://www.linkedin.com/in/dc-cunningham/",
  },
];

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
        <IonList id="labels-list">
          <IonListHeader>Find me on the web</IonListHeader>
          {labels.map((label, index) => (
            <IonItem href={label.link} lines="none" key={index}>
              <IonIcon slot="start" icon={label.logo} />
              <IonLabel>{label.name}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

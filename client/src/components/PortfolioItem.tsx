import React from "react";
import {
  IonList,
  IonItem,
  IonThumbnail,
  IonImg,
  IonCard,
  IonRow,
  IonItemDivider,
  IonCardHeader,
  IonCardContent,
  IonContent,
  IonCol,
} from "@ionic/react";

import revolutionResearch from "../images/revolutionResearch.jpg";
import vicChamps from "../images/vicChamps.jpg";
import weCurate from "../images/weCurate.jpg";
import TBCP from "../images/TBCP.png";

type Item = {
  src: string;
  text: string;
  link: string;
  blurb: string;
};
const items: Item[] = [
  {
    src: TBCP,
    text: "The Bike Compatibility Project",
    link: "https://github.com/DCRevResLabs/bike-compatibility-project",
    blurb:
      "A React-based application deployed using a Mongo, Express, Node and Material UI build. This project is a proof of concept for an application dealing with the intricate compatibility relationships of bicycle components. The application hopes to make a user friendly database of information for bicycle industry. It shows which other components can come into contact with, and also which other components can influence any individual component. By having a quick at hand reference less repair, replacement or customisation issues will result from not considering all possible compatibility issues.",
  },
  {
    src: revolutionResearch,
    text: "Revolution Research Laboratories",
    link: "https://www.revolutionresearch.com.au/",
    blurb:
      "A website built on the Wordpress framework. This site provides a clear and icon driven link to the services provided. ",
  },
  {
    src: vicChamps,
    text: "Victorian Mountain Bike Championship Series",
    link: "https://vicchampseries.com.au/",
    blurb:
      "A website built on the Wordpress framework. This site provides a landing point for Victorian mountain bikers to learn all the details about the future and past races in their State Series.",
  },
  {
    src: weCurate,
    text: "we curate",
    link: "https://www.wecurate.com.au/",
    blurb:
      "A responsive website built using the Bootstrap Framework. This site puts an emphasis on design to help purvey the ethos of the client. Creating unique homes with depth, warmth and character.",
  },
];

const PortfolioItem: React.FC = () => (
  <IonContent>
    <IonCard>
      <IonList>
        <IonRow>
          {items.map((item, i) => (
            <>
              <IonCol size="12">
                <IonItem href={item.link} target="_blank" key={i}>
                  <IonCard>
                    <IonRow class="ion-align-items-center">
                      <IonCol size-md="6" size-sm="12">
                        <IonCardHeader>{item.text}</IonCardHeader>
                        <IonThumbnail slot="end"></IonThumbnail>
                        <IonImg src={item.src} />
                      </IonCol>
                      <IonCol size-md="6" size-sm="12">
                        <IonCardContent>{item.blurb}</IonCardContent>
                      </IonCol>
                    </IonRow>
                  </IonCard>
                </IonItem>
              </IonCol>
              <IonItemDivider />
            </>
          ))}
        </IonRow>
      </IonList>
    </IonCard>
  </IonContent>
);

export default PortfolioItem;

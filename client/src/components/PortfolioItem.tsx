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

type Item = {
  src: string;
  text: string;
  link: string;
};
const items: Item[] = [
  {
    src: revolutionResearch,
    text: "Revolution Research Laboratories",
    link: "https://www.revolutionresearch.com.au/",
  },
  {
    src: vicChamps,
    text: "Victorian Mountain Bike Championship Series",
    link: "https://vicchampseries.com.au/",
  },
  {
    src: weCurate,
    text: "we curate",
    link: "https://www.wecurate.com.au/",
  },
];

const PortfolioItem: React.FC = () => (
  <IonContent>
    <IonCard>
      <IonList>
        <IonRow>
          {items.map((image, i) => (
            <IonCol size="6">
              <IonItem href={image.link} target="_blank" key={i}>
                <IonCard>
                  <IonCardHeader>{image.text}</IonCardHeader>
                  <IonThumbnail slot="start"></IonThumbnail>
                  <IonImg src={image.src} />
                  <IonCardContent>
                    lorem ipsum dolor sit amet, consectetur adipiscing
                  </IonCardContent>
                </IonCard>
              </IonItem>
              <IonItemDivider />
            </IonCol>
          ))}
        </IonRow>
      </IonList>
    </IonCard>
  </IonContent>
);

export default PortfolioItem;

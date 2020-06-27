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

type Item = {
  src: string;
  text: string;
  link: string;
};
const items: Item[] = [
  {
    src: "../images/RRL_SS_1200x800.jpg",
    text: "Revolution Research Laboratories",
    link: "https://www.revolutionresearch.com.au/",
  },
  {
    src: "../images/VMTBCS_SS_1200x800.jpg",
    text: "Victorian Mountain Bike Championship Series",
    link: "https://vicchampseries.com.au/",
  },
  {
    src: "../images/WeCurate_SS_1200x800.jpg",
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

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
} from "@ionic/react";

type Item = {
  src: string;
  text: string;
};
const items: Item[] = [
  {
    src: "../images/RRL_SS_1200x800.jpg",
    text: "Revolution Research Laboratories",
  },
  {
    src: "../images/VMTBCS_SS_1200x800.jpg",
    text: "Victorian Mountain Bike Championship Series",
  },
  {
    src: "../images/WeCurate_SS_1200x800.jpg",
    text: "we curate",
  },
];

const PortfolioItem: React.FC = () => (
  <IonContent>
    <IonCard>
      <IonList>
        {items.map((image, i) => (
          <IonItem key={i}>
            <IonRow>
              {/* <IonCol size="8" offset="2"> */}
              <IonCard>
                <IonCardHeader>{image.text}</IonCardHeader>
                <IonThumbnail slot="start"></IonThumbnail>
                <IonImg src={image.src} />
                <IonCardContent>
                  lorem ipsum dolor sit amet, consectetur adipiscing
                </IonCardContent>
              </IonCard>
              {/* </IonCol> */}
              <IonItemDivider />
            </IonRow>
          </IonItem>
        ))}
      </IonList>
    </IonCard>
  </IonContent>
);

export default PortfolioItem;

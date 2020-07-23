import React from "react";
import {
  IonContent,
  IonCard,
  IonCardTitle,
  IonCardHeader,
  IonItemDivider,
  IonButton,
  IonIcon,
} from "@ionic/react";
import "./Contact.css";

import { paperPlaneOutline } from "ionicons/icons";

const Contact: React.FC = () => {
  return (
    <IonContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle id="contact-blurb">
            If you wish to get in contact to discuss opportunities
            <br />
            please don't hesitate to send me an email and I will respond as
            promptly as possible
          </IonCardTitle>
        </IonCardHeader>

        <IonItemDivider />

        <IonButton
          expand="block"
          fill="solid"
          href="mailto:dc@beautifulrevolution.com.au"
        >
          dc@beautifulrevolution.com.au
          <IonIcon slot="end" icon={paperPlaneOutline} />
        </IonButton>
      </IonCard>
    </IonContent>
  );
};

export default Contact;

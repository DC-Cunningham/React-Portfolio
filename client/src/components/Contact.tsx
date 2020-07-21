import React, { useState } from "react";
import {
  IonInput,
  IonItem,
  IonLabel,
  IonContent,
  IonCard,
  IonItemDivider,
  IonTextarea,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { paperPlaneOutline } from "ionicons/icons";

const Contact: React.FC = () => {
  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();
  const [email, setEmail] = useState<string>();
  const [message, setMessage] = useState<string>();

  return (
    <IonContent>
      <IonCard>
        <IonCardHeader href="mailto:dc@beautifulrevolution.com.au">
          dc@beautifulrevolution.com.au
        </IonCardHeader>
      </IonCard>

      {/* <IonCard>
        <IonItemDivider />
        <IonItem>
          <IonLabel position="floating">Name</IonLabel>
          <IonInput
            value={text}
            onIonChange={(e) => setText(e.detail.value!)}
          ></IonInput>
        </IonItem>
        <IonItemDivider />
        <IonItem>
          <IonLabel position="floating">email</IonLabel>
          <IonInput
            type="email"
            value={email}
            onIonChange={(e) => setEmail(e.detail.value!)}
            clearInput
          ></IonInput>
        </IonItem>

        <IonItemDivider />
        <IonItem>
          <IonLabel position="floating">Phone Number</IonLabel>
          <IonInput
            type="tel"
            value={number}
            onIonChange={(e) => setNumber(parseInt(e.detail.value!, 10))}
          ></IonInput>
        </IonItem>

        <IonItemDivider />
        <IonItem>
          <IonLabel position="floating">Message</IonLabel>
          <IonTextarea
            value={message}
            rows={10}
            onIonChange={(e) => setMessage(e.detail.value!)}
          ></IonTextarea>
        </IonItem>
        <IonItemDivider />
        <IonButton expand="block">
          <IonIcon slot="icon-only" icon={paperPlaneOutline} />
        </IonButton>
      </IonCard> */}
    </IonContent>
  );
};

export default Contact;

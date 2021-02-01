import React from "react";
import {
  IonContent,
  IonLabel,
  IonItem,
  IonPage,
  IonInput,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import NavHeader from "../components/Header/NavHeader";

const Forgot = () => {
  return (
    <IonPage>
      <NavHeader title="Forgot Password" />
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput name="email" type="text" required></IonInput>
        </IonItem>

        <IonRow>
          <IonCol>
            <IonButton type="submit" color="primary" expand="block">
              Get Reset Link
            </IonButton>
          </IonCol>
        </IonRow>

      </IonContent>
    </IonPage>
  );
};

export default Forgot;

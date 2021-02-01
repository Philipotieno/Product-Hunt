import React from "react";
import { IonContent, IonLabel, IonItem, IonPage, IonInput, IonRow, IonCol, IonButton } from "@ionic/react";
import NavHeader from "../components/Header/NavHeader";

const Signup = () => {
  return (
    <IonPage>
      <NavHeader title="Sign Up" />
      <IonContent>
        <IonItem line="full">
          <IonLabel position="floating">Username</IonLabel>
          <IonInput name="name" type="text" required></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput name="email" type="text" required></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput name="password" type="text" required></IonInput>
        </IonItem>

        <IonRow>
            <IonCol>
                <IonButton type="submit" color="primary" expand="block">
                    Sign Up
                </IonButton>
            </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};


export default Signup;
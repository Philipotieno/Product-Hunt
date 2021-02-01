import React from "react";
import {
  IonContent,
  IonLabel,
  IonItem,
  IonPage,
  IonInput,
  IonRouterLink,
  IonRow,
  IonCol,
  IonButton,
} from "@ionic/react";
import NavHeader from "../components/Header/NavHeader";

const Login = () => {
  return (
    <IonPage>
      <NavHeader title="Log in" />
      <IonContent>
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
              Log In
            </IonButton>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol>
            <IonRouterLink routerLink={"/forgot"}>
              Forgot Password
            </IonRouterLink>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default Login;

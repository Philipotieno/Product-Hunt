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
import { toast } from "../utils/toast";
import useFormValidation from "../hooks/useFormValidation";
import validateLogin from "../components/Auth/validateLogin";
import firebase from "../firebase";

const INITIAL_STATE = {
  email: "",
  password: "",
};

const Login = (props) => {
  const {
    handleSubmit,
    handleChange,
    values,
    isSubmitting,
  } = useFormValidation(INITIAL_STATE, validateLogin, authenticateUser);
  const [busy, setBusy] = React.useState(false);

  async function authenticateUser() {
    setBusy(true);
    const { email, password } = values;
    try {
      await firebase.login(email, password);
      toast("You have logged in successfully");
      props.history.push("/");
    } catch (err) {
      console.error("Log in Error", err);
      toast(err.message);
    }
    setBusy(false);
  }

  return (
    <IonPage>
      <NavHeader title="Log in" />
      <IonContent>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            name="email"
            value={values.email}
            onIonChange={handleChange}
            type="text"
            required
          ></IonInput>
        </IonItem>

        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            name="password"
            value={values.password}
            onIonChange={handleChange}
            type="password"
            required
          ></IonInput>
        </IonItem>

        <IonRow>
          <IonCol>
            <IonButton
              type="submit"
              color="primary"
              onClick={handleSubmit}
              disabled={isSubmitting}
              expand="block"
            >
              Log In
            </IonButton>
          </IonCol>
        </IonRow>

        <IonRow>
          <IonCol class="ion-text-center ion-padding vertical">
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

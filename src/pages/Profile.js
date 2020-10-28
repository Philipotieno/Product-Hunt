import React from "react";
import { IonHeader,IonPage, IonTabBar, IonTitle } from "@ionic/react";

const Profile = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTabBar>
                    <IonTitle>Profile</IonTitle>
                </IonTabBar>
            </IonHeader>
        </IonPage>
    );
};

export default Profile;
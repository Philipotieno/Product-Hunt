import React from "react";
import { IonHeader,IonPage, IonTabBar, IonTitle } from "@ionic/react";

const Home = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTabBar>
                    <IonTitle>Hunt</IonTitle>
                </IonTabBar>
            </IonHeader>
        </IonPage>
    );
};

export default Home;
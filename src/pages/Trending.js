import React from "react";
import { IonHeader,IonPage, IonTabBar, IonTitle } from "@ionic/react";

const Trending = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTabBar>
                    <IonTitle>Trending</IonTitle>
                </IonTabBar>
            </IonHeader>
        </IonPage>
    );
};

export default Trending;
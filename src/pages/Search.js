import React from "react";
import { IonHeader,IonPage, IonTabBar, IonTitle } from "@ionic/react";

const Search = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonTabBar>
                    <IonTitle>Search</IonTitle>
                </IonTabBar>
            </IonHeader>
        </IonPage>
    );
};

export default Search;
import { observer } from 'mobx-react';
import React from 'react';

import { useSurveyFeature } from './Hooks';
import { SurveyPageComponent } from './SurveyPage';
import { SurveySidebarComponent } from './SurveySidebar';

function SurveyFeature() {
    // Hook that fires off loading the data and getting the store for the feature
    const { store } = useSurveyFeature();
    return (
        <>
            <SurveySidebarComponent store={store}></SurveySidebarComponent>
            <SurveyPageComponent store={store}></SurveyPageComponent>
        </>
    );
}

export const SurveyFeatureComponent = observer(SurveyFeature);

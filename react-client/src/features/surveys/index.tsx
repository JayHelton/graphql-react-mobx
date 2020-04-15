import { observer } from 'mobx-react';
import React from 'react';

import { useSurveyStore } from './Hooks';
import { SurveyPageComponent } from './SurveyPage';
import { SurveySidebarComponent } from './SurveySidebar';

function SurveyFeature() {
    // Hook that fires off loading the data and getting the store for the feature
    const store = useSurveyStore();
    return (
        <>
            <SurveySidebarComponent store={store}></SurveySidebarComponent>
            <SurveyPageComponent store={store}></SurveyPageComponent>
        </>
    );
}

export const SurveyFeatureComponent = observer(SurveyFeature);

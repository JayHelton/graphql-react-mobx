import React from 'react';

import { SurveyStore } from './features/surveys/Store';

export const storeContext = React.createContext({
    surveyStore: new SurveyStore(),
});

export const useStores = () => React.useContext(storeContext);

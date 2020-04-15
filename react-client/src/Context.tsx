import ApolloClient from 'apollo-boost';
import React from 'react';

import { SurveyStore } from './features/surveys/Store';
import { UserStore } from './features/users/Store';

export const client = new ApolloClient({ uri: 'http://localhost:4000' });

export const storeContext = React.createContext({
    surveyStore: new SurveyStore(),
    userStore: new UserStore(),
});

export const useStores = () => React.useContext(storeContext);

import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';

import { SurveyFeatureComponent } from './features/surveys';
import { UserFeatureComponent } from './features/users';

export const client = new ApolloClient({ uri: 'http://localhost:4000' });

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <header className="App-header">GraphQL Fun</header>
            </div>
            <SurveyFeatureComponent />
            <UserFeatureComponent />
        </ApolloProvider>
    );
}

export default App;

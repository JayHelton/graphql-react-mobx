import React from 'react';

import { SurveyFeatureComponent } from './features/surveys';
import { UserFeatureComponent } from './features/users';

function App() {
    return (
        <>
            <div className="App">
                <header className="App-header">GraphQL Fun</header>
            </div>
            <SurveyFeatureComponent />
            <UserFeatureComponent />
        </>
    );
}

export default App;

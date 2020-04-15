import { observer } from 'mobx-react';
import React, { useEffect } from 'react';

import { SurveyStore } from './Store';

function SurveyPage({ store }: { store: SurveyStore }): JSX.Element {
    return (
        <>
            <h1>{store.survey?.name}</h1>
            {store.activeSection && (
                <div>
                    <ul>
                        {store.activeSection?.questions?.map(
                            ({ question, type }: any) => (
                                <li>
                                    {question} - {type}
                                </li>
                            )
                        )}
                    </ul>
                </div>
            )}
            <div>
                <button onClick={() => store.moveToPreviousSection()}>
                    Previous
                </button>
                <button onClick={() => store.moveToNextSection()}>Next</button>
            </div>
        </>
    );
}

export const SurveyPageComponent = observer(SurveyPage);

import React, { useEffect } from 'react';

import { useStores } from '../../Context';

export function useSurveyStore() {
    const { surveyStore } = useStores();
    useEffect(() => {
        surveyStore.fetch();
        console.log('fetching');
    }, []);
    return surveyStore;
}

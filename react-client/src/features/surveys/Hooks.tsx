import React, { useEffect } from 'react';

import { useStores } from '../../Context';

export function useSurveyFeature() {
    const { surveyStore } = useStores();
    useEffect(() => {
        surveyStore.fetch();
        console.log('fetching survey');
    }, []);
    return { store: surveyStore };
}

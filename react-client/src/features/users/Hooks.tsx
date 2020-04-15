import React, { useEffect } from 'react';

import { useStores } from '../../Context';

export function useUserFeature() {
    const { userStore } = useStores();
    useEffect(() => {
        userStore.fetch();
        console.log('fetching');
    }, []);
    return { store: userStore };
}

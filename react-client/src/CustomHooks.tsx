import { useEffect } from 'react';

import { useStores } from './App';

export function useUserStore() {
    const { userStore } = useStores();
    useEffect(() => {
        userStore.fetch();
    }, []);
    return userStore;
}

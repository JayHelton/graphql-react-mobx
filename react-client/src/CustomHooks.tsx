import { useQuery } from '@apollo/react-hooks';
import { useEffect } from 'react';

import { useStores } from './App';
import { USERS_QUERY } from './Queries';

export function useUserStore() {
    const { userStore } = useStores();
    useEffect(() => {
        userStore.fetch();
    }, []);
    return userStore;
}

export function useUserStoreTwoPointOhYeah() {
    const { userStore } = useStores();
    const { data } = useQuery(USERS_QUERY);
    userStore.setUsers(data?.users);
    return userStore;
}

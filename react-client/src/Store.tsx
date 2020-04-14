import { action, computed, observable } from 'mobx';

import { client } from './App';
import { USERS_QUERY } from './Queries';

export class UserStore {
    @observable
    users = [];

    @observable
    searchCriteria: any = {};

    @action
    addSearchCriteria(criteria: any) {
        this.searchCriteria = { ...this.searchCriteria, ...criteria };
    }

    @action
    clearSearch() {
        this.searchCriteria = {};
    }

    @action
    setUsers(users: any) {
        this.users = users;
    }

    @action
    async fetch() {
        const { data } = await client.query({ query: USERS_QUERY });
        this.users = data?.user;
    }

    @computed
    get searchedUsers() {
        const { email } = this.searchCriteria;
        if (email) {
            return this.users.filter((u: { email: string }) =>
                u.email.includes(email)
            );
        }
        return this.users;
    }
}

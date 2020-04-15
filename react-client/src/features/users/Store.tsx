import { gql } from 'apollo-boost';
import { action, computed, observable } from 'mobx';

import { client } from '../../App';

const query = gql`
    query User {
        user {
            id
            name
            email
        }
    }
`;

export class UserStore {
    @observable
    users: { name: string; email: string }[] = [];
    @observable
    searchedText = '';

    @computed
    get searchedUsers() {
        return this.users.filter(
            (u) =>
                u.name.includes(this.searchedText) ||
                u.email.includes(this.searchedText)
        );
    }

    @action
    setUsers(users: any) {
        this.users = users;
    }

    @action
    setSearchedText(searchedText: any) {
        this.searchedText = searchedText;
    }

    @action
    async fetch() {
        const { data } = await client.query({ query });
        this.setUsers(data.user);
    }
}

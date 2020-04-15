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
const createMutation = gql`
    mutation CreateUser($email: String!, $name: String!) {
        createUser(email: $email, name: $name) {
            id
            email
            name
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
        const { data, errors } = await client.query({ query });
        console.log(data, errors);
        this.setUsers(data.user);
    }

    @action
    async createUser(data: any) {
        const res = await client.mutate({
            refetchQueries: [{ query }],
            mutation: createMutation,
            variables: { ...data },
        });
        console.log(res);
    }
}

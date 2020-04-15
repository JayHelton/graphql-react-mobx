import { gql } from 'apollo-boost';
import { action, computed, observable } from 'mobx';

import { client } from '../../Context';

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
    observableQuery: any;
    subscription: any;
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
        // Fetch the data, and subscribe to any updates that the client wants to make
        // Currently, only the createUser method will trigger the next item in the stream
        this.observableQuery = client.watchQuery({ query });
        this.subscription = this.observableQuery.subscribe({
            next: ({ data }: any) => {
                console.log('updating store');
                this.setUsers(data.user);
            },
        });
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

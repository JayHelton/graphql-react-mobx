import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import React from 'react';

import { HelloWord } from './HelloWorld';
import { UserStore } from './Store';
import { User } from './Users';

export const client = new ApolloClient({ uri: 'http://localhost:4000' });

const userStore = new UserStore();

export const userContext = React.createContext({
	userStore,
});

export const useStores = () => React.useContext(userContext);

function App() {
	return (
		<ApolloProvider client={client}>
			<div className="App">
				<header className="App-header">GraphQL Fun</header>
			</div>
			<HelloWord></HelloWord>
			<User></User>
		</ApolloProvider>
	);
}

export default App;

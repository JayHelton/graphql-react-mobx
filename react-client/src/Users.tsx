import { gql } from 'apollo-boost';
import { observer } from 'mobx-react';
import React, { Component, Fragment, useEffect } from 'react';

import { useStores } from './App';

const USERS_QUERY = gql`
	query Users {
		user {
			email
			name
		}
	}
`;

export const User = observer(() => {
	const { userStore } = useStores();
	useEffect(() => {
		userStore.fetch();
	}, []);

	return (
		<Fragment>
			<label>
				Email:
				<input
					name="email"
					value={userStore.searchCriteria?.email}
					onChange={(e) =>
						userStore.addSearchCriteria({ [e.target.name]: e.target.value })
					}
				/>
			</label>

			{userStore.searchedUsers?.map((u: any) => (
				<p>
					{u.email} - {u.name}
				</p>
			))}
		</Fragment>
	);
});

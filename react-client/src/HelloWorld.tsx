import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import React, { Component, Fragment } from 'react';

const HELLO_QUERY = gql`
	query HelloQuery($name: String!) {
		hello(name: $name)
	}
`;
export function HelloWord() {
	const { loading, error, data } = useQuery(HELLO_QUERY, {
		variables: { name: 'World' },
	});
	console.log(loading, error, data);
	return (
		<Fragment>
			<p>{data?.hello}</p>
		</Fragment>
	);
}

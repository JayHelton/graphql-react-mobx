const { GraphQLServer } = require('graphql-yoga');

const users = [
    { id: 1, email: 'test@test.com', name: 'Test Testerson' },
    { id: 2, email: 'adam@test.com', name: 'Adam Adamson' },
];
const surveys = [
    {
        name: 'My First Survey',
        id: 1,
        sections: [
            {
                name: 'Section One',
                id: 1,
                questions: [
                    { question: 'What do you identify as?', type: 'text' },
                ],
            },
            {
                name: 'Section Two',
                id: 2,
                questions: [{ question: 'Are you cool?', type: 'bool' }],
            },
        ],
    },
    {
        name: 'My Second Survey',
        id: 2,
        sections: [
            {
                name: 'Section One',
                id: 1,
                questions: [
                    { question: 'What is you last name?', type: 'text' },
                ],
            },
            {
                name: 'Section Two',
                id: 2,
                questions: [{ question: 'Are you a terrorist?', type: 'bool' }],
            },
        ],
    },
];

const typeDefs = `
	type Query {
		hello(name: String): String
		user(email: String): [User!]
		survey: [Survey!]
	}

	type User {
		id: String!
		email: String!
		name: String!
	}

	type Survey {
		name: String!
		id: ID!
		sections: [Section!]
	}

	type Section {
		name: String!
		id: ID!
		questions: [Question!]
	}

	type Question {
		question: String!
		type: String!
	}

	type Mutation {
		deleteUser(email: String!): Boolean!
		createUser(email: String!, name: String!): User!
	}
`;

const resolvers = {
    Query: {
        hello: (_, args) => `Hello ${args.name || 'World'}!`,
        user: (_, { email }) => {
            if (email) {
                return users.find((u) => u.email === email);
            }
            return users;
        },
        survey: () => {
            return [surveys[Math.random() < 0.5 ? 0 : 1]];
        },
    },
    Mutation: {
        createUser(_, { email, name }) {
            const id = Math.random();
            users.push({ id, email, name });
            return { id, email, name };
        },
        deleteUser(_, { email }) {
            users.filter((u) => u.email !== email);
            return { message: 'deleted' };
        },
    },
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log(`Server is running at http://localhost:4000`));

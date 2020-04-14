const { GraphQLServer } = require('graphql-yoga');

const users = [{ email: 'test@test.com', name: 'Test Testerson' }];

const typeDefs = `
  type Query {
    hello(name: String): String
    user(email: String): [User!]
  }

  type User {
    email: String!
    name: String!
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
	},
	Mutation: {
		createUser(_, { email, name }) {
			users.push({ email, name });
			return { email, name };
		},
		deleteUser(_, { email }) {
			users.filter((u) => u.email !== email);
			return { message: 'deleted' };
		},
	},
};

const server = new GraphQLServer({ typeDefs, resolvers });
server.start(() => console.log(`Server is running at http://localhost:4000`));

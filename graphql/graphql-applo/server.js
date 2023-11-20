const path = require('path');
const express = require('express');
const { ApolloServer } = require('apollo-server-express');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolverArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

async function StartApolloServer() {
    const app = express();

    const schema = makeExecutableSchema({
        typeDefs: typesArray,
        resolvers: resolverArray,
    });

    const server = new ApolloServer({
        schema,
    });

    await server.start();
    server.applyMiddleware({ app, path: '/graphql' });

    app.listen(4000, () => console.log('Server is running on port 4000...'));
}

StartApolloServer();
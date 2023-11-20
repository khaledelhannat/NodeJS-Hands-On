const path = require('path');
const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');

const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync(path.join(__dirname, '**/*.graphql'));
const resolverArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const schema = makeExecutableSchema({
    typeDefs: typesArray,
    resolvers: resolverArray,
});



// Create the express app and the GraphQL handler
const app = express();
app.use('/graphql', createHandler({ schema }));

// Start the server
app.listen(4000, () => console.log('Server is running on port 4000...'));
import http from 'http';
import { ApolloServer } from '@apollo/server';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import bodyParser from 'body-parser';
import { expressMiddleware } from '@apollo/server/express4'
import cors from 'cors'
const app = express();
const httpServer = http.createServer(app)

const typeDefs = `#graphql
    type Query {

    }

   
`;
// type Mutation {

// }

// type Subscription {
    
// }
const resolvers = {
    Query : {
        name : () => {return 'Vinh dbe'}
    }
};

const server =  new ApolloServer({
    typeDefs,
    resolvers,
    plugins:[ApolloServerPluginDrainHttpServer({httpServer})]
})

await server.start()

app.use(cors(), bodyParser.json(),expressMiddleware(server))

await new Promise((resolve)=> httpServer.listen({port:4000},resolve))
console.log(`restart server port:4000`)
const{ApolloServer}=require("apollo-server")
const AgeOfEmpireAPI = require("./data_sources/ages_of_empire_api")
const resolvers = require("./graphql/resolvers")
const { typeDefs } = require("./graphql/schema")


const server=new ApolloServer({
    typeDefs,
    resolvers,
    dataSources:()=>{
        return{
           agesOfEmpireAPI:new AgeOfEmpireAPI() 
        }
    }
  }
)

server.listen().then(
    ({url})=>{
        console.log(
            `
                🚀 Server is running on ${url}
            `
        )
    }
)
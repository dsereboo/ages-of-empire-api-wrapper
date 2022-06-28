const{gql}=require("apollo-server")

const typeDefs=gql`
    type civilization{
        id:ID!
        name:String!
        armyType:String!
    }

    type Query{
        allCivilizations:[civilization!]!
        civilization(id:ID!):civilization!
    }
`

module.exports={typeDefs}
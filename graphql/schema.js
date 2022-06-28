const{gql}=require("apollo-server")

const typeDefs=gql`
    type civilization{
        id:ID!
        name:String!
        army_type:String!
    }

    type Query{
        allCivilizations:civilization
        oneCivilization(id:ID!):civilization!
    }
`

module.exports={typeDefs}
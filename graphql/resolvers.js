const resolvers={
    Query:{
        allCivilizations:(_, __,{dataSources},)=>{
            return dataSources.agesOfEmpireAPI.getAllCivilizations()
        },
        
        oneCivilization:(_,{id},{dataSources})=>{
            return dataSources.agesOfEmpireAPI.getCivilization(id)
        }
    }
}

module.exports=resolvers
const { RESTDataSource } = require("apollo-datasource-rest");

class AgeOfEmpireAPI extends RESTDataSource{
    constructor(){
        super()
        this.baseURL="https://age-of-empires-2-api.herokuapp.com/api/v1/"
    }


    //Fetch all civilizations
    getAllCivilizations(){
        return this.get("civilizations")
    }

    //Get a single civilization using ID
    getCivilization(id){
        return this.get(`civilization/${encodeURIComponent(id)}`)
    }
}

module.exports=AgeOfEmpireAPI
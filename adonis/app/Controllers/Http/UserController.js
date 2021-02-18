'use strict'
const User = use('App/Models/User')
class UserController {

    async store({request, response}){
        const data = request.only(['username', 'email', 'password'])
        return response.created({
            status: "OK"
        })

    }
    
    
}

module.exports = UserController

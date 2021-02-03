'use strict'
const User = use('App/Models/User')
class UserController {

    async login({auth,request}){

        
        const {  email, password } = await request.only(['email','password'])

        let token = await auth.withRefreshToken().attempt(email,password)
       
        return token;

    }

    async store({request}){

        const { email, password} = await request.all();

        const user = await User.create({
            email,
            password
        });

        return user

    }

    async index({}){
        let users = User.all()
        return users;
    }
}

module.exports = UserController

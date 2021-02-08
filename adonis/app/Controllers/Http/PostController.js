'use strict'
const Post = use('App/Models/Post')
class PostController {
    async store({request, response, auth}){
        const data = request.only(['title', 'body'])
        const user = await auth.getUser()
        const post = new Post()
        post.title = data['title']
        post.body = data['body']
        post.user = user['username']
        await post.save()
        return response.created({
            status: true,
            data: post
        })
        
    }

    async index({request, response}){
        const posts = await Post.all()
        
        return response.ok({
           status: true,
           data: posts
        })
    }

}

module.exports = PostController

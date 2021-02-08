'use strict'
const Comment = use('App/Models/Comment')
class CommentController {
    async store({request, response, auth}){
        const data = request.only(['body', 'post_id'])
        const user = await auth.getUser()
        const comment = new Comment()
        comment.body = data['body']
        comment.post_id = data['post_id']
        comment.user = user['username']
        comment.save()

        return response.created({
            status: true,
            data: comment
        })
    }
    async getComments({request, response, auth, params}){
        const data = params.id
        const comments = await Comment.query().where('post_id', data).fetch()

        return response.ok({
            status: true,
            data: comments
        })
    }
    
}

module.exports = CommentController

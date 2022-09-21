import {posts} from "aleph-js";

class PostModel {

    static async timeline() {
        const response = await posts.get_posts('chat')
        return response.posts
    }

    static async find(item_hash) {
        const response = await posts.get_posts(
            'chat',
            { hashes: [item_hash] })
        return  response.posts[0]
    }

    static async create(address, postContent, alephAccount) {
        posts.submit(
            address,
            'chat',
            {'body': postContent},
            {
                'account': alephAccount,
                'channel': 'hall',
                'api_server': 'https://api2.aleph.im',
            }
        )
    }

}

export default PostModel;
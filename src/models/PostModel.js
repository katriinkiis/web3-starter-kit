import {posts} from "aleph-js";

class PostModel {

    static async timeline() {
        const response = await posts.get_posts('metamrfs-posts')
        return response.posts
    }

}
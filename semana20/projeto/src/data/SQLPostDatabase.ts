import { PostRepository } from "../business/post/PostRepository";
import { Post } from "../model/Post";
import { SQLBaseData } from "./SQLBaseData";


export class SQLPostDatabase extends SQLBaseData implements PostRepository{
    private static TABLE_NAME = "labook_posts"

    create = async (
        newPost: Post
    ): Promise<void> => {
        await this.getConnection().insert({
            id: newPost.getId(),
            photo: newPost.getPhoto(),
            description: newPost.getDescription(),
            type: newPost.getType(),
            author_id: newPost.getAuthorId()
        }).into(SQLPostDatabase.TABLE_NAME);
    };

    findPostById = async( 
        id: string
    ):Promise<Post> => {
        const result = await this.getConnection()
            .select()
            .from(SQLPostDatabase.TABLE_NAME)
            .where({ id });

        return Post.toPostModel(result[0]);
    };
};
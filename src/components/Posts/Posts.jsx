import { useLoaderData } from "react-router";
import Post from "../Post/Post";
import './Posts.css'

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>This is posts</h2>
            <div className="posts">
                {
                    posts.map(post => <Post key={post.id} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;
import { useLoaderData } from "react-router";

const PostDetails = () => {
    const post = useLoaderData();
    const {id,title,body} = post;
    return (
        <div>
            <h2>This is the post details of : {id}</h2>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    );
};

export default PostDetails;
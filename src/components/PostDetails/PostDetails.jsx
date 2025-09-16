import { useLoaderData, useNavigate } from "react-router";

const PostDetails = () => {
    const post = useLoaderData();
    const navigate = useNavigate();
    const { id, title, body } = post;
    return (
        <div>
            <h2>This is the post details of : {id}</h2>
            <p>{title}</p>
            <p>{body}</p>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    );
};

export default PostDetails;
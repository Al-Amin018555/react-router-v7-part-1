import { Link } from "react-router";

const Post = ({post}) => {
    
    const {title,id} = post;
    const postStyle = {
        border: '2px solid red',
        borderRadius: '10px',
        padding: '5px',
    }
    return (
        <div style={postStyle}>
              <h2>This is post of : {id}</h2>          
              <p>{title}</p>
              <Link to={`/posts/${id}`}>Post Details</Link>
        </div>
    );
};

export default Post;
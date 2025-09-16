import { Link } from "react-router";

const User = ({ user }) => {
    const { id, name, email, phone } = user;
    const userStyle = {
        border: '2px solid red',
        borderRadius: '10px',
        padding: '5px',
    }
    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p><small>Phone: {phone}</small></p>
            <Link to={`/users/${id}`}>User Details</Link>
        </div>
    );
};

export default User;
import { useLoaderData } from "react-router";
import User from "../User/User";
import './Users.css'
const Users = () => {
    const users = useLoaderData();
    console.log(users);
    return (
        <div>
            <h2>This is Users</h2>
            <div className="users">
                {
                    users.map(user => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;
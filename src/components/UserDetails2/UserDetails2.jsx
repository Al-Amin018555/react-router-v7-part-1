import { use } from "react";

const UserDetails2 = ({userPromise}) => {
    const {username,name} = use(userPromise);
    // console.log(user);
    return (
        <div>
            <p><small>{username}</small></p>
            <p>{name}</p>
        </div>
    );
};

export default UserDetails2;
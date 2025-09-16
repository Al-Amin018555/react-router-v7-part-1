import { useLoaderData } from "react-router";

const UserDetails = () => {
    const user = useLoaderData();
    const {name,website} = user
    return (
        <div>
            <h3>{name}</h3>
            <p>website: {website}</p>
        </div>
    );
};

export default UserDetails;
import { useContext } from "react";
import { Link } from "react-router-dom";
import { LoginContext, LoginContextType, UserType } from "../../context/context";


const Menu = () : JSX.Element => {

//if the user is loggin in, render their name
//if not, then render sign in button
    const contextPointer = useContext<LoginContextType>(LoginContext)

    const userDetails : UserType = contextPointer.user;
    return (
        <ul className="nav">
            <li><Link to="/find">Find a transaction</Link></li>
            <li><Link to="/add">New transaction</Link></li>
            <li>{userDetails.id === 0 ? (<Link to="/signin">Sign In</Link>) : (<p>Hello {userDetails.name}</p>)}</li>
        </ul>
    );
}

export default Menu;

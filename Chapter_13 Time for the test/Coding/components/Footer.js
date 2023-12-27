import UserContext from "../utils/UserContext";

const Footer = () => {
    return (
        <UserContext.Consumer>
            {({user}) => (
                <div className="footer">
                <h2>This site is developed by {user.name}</h2>
                <h2>email {user.email}</h2>
            </div>
            )}
        </UserContext.Consumer>
    )
};

export default Footer;
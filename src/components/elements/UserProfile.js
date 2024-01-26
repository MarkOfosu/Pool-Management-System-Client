import person from "../../resource/person.svg"
import { useAuth } from "../../context/AuthContext"

const UserProfile = () => {
    const { authState } = useAuth();
    const {  firstName, image } = authState;

    return (
        <div className="userProfile">
            <div className="userProfile__container">
                <div className="userProfile__image">
                {image === null ? 
                <img  src={person}  alt="profile"/> : <img src={image} alt="profile" />}
                </div>
                <div className="userProfile__name">
                    <h1>{firstName}</h1>
                </div>
            </div>
        </div>
    )
}

export default UserProfile

import { useContext } from "react";
import { UserContext } from "../UserContext"; // Import UserContext

const UserProfile = () => {
  // Access user data from context
  const { name, age, bio } = useContext(UserContext);

  return (
    <div>
      <h2>{name}</h2>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserProfile;
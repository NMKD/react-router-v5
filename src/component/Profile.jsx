import { useHistory } from "react-router-dom";

const Profile = () => {
  const history = useHistory();
  return (
    <>
      <h1>Profile</h1>
      <button onClick={() => history.push("/users")}>Back</button>
    </>
  );
};

export default Profile;

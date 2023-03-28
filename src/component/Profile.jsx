import { useHistory } from "react-router-dom";

const Profile = ({ userId }) => {
  const history = useHistory();
  return (
    <>
      <h1>Profile</h1>
      <button onClick={() => history.push(`/users/${userId}`)}>Back</button>
    </>
  );
};

export default Profile;

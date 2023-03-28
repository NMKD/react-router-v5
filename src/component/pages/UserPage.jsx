import { Link, useParams } from "react-router-dom";
import Profile from "../Profile";
import EditPage from "./EditPage";

const UserPage = ({ userId }) => {
  const { type } = useParams();
  return (
    <>
      <h1>User page</h1>

      <p>User {userId}</p>

      <ul>
        <li>
          <Link to={`/users/${userId}/profile`}> Profile this user</Link>
        </li>
        <li>
          <Link to={`/users/${userId}/edit`}> Edit this user</Link>
        </li>
        <li>
          <Link to={`/users`}>Users list page</Link>
        </li>
      </ul>

      {type === "profile" && <Profile {...{ userId }} />}
      {type === "edit" && <EditPage {...{ userId }} />}
    </>
  );
};

export default UserPage;

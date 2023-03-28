import { Link, useParams } from "react-router-dom";
import UserPage from "./UserPage";

const UsersPage = () => {
  const { userId } = useParams();
  const users = [1, 2, 3, 4, 5, 6];
  return (
    <>
      <h1>Users page</h1>
      <h2> NavLink to user page</h2>
      <ul>
        {users.map((item) => (
          <li key={item}>
            <Link to={`/users/${item}`}> User {item}</Link>
          </li>
        ))}
      </ul>
      <h2>
        <Link to={`/`}> NavLink to home page</Link>
      </h2>

      {userId && <UserPage userId={userId} />}
    </>
  );
};

export default UsersPage;

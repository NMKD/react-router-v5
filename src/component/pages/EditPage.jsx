import { Link } from "react-router-dom";

const EditPage = ({ userId }) => {
  const getNextUser = (param) => {
    const id = Number(param) + 1;
    return `/users/${id}`;
  };
  return (
    <>
      <h1>Edit</h1>

      <ul>
        <li>
          <Link to={"/users/" + userId}>User Profile</Link>
        </li>
        <li>
          <Link to={getNextUser(userId)}>Another User</Link>
        </li>
        <li>
          <Link to="/users/">Users list page</Link>
        </li>
      </ul>
    </>
  );
};

export default EditPage;

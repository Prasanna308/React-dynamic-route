import { useParams } from "react-router-dom";

function User() {
  const { id } = useParams(); // Get route parameter

  return (
    <div>
      <h2>User Details</h2>
      <p>User ID: {id}</p>
    </div>
  );
}

export default User;

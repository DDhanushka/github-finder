import React from "react";
import UserItem from "./UserItem";
import { Spinner } from "../layout/Spinnner";
import PropTypes from "prop-types";

export const Users = ({ users, loading }) => {
  if (loading) {
    console.log('loading...');
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
  gridGap: "1rem",
};

Users.defaultProps = {
  users: [],
  loading: false,
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;

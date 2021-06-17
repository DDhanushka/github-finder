import React from "react";
import UserItem from "./UserItem";
import { Spinner } from "../layout/Spinnner";
import PropTypes from "prop-types";
import {Row, Col} from 'antd';

export const Users = ({ users, loading }) => {


  if (loading) {
    console.log("loading...");
    return <Spinner />;
  } else {
    return (
      <Row wrap={true} justify='space-around' gutter={[0, 30]} style={{paddingTop:'30px'}}>
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </Row>
      

    );
  }
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

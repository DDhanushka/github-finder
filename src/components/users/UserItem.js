import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Card, Avatar, Button } from "antd";

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  const { Meta } = Card;
  return (
    <Card style={{ width: 300 , display:'flex', justifyContent:'center'}}>
      <Meta style={{display:'flex', justifyContent:'center'}}
        avatar={<Avatar src={avatar_url} style={{width:'60px', height:'60px'}} />}

        // description="This is the description"
      />
      <Meta title={login} style={{display:'flex', justifyContent:'center', padding:'15px 0'}}/>

      <Button >
        <Link to={`/user/${login}`}>More</Link>
      </Button>
    </Card>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

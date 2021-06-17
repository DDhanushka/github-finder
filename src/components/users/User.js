import React, { Component, Fragment } from "react";
import { Spinner } from "../layout/Spinnner";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Button } from "antd";

export class User extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
  }
  render() {
    const {
      name,
      avatar_url,
      location,
      bio,
      blog,
      login,
      html_url,
      followers,
      following,
      public_repos,
      public_gists,
      hireable,
    } = this.props.user;
    const { loading } = this.props;

    if (loading) return <Spinner />;
    else {
      return (
        <Fragment>
          <Button type="primary">Button</Button>
          <NavLink exac to="/" className="btn btn-light">
            Go back
          </NavLink>
          Hireable:
          {hireable ? <p>Yes</p> : <p>No</p>}
        </Fragment>
      );
    }
  }
}

export default User;

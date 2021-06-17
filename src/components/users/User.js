import React, { Component, Fragment } from "react";
import { Spinner } from "../layout/Spinnner";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Button, Row, Col, Statistic } from "antd";
import { Repos } from "../repos/Repos";

export class User extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  };

  componentDidMount() {
    this.props.getUser(this.props.match.params.login);
    this.props.getUserRepos(this.props.match.params.login);
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

    const { loading, repos } = this.props;

    if (loading) return <Spinner />;
    else {
      return (
        <div className="container">
          <Row style={{ marginBottom: "30px" }}>
            <Col>
              <NavLink exac to="/" className="btn btn-light">
                <Button shape="circle">
                  <i class="fas fa-chevron-left" />
                </Button>
              </NavLink>
            </Col>
          </Row>
          <Row>
            <Col span={6}>
              <img
                src={avatar_url}
                style={{
                  width: "200px",
                  height: "200px",
                  borderRadius: "10px",
                }}
              />
              <div style={{ paddingTop: "25px" }}>
                Hireable:
                {hireable ? (
                  <i
                    className="fas fa-check-circle"
                    style={{ color: "#7cb305" }}
                  >
                    {" "}
                  </i>
                ) : (
                  <i
                    className="fas fa-times-circle"
                    style={{ color: "#cf1322" }}
                  >
                    {" "}
                  </i>
                )}
                <p>Location: {location}</p>
              </div>
            </Col>

            <Col span={18}>
              <div>
                <h1 style={{ margin: "0 0 15px 0" }}>{name}</h1>
                <p>{bio}</p>

                <Button type="primary" style={{ marginTop: "15px" }}>
                  <a href={html_url} target="_blank">
                    Visit Github Profile
                  </a>
                </Button>
              </div>
              <div style={{ marginTop: "25px" }}>
                <p>Username: {login}</p>
                <p>
                  Web:{" "}
                  <a href={`https://${blog}`} target="_blank">
                    {blog}
                  </a>
                </p>
                <p>Username: {login}</p>
              </div>
            </Col>
          </Row>

          <Row gutter={16} style={{ margin: "25px 0" }}>
            <Col span={6}>
              <Statistic title="Followers" value={followers} />
            </Col>
            <Col span={6}>
              <Statistic title="Following" value={following} />
            </Col>
            <Col span={6}>
              <Statistic title="Public Repos" value={public_repos} />
            </Col>
            <Col span={6}>
              <Statistic title="Public Gists" value={public_gists} />
            </Col>
          </Row>
          <Row>
            <Col>
              <h2>Few of the Repos</h2>
              <Repos repos={repos} />
            </Col>
          </Row>
        </div>
      );
    }
  }
}

export default User;

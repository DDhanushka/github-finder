import React, { Component, Fragment } from "react";
// import "./App.css";
import "./import.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import { Search } from "./components/users/Search";
import axios from "axios";
import { Alert } from "./components/layout/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { About } from "./components/pages/About";
import { User } from "./components/users/User";
import { Layout, Row, Col } from "antd";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
  };

  // search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET} = '41e6bbc8ac5349e10833'
      }`);

    this.setState({ users: res.data.items, loading: false });
  };

  // Get a single user
  getUser = async (username) => {
    this.setState({ loading: true });
    const res =
      await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET} = '41e6bbc8ac5349e10833'
      }`);

    this.setState({ user: res.data, loading: false });
  };

  clearUsers = () => this.setState({ users: [], loading: false });

  // Set alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg: msg, type: type } });

    setTimeout(() => this.setState({ alert: null }), 5000);
  };

  closeAlert = () => {
    this.setState({ alert: null });
  };

  render() {
    const { loading, users, user } = this.state;
    const { Header, Footer, Sider, Content } = Layout;

    return (
      <Router>
        <Row>
          <Col span={24} >
            <Navbar />
          </Col>
        </Row>

        <Row style={{minHeight:'85vh'}} >
          <Col span={20} offset={2}>
            <div className="containerx">
              <Alert alert={this.state.alert} closeAlert={this.closeAlert} />
              <Switch>
                <Route
                  exact
                  path="/"
                  render={(props) => (
                    <Fragment>
                      <Search
                        searchUsers={this.searchUsers}
                        clearUsers={this.clearUsers}
                        showClear={users.length > 0 ? true : false}
                        setAlert={this.setAlert}
                      />
                      <Users loading={loading} users={users} />
                    </Fragment>
                  )}
                />
                <Route exact path="/about" component={About} />
                <Route
                  exact
                  path="/user/:login"
                  render={(props) => (
                    <User
                      {...props}
                      getUser={this.getUser}
                      user={user}
                      loading={loading}
                    />
                  )}
                />
              </Switch>
            </div>
          </Col>
        </Row>

        <Row style={{backgroundColor:'#ccc', padding:'20px', textAlign:'center'}}>
          <Col span={20} style={{ padding: "0 150px" } } offset={2}>
            Github Finder 1.0
          </Col>
        </Row>
      </Router>
    );
  }
}

export default App;

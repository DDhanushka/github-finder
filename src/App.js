import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import { Search } from "./components/users/Search";
import axios from "axios";
import { Alert } from "./components/layout/Alert";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  // search github users
  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res =
      await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET} = '41e6bbc8ac5349e10833'
      }`);

    this.setState({ users: res.data.items, loading: false });
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
    const { loading, users } = this.state;
    return (
      <div>
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} closeAlert={this.closeAlert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}

export default App;

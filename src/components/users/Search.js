import React from "react";
import PropTypes from "prop-types";
import { Input, Button } from "antd";

export class Search extends React.Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text == "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({ text: "" });
    }
  };

  onSearch = (value) => {
    if (value == "") {
      this.props.setAlert("Please enter something", "light");
    } else {
      this.props.searchUsers(value);
      this.setState({ text: "" });
    }
  };

  render() {
    const { clearUsers, showClear } = this.props;
    const { Search } = Input;

    return (
      <div className="container">
        {/* <form onSubmit={this.onSubmit} className="form">
          <Input
            type="text"
            name="text"
            placeholder="Search Users..."
            value={this.state.text}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Search"
            className="btn btn-dark btn-block"
          />
          {showClear && (
            <button className="btn btn-liht btn-block" onClick={clearUsers}>
              Clear
            </button>
          )}


        </form> */}
        <Search 
          placeholder="Search Github users..."
          allowClear
          enterButton="Search"
          size="large"
          onSearch={this.onSearch}
        />

        {showClear && (
          <div style={{ textAlign: "center", padding:'20px 0 0 0 ' }}>
            <Button danger type="primary" shape="circle" onClick={clearUsers}>
            <i class="fas fa-trash"></i>
            </Button>
          </div>
        )}
      </div>
    );
  }
}

import React, { Fragment } from "react";

export const About = () => {
  return (
    <div class="container">
      <h1>About the project</h1>
      <p>Simple web app to find githu users and view their profiles.</p>
      <p>Version 1.0.0</p>

      <h2>Used Assets</h2>
      <ul>
        <li>React JS </li>
        <li><a href="https://docs.github.com/en/rest" target='_blank' >Github API</a></li>
        <li>React Router</li>
        <li><a href="https://ant.design/" target='_blank' >Ant Design</a></li>
        <li>FontAwesome</li>
      </ul>

      {/* <h3>Source code:</h3> */}
      <p>
        <a href="https://github.com/DDhanushka" target="_blank">
        <i class="fas fa-file-code"/> Get the source code
        </a>
      </p>

    </div>
  );
};

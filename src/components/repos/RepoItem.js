import React from "react";
import PropTypes from "prop-types";

export const RepoItem = ({ repo }) => {
  return (
    <div className="repo-item">
      <a bordered href={repo.html_url} target="_blank">
        {repo.name}{" "}
      </a>
    </div>
  );
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

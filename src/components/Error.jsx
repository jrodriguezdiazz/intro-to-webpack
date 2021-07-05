import { Link } from "react-router-dom";

import "@styles/error.css";

export const Error = ({ title, description }) => {
  return (
    <div id="main">
      <div className="fof">
        <h1>{title}</h1>
        <h3>{description}</h3>
        <h4>
          <Link to="/" replace>
            Home...
          </Link>
        </h4>
      </div>
    </div>
  );
};

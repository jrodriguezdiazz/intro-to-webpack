import { Link } from "react-router-dom";

import github from "@images/github.png";
import instagram from "@images/instagram.png";
import twitter from "@images/twitter.png";

export const Social = () => {
  return (
    <div className="card_social">
      <Link
        to={{ pathname: "https://twitter.com/jrodriguezdiazz" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={twitter} />
      </Link>
      <Link
        to={{ pathname: "https://github.com/jrodriguezdiazz" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={github} />
      </Link>
      <Link
        to={{ pathname: "https://instagram.com/jrodriguezdiazz" }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instagram} />
      </Link>
    </div>
  );
};

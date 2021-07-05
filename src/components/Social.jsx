import React from "react";

import github from "../images/github.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png";

export const Social = () => {
  return (
    <div class="card_social">
      <a href="https://twitter.com/gndx">
        <img src={twitter} />
      </a>
      <a href="https://github.com/gndx">
        <img src={github} />
      </a>
      <a href="https://instagram.com/gndx">
        <img src={instagram} />
      </a>
    </div>
  );
};

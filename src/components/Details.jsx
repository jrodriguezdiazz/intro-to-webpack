import React from "react";

export const Details = ({ name, picture }) => {
  return (
    <div class="card_details">
      <div class="card_photo center circle">
        <img src={picture.large} alt={name.first} />
        <svg
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg"
          style="enable-background: new -580 439 577.9 194"
        >
          <circle cx="50" cy="50" r="40" />
        </svg>
      </div>
      <p class="card_title">Hi, My name is</p>
      <p class="card_value">
        ${name.first} ${name.last}
      </p>
    </div>
  );
};

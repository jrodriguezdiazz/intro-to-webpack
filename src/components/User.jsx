import React from "react";

export const User = ({ email, location }) => {
  return (
    <div class="card_userdata">
      <ul>
        <li>${email}</li>
        <li>${location.country}</li>
      </ul>
    </div>
  );
};

import getData from "../utils/getData";

import { User } from "./User";
import { Social } from "./Social";
import { Details } from "./Details";

export const Profile = async () => {
  const data = await getData();
  return (
    <div class="About">
      <div class="card">
        <Details name={data.name} picture={data.picture} />
        <User email={data.email} location={data.location} />
        <Social />
      </div>
    </div>
  );
};

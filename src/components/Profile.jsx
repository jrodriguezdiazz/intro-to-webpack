import { useState, useEffect } from "react";

import { getData } from "@utils/getData";

import { User } from "@components/User";
import { Social } from "@components/Social";
import { Loading } from "@components/Loading";
import { Details } from "@components/Details";
import { Error500 } from "@components/Error500";

export const Profile = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      (async () => {
        const result = await getData();
        setData(result);
        setLoading(false);
        setLoading(false);
      })();
    } catch (error) {
      setData({});
      setLoading(false);
      setError(true);
    }
  }, []);

  if (error) return <Error500 />;
  if (loading) return <Loading />;

  return (
    <div className="About">
      <div className="card">
        <Details name={data.name} picture={data.picture} />
        <User email={data.email} location={data.location} />
        <Social />
      </div>
    </div>
  );
};

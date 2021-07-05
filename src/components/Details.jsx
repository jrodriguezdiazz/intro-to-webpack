export const Details = ({ name, picture }) => {
  return (
    <div className="card_details">
      <div className="card_photo center circle">
        <img src={picture.large} alt={name.first} />
      </div>
      <p className="card_title">Hi, My name is</p>
      <p className="card_value">
        {name.first} {name.last}
      </p>
    </div>
  );
};

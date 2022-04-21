import React from "react";
import "./Searchbar.css";
import Logo from "./Logo";

function Searchbar(props) {
  const { dateTableau } = props;
  const [userChoice, setUserChoice] = React.useState("");
  const display = (e) => {
    e.preventDefault();
    setUserChoice("");
    console.log(userChoice);
  };

  return (
    <div>
      <form className="search">
        <input
          className="searchbar"
          placeholder="OÙ ?"
          value={userChoice}
          onChange={(e) => setUserChoice(e.target.value)}
        />
        <button type="button" onClick={display}>
          <Logo />
        </button>
      </form>
      <div>
        {" "}
        {dateTableau
          .filter((event) => event.fields.commune.includes(`${userChoice}`))
          .map((event) => (
            <div>{event.recordid}</div>
          ))}
      </div>
    </div>
  );
}

export default Searchbar;

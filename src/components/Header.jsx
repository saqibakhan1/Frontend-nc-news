import { Link } from "react-router-dom";
import { UserContext } from "./UserContexts";
import { React, useContext } from "react";

const Header = () => {
  const { username } = useContext(UserContext);

  return (
    <header className="header">
      <Link to="/" className="title" id="title">
        <h1>H1 title </h1>
      </Link>
      <section className="user-name-icon-container">
        <div className="user-icon">
        </div>
        <p>{username}</p>
      </section>
    </header>
  );
};

export default Header
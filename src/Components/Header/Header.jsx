import React from "react";
import logo from "../../Logonetflix.png";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
export default function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="" srcset="" />

      <div>
        <Link to="/tvshows">Tv Shows</Link>
        <Link to="/tvshows">Movies</Link>
        <Link to="/tvshows">Recently Added</Link>
        <Link to="/tvshows">My List</Link>
      </div>
      <FaSearch />
    </nav>
  );
}

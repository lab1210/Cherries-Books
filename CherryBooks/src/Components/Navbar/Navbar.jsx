import React, { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { FaChevronDown } from "react-icons/fa6";
import { MdOutlineBookmarkAdd } from "react-icons/md";
const Navbar = () => {
  const [isMenuOpenBrowse, setIsMenuOpenBrowse] = useState(false);
  const [isMenuOpenWrite, setIsMenuOpenWrite] = useState(false);

  const [Genres, setGenres] = useState([]);
  const browseRef = useRef();
  const writeRef = useRef();

  const Genre_List = [
    "Romance",
    "Fantasy",
    "Horror",
    "Thriller",
    "Mystery",
    "Poetry",
    "Science Fiction",
  ];

  useEffect(() => {
    setGenres(Genre_List);
  }, []);

  const handleClickOutside = (event) => {
    if (browseRef.current && !browseRef.current.contains(event.target)) {
      setIsMenuOpenBrowse(false);
    }
    if (writeRef.current && !writeRef.current.contains(event.target)) {
      setIsMenuOpenWrite(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpenBrowse]);

  useEffect(() => {
    const handleWrite = (e) => {
      if (isMenuOpenWrite && ref.current && !ref.current.contains(e.target)) {
        setIsMenuOpenWrite(false);
      }
    };
    document.addEventListener("mousedown", handleWrite);
    return () => {
      document.removeEventListener("mousedown", handleWrite);
    };
  }, [isMenuOpenWrite]);

  return (
    <header>
      <div className="left-sidenav">
        <ul className="left-links">
          <li className="link-item">
            <div className="logo">
              <img src="logo.png" alt="" />
            </div>
          </li>
          <li>
            <div className="Home-dropdown" ref={browseRef}>
              <button
                className="Btn-dropdown "
                onClick={() => setIsMenuOpenBrowse((prev) => !prev)}
              >
                Browse
                <FaChevronDown size={10} />
              </button>
              <div
                className={
                  isMenuOpenBrowse
                    ? "browse-content dropdown-content "
                    : "browse-content dropdown-content display"
                }
              >
                <div className="genres">
                  <ul className="genre-list">
                    <li className="head-list">Browse</li>
                    {Genres.map((Genre, index) => {
                      return (
                        <li className="genre" key={index}>
                          {Genre}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div className="Home-dropdown">
              <button className="Btn-dropdown">
                Book Club
                <FaChevronDown size={10} />
              </button>
            </div>
          </li>
        </ul>
      </div>
      <div className="right-sidenav">
        <div>
          <ul className="right-links">
            <li>
              <div className="Home-dropdown" ref={writeRef}>
                <button
                  className="Btn-dropdown"
                  onClick={() => setIsMenuOpenWrite((prev) => !prev)}
                >
                  Write
                  <FaChevronDown size={10} />
                </button>
                <div
                  className={
                    isMenuOpenWrite
                      ? " dropdown-content "
                      : " dropdown-content display"
                  }
                >
                  <ul className="write">
                    <li
                      className="write-items"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "5px",
                      }}
                    >
                      <MdOutlineBookmarkAdd /> Add a story
                    </li>
                    <li className="write-items">My Stories</li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="Auth">
          <ul className="Auth-links">
            <li>
              <button className="Btn-dropdown">Log in</button>
            </li>
            <li>
              <button className="Btn-dropdown">Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

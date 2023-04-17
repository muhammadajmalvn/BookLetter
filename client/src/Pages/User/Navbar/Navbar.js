import { React, useState } from "react";
import './Navbar.css'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import { userLogout } from '../../../Redux/Actions/userActions/LoginActions'

function NavBar() {
  const userData = useSelector((state) => state.userLogin.userLoginDetails)

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const Close = () => setClick(false);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const logOut = () => {
    dispatch(userLogout())
    navigate("/login")
  }
  const onUserProfile = () => {
    navigate("/profile")
  }
  return (
    <div>
      <div className={click ? "main-container" : ""} onClick={() => Close()} />
      <nav className="navbar" onClick={e => e.stopPropagation()}>
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            LetterBox &nbsp;
            <i className="fa-solid fa-book-open-reader"></i>
          </NavLink>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <i class="fa-solid fa-house"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/books"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <i class="fa-solid fa-book"></i>

              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/sell"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <i class="fa-brands fa-sellcast"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/contact"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <i class="fa-solid fa-phone"></i>

              </NavLink>
            </li>
            <li className="nav-item">
              {userData ?
                <a
                  activeClassName="active"
                  className="nav-links"
                  onClick={logOut}
                >
                <i class="fa-solid fa-power-off"></i>
                </a> :
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={click ? handleClick : null}
                >
                  <i class="fa-solid fa-power-off"></i>
                </NavLink>}
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/signup"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <i class="fa-solid fa-right-to-bracket"></i>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to="/profile"
                activeClassName="active"
                className="nav-links"
                onClick={click ? handleClick : null}
              >
                <i class="fa-solid fa-user"></i>
              </NavLink>
            </li>
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fa fa-times" : "fa fa-bars"}></i>
          </div>
        </div>
      </nav>
    </ div>
  );
}
export default NavBar
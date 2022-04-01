import React from "react";

import classnames from "classnames";
import { Link } from 'react-router-dom'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;
    const pageHero = document.querySelector(".page-hero").clientHeight;
    const darken = pageHero < currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
      darken
    });
  };

  render() {
    return (
      <div
        className={classnames(
          "w-full mx-auto px-auto flex grow nav-bar",
          {
            "nav-bar--hidden": !this.state.visible
          },
          { "nav-bar--darken": this.state.darken }
        )}
      >
        <div className="w-full flex grow nav-bar__cont">
          <Link to='/' className="flex items-center">
            <img className="h-full nav-bar__logo"
              src={ require('../res/logo_orig.jpg') }
              alt="UH"
            />GymManager
          </Link>
          <ul className="hidden sm:block">
            <Link className="nav-bar-link" style={{ textDecoration: 'none', color: 'black' }} to="/"><li>Home</li></Link>
            <Link className="nav-bar-link" style={{ textDecoration: 'none', color: 'black' }} to="/courses"><li>Courses</li></Link>
            <Link className="nav-bar-link" style={{ textDecoration: 'none', color: 'black' }} to="/login"><li>Login</li></Link>
          </ul>
        </div>
        
      </div>
    );
  }
}

export default Header;

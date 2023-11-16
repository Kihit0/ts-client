import React from "react";
import { Link } from "react-router-dom";
import { Image } from "../Image";
import logo from "assets/img/svg/logo.svg";
import { Search } from "components/ux/Search";

export const Navigation: React.FC = () => {
  return (
    <div {...{ className: "navigation" }}>
      <div {...{ className: "navigation__wrapper" }}>
        <div {...{ className: "navigation__logo" }}>
          <Link {...{ className: "navigation__logo-img", to: "/" }}>
            <Image {...{ src: logo, className: "navigation__logo-img__div" }} />
          </Link>
          <Link {...{ className: "navigation__logo-name", to: "/" }}>
            Book<span>shelf</span>
          </Link>
        </div>
        <div {...{className: "navigate__search"}}>
            <Search />
        </div>
        <div {...{ className: "navigation__bar" }}>
          <ul {...{ className: "navigation__bar-ul" }}>
            <li {...{ className: "navigation__bar-ul__li" }}>Book</li>
            <li {...{ className: "navigation__bar-ul__li" }}>Book</li>
            <li {...{ className: "navigation__bar-ul__li" }}>Book</li>
            <li {...{ className: "navigation__bar-ul__li" }}>Book</li>
            <li {...{ className: "navigation__bar-ul__li" }}>Book</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import Styles from "../Styles/sidebar.module.css";
import { Link, useLocation, useParams } from "react-router-dom";
import MenuLogo from "../assets/logo2.png";

type SideBarTypes = {
  name: string;
  img: string;
  path: string;
};

function SideBar({
  items,
}: {
  items: { name: string; img: string; path: string }[];
}) {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <div className={Styles.sideContainer}>
      <img src={MenuLogo} alt="logo" className={Styles.logo} />
      {items.map((item) => (
        <Link to={item?.path} key={item?.path} className={Styles.link}>
          <img
            src={item?.img}
            alt="menu items img"
            className={Styles.listImages}
          />
          <p className={Styles.listNames}>{item.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default SideBar;

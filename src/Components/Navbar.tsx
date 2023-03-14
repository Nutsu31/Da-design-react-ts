import { Link, useLocation } from "react-router-dom";
import Styles from "../Styles/navbar.module.css";
import Logo from "../assets/logo2.png";

const menuList = [
  {
    id: 1,
    name: "მთავარი",
    path: "/",
  },
  {
    id: 2,
    name: "მოდელი",
    path: "/models",
  },
  {
    id: 3,
    name: "სერვისი",
    path: "/service",
  },
  {
    id: 4,
    name: "კონტაქტი",
    path: "/contact",
  },
  {
    id: 5,
    name: "Sales",
    path: "/sales",
  },
];
const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <div className={Styles.container}>
        <p>
          +995 599 69 08 08{" "}
          <span style={{ color: "rgb(255, 91, 32)" }}>
            {" "}
            გელოდებით მირიან მეფის N98
          </span>
        </p>
        <Link to="admin-panel" className={Styles.adminLink}>
          Login
        </Link>
      </div>

      <div className={Styles.logoAndLinksDiv}>
        <img src={Logo} className={Styles.logo} alt="logo" />

        <nav className={Styles.nav}>
          {menuList.map((list) => {
            return (
              <Link to={list.path} className={Styles.linksDiv} key={list.id}>
                <p
                  className={Styles.links}
                  style={{
                    color: pathname === list.path ? "rgb(255, 91, 32)" : "",
                  }}
                >
                  {list.name}
                </p>
              </Link>
            );
          })}
        </nav>
      </div>
      <div
        style={{ width: "100%", height: "24px", background: "#232f3e" }}
      ></div>
    </>
  );
};

export default Navbar;

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
  // const [active, setActive] = useState("");
  const { pathname } = useLocation();
  console.log(pathname);
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
      </div>

      <div className={Styles.logoAndLinksDiv}>
        <img src={Logo} className={Styles.logo} alt="logo" />

        <nav className={Styles.nav}>
          {menuList.map((list) => {
            return (
              <div className={Styles.linksDiv} key={list.id}>
                <Link
                  className={Styles.links}
                  to={list.path}
                  style={{
                    color: pathname === list.path ? "rgb(255, 91, 32)" : "",
                  }}
                >
                  {list.name}
                </Link>
              </div>
            );
          })}
        </nav>
      </div>
      <div
        style={{ width: "100%", height: "20px", background: "#232f3e" }}
      ></div>
    </>
  );
};

export default Navbar;

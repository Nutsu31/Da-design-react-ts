import React, { useState } from "react";
import LoginComp from "../Components/LoginComp";
import Styles from "../Styles/adminPanel.module.css";

const AdminLogin = () => {
  const [logIn, setLogIn] = useState(false);
  return (
    <>
      {logIn ? (
        <AdminPanel />
      ) : (
        <div className={Styles.container}>
          <LoginComp setLogIn={setLogIn} />
        </div>
      )}
    </>
  );
};

export default AdminLogin;

const AdminPanel = () => {
  return <div className={Styles.adminPanel}></div>;
};

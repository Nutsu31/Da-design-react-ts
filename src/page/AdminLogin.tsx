import { useEffect, useState } from "react";
import LoginComp from "../Components/LoginComp";
import SideBar from "../Components/SideBar";
import Styles from "../Styles/adminPanel.module.css";

const AdminLogin = () => {
  const [logIn, setLogIn] = useState(false);

  return (
    <>
      {logIn ? (
        <AdminPanel />
      ) : (
        <div className={Styles.container}>
          <LoginComp logIn={logIn} setLogIn={setLogIn} />
        </div>
      )}
    </>
  );
};

export default AdminLogin;

type DataTypes = {
  firstname?: string;
  lastname?: string;
  address?: string;
  ironwork?: string;
  modelNumber: number;
  number: string;
}[];

const AdminPanel = () => {
  const [datas, setDatas] = useState<DataTypes>([]);
  const [checkoutAndCall, setCheckoutAndCall] = useState("/call");

  useEffect(() => {
    async function getNumbersForCall() {
      const res = await fetch(`http://localhost:4000${checkoutAndCall}`);
      const data = await res.json();
      setDatas(data);
    }
    getNumbersForCall();
  }, [checkoutAndCall]);

  return (
    <div className={Styles.adminContainer}>
      <div className={Styles.controlPanel}>
        <button
          className={Styles.buttons}
          onClick={() => setCheckoutAndCall("/call")}
        >
          დაურეკე
        </button>
        <button
          className={Styles.buttons}
          onClick={() => setCheckoutAndCall("/checkout")}
        >
          შეკვეთა
        </button>
      </div>

      <div className={Styles.dataPanel}>
        <p
          style={{
            color: "orangered",
            width: "100%",
            height: "24px",
            backgroundColor: "#232f3e",
          }}
        >
          შეკვეთების რაოდენობა: {datas.length}
        </p>
        {datas.map((data) => {
          return (
            <div
              className={Styles.dataList}
              key={Math.random() * Math.random()}
            >
              <h3>ნომერი: {data.number}</h3>
              {data.firstname ? (
                <div>
                  <p>სახელი: {data.firstname}</p>
                  <p>გვარი: {data.lastname}</p>
                  <p>ტელეფონი: {data.number}</p>
                  <p>მისამართი: {data.address}</p>
                  <p>ნაკეთობა: {data.ironwork}</p>
                  <p>მოდელიN: {data.modelNumber}</p>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

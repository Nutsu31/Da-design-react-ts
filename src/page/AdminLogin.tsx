import axios from "axios";
import { useEffect, useState } from "react";
import { getNumbersForCall } from "../Components/getAndSendRequestApi";
import LoginComp from "../Components/LoginComp";
import SideBar from "../Components/SideBar";
import Styles from "../Styles/adminPanel.module.css";

const AdminLogin = () => {
  const [logIn, setLogIn] = useState(true);

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
  done?: boolean;
  firstname?: string;
  lastname?: string;
  address?: string;
  ironwork?: string;
  modelNumber?: number;
  number?: string;
}[];

const AdminPanel = () => {
  const [datas, setDatas] = useState<DataTypes>([]);
  const [checkoutAndCall, setCheckoutAndCall] = useState("/call");
  const [task, setTask] = useState({});
  const [doneTask, setDoneTask] = useState({});

  useEffect(() => {
    getNumbersForCall(setDatas, checkoutAndCall);
  }, [checkoutAndCall]);

  useEffect(() => {
    axios
      .put(`http://localhost:4000${checkoutAndCall}`, doneTask)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  }, [doneTask]);

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
            padding: "0 16px",
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
              style={{
                background: data.done === true ? "lightgreen" : "",
              }}
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
              <button
                className={Styles.doneTask}
                onClick={() => {
                  data.done = true;
                  console.log(data);
                  setDoneTask(data);
                }}
              >
                Done
              </button>
              <button className={Styles.deleteTask}>Delete Task</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

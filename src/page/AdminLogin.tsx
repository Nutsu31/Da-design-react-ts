import axios from "axios";
import { useEffect, useState } from "react";
import {
  DataTypes,
  deleteNumbers,
  getNumbersForCall,
  handleDeleteTypes,
} from "../Components/getAndSendRequestApi";
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

const AdminPanel = () => {
  const [datas, setDatas] = useState<DataTypes>([]);
  const [checkoutAndCall, setCheckoutAndCall] = useState("/call");
  const [deleteTask, setDeleteTask] = useState({});
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

  useEffect(() => {
    axios
      .delete(`http://localhost:4000/call/${deleteTask.number}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  }, [deleteTask]);

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
                  data.done = !data.done;
                  console.log(data);
                  setDoneTask(data);
                }}
              >
                Done
              </button>
              <button
                className={Styles.deleteTask}
                onClick={() => {
                  console.log(data);
                  setDeleteTask(data);
                }}
              >
                Delete Task
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

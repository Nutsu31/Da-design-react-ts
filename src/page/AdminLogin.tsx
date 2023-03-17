import React, { useEffect, useState } from "react";
import {
  DataTypes,
  deleteNumbers,
  getNumbersForCall,
  isDoneTask,
} from "../Components/getAndSendRequestApi";
import LoginComp from "../Components/LoginComp";
import RecivedTask from "../Components/RecivedTask";
import UploadItem from "../Components/UploadItem";
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
  const [uploadList, setUploadList] = useState(false);

  useEffect(() => {
    getNumbersForCall(setDatas, checkoutAndCall);
  }, [checkoutAndCall]);

  useEffect(() => {
    isDoneTask(checkoutAndCall, doneTask);
  }, [doneTask]);

  useEffect(() => {
    deleteNumbers(checkoutAndCall, deleteTask);
  }, [deleteTask]);

  return (
    <div className={Styles.adminContainer}>
      <div className={Styles.controlPanel}>
        <button
          className={Styles.buttons}
          // onClick={() => setCheckoutAndCall("/upload")}
          onClick={() => setUploadList(!uploadList)}
        >
          + მოდელის დამატება
        </button>
        <button
          className={Styles.buttons}
          onClick={() => {
            setCheckoutAndCall("/call");
            setUploadList(false);
          }}
        >
          დაურეკე
        </button>
        <button
          className={Styles.buttons}
          onClick={() => {
            setCheckoutAndCall("/checkout");
            setUploadList(false);
          }}
        >
          შეკვეთა
        </button>
      </div>
      {uploadList ? (
        <UploadItem />
      ) : (
        <RecivedTask
          setDeleteTask={setDeleteTask}
          setDoneTask={setDoneTask}
          datas={datas}
        />
      )}
    </div>
  );
};

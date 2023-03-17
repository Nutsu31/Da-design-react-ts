import React from "react";
import Styles from "../Styles/recivedTask.module.css";
import { DataTypes } from "./getAndSendRequestApi";

interface RecivedTaskType {
  setDeleteTask: React.Dispatch<React.SetStateAction<{}>>;
  datas: DataTypes;
  setDoneTask: React.Dispatch<React.SetStateAction<{}>>;
}
const RecivedTask = ({
  setDeleteTask,
  setDoneTask,
  datas,
}: RecivedTaskType) => {
  return (
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
              background: data.done === true ? "#26a326" : "rgb(250, 186, 130)",
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
                setDoneTask(data);
              }}
            >
              Done
            </button>
            <button
              className={Styles.deleteTask}
              onClick={() => {
                setDeleteTask(data);
              }}
            >
              Delete Task
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default RecivedTask;

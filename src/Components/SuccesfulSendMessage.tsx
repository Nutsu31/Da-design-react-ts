import React from "react";
import SuccesIcon from "../assets/complete.png";
import Styles from "../Styles/succesfulMessage.module.css";

interface SuccesfulSendMessageType {
  message: string;
  setSuccessMessage: React.Dispatch<React.SetStateAction<string>>;
}

const SuccesfulSendMessage = ({
  message,
  setSuccessMessage,
}: SuccesfulSendMessageType) => {
  console.log(message);
  return (
    <div
      className={Styles.container}
      onClick={() => setSuccessMessage((current) => (current = ""))}
    >
      <div className={Styles.imgWrapper}>
        <img className={Styles.img} src={SuccesIcon} alt="successful icon" />
        <h1>{message}</h1>
      </div>
    </div>
  );
};

export default SuccesfulSendMessage;

import React, { useState } from "react";
import Styles from "../Styles/service.module.css";
interface ServiceTypes {
  image: string;
  headerText: string;
  bodyText: string;
}
const Service = ({ image, headerText, bodyText }: ServiceTypes) => {
  const [showNumber, setShowNumber] = useState(false);
  return (
    <div className={Styles.container}>
      <div className={Styles.eachServiceDiv}>
        <div className={Styles.textWrapper}>
          <h1>{headerText}</h1>
          <p>{bodyText}</p>
          <div
            onClick={() => setShowNumber(!showNumber)}
            className={Styles.callDiv}
          >
            <p className={Styles.callFont}>
              {showNumber ? "599 68 08 08" : "დაგვირეკეთ"}
            </p>
          </div>
        </div>
        <div>
          <img className={Styles.img} src={image} alt="service images" />
        </div>
      </div>
    </div>
  );
};

export default Service;

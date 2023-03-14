import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImgViewer from "./ImgViewer";
import modelsData from "../menuData/modelsData.json";
import Styles from "../Styles/list.module.css";
import CheckoutForm from "./CheckoutForm";
import SideBar from "./SideBar";
import mainMenu from "../menuData/mainMenu.json";

const List = () => {
  const [view, setView] = useState("");
  const [activeImg, setAcitveImg] = useState(false);
  const { path } = useParams();
  const [checkout, setCheckout] = useState(false);

  const models = modelsData.filter((model) => {
    if (path === "models") {
      return model;
    } else {
      return model.name.toLowerCase() === path;
    }
  });

  return (
    <div className={Styles.allWrapper}>
      <SideBar items={mainMenu} />
      <div className={Styles.listContainer}>
        {models.map((model) => (
          <div key={model.id} className={Styles.list}>
            <img
              className={Styles.listImg}
              src={model.img}
              alt="door model"
              onClick={() => {
                setAcitveImg(true);
                setView(model.img);
              }}
            />
            <h3>
              {model.name.toLocaleUpperCase()} {model.id}
            </h3>
            <button
              className={Styles.listButton}
              onClick={() => setCheckout((curr) => !curr)}
            >
              შეკვეთა
            </button>
            {view === model.img ? (
              <ImgViewer setView={setView} image={model.img} />
            ) : null}
          </div>
        ))}
        {checkout ? <CheckoutForm setCheckout={setCheckout} /> : null}
      </div>
    </div>
  );
};

export default List;

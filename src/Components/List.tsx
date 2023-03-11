import React, { useState } from "react";
import { useParams } from "react-router-dom";
import ImgViewer from "./ImgViewer";
import modelsData from "../menuData/modelsData.json";
import Styles from "../Styles/list.module.css";

const List = () => {
  const [view, setView] = useState("");
  const [activeImg, setAcitveImg] = useState(false);
  const { path } = useParams();

  const models = modelsData.filter((model) => {
    if (path === "models") {
      return model;
    } else {
      return model.name.toLowerCase() === path;
    }
  });

  return (
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
            {model.name} {model.id}
          </h3>
          <button>შეკვეთა</button>
          {view === model.img ? (
            <ImgViewer setView={setView} image={model.img} />
          ) : null}
        </div>
      ))}
    </div>
  );
};

export default List;

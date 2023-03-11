import React from "react";
import Styles from "../Styles/imageViewer.module.css";

interface ImgViewerType {
  view?: boolean;
  setView: React.Dispatch<React.SetStateAction<string>>;
  image: string;
}

const ImgViewer = ({ image, setView }: ImgViewerType) => {
  return (
    <div className={Styles.container} onClick={() => setView("")}>
      <div className={Styles.closer} onClick={() => setView("")}>
        <h1 className={Styles.x}>X</h1>
      </div>
      <div>
        <img className={Styles.viewImg} src={image} alt="image" />
      </div>
    </div>
  );
};

export default ImgViewer;

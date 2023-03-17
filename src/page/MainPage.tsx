import React, { useState } from "react";
import Styles from "../Styles/mainPage.module.css";

import MiddlePhoto from "../assets/exteriorDoor.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
import SuccesfulSendMessage from "../Components/SuccesfulSendMessage";
import SideBar from "../Components/SideBar";
import mainMenu from "../menuData/mainMenu.json";

const MainPage = () => {
  return (
    <div className={Styles.mainCOntainer}>
      <SideBar items={mainMenu} />
      <MiddleFormAndWallpaper />
    </div>
  );
};

type FormData = {
  number: string;
  setValue: (name: string) => undefined;
};

const welcomeText =
  "კომპანია 'DA Design' გთავაზობთ უმაღლესი ხარისხის რკინის ნაკეთობებს, ეს იქნება კარები,მოაჯირი ,ვიტრინა , კიბე, ჭიშკარი თუ უამრავი ინტერიერის სხვა დეტალები. თუ ხართ დაინტერესებული ჩვენი კომპანიით, მოგვწერეთ ტელეფონი ნომერი და ჩვენ დაგიკავშირდებით";
const numberValidation = "მიუთითეთ ვალიდური ნომერი მაგ: 599123456";

const MiddleFormAndWallpaper = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  // Request Send for add number in call.json data
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    axios({
      method: "post",
      url: "http://localhost:4000/call",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        number: data.number,
        done: false,
      },
    })
      .then((res) => setSuccessMessage(res.data))
      .catch((error) => console.log(error));
    reset({ number: "" });
  });

  //////////////////////////////////////////////////////////////////
  return (
    /////////////////Returnin JSX Middle Main Picture and Welcome Text with Form
    <section className={Styles.middleSectionDiv}>
      <div className={Styles.formContainer}>
        <h1 className={Styles.headerText}>
          მოგესალმებით
          <br />
          DaDesign
        </h1>
        <p className={Styles.welcomeText}>{welcomeText}</p>

        {/* ------------After Submit Message From Backend--------------- */}

        {successMessage ? (
          <SuccesfulSendMessage
            message={successMessage}
            setSuccessMessage={setSuccessMessage}
          />
        ) : null}

        <form className={Styles.form} onSubmit={onSubmit}>
          <div>
            <input
              className={Styles.contactNumberInput}
              placeholder="ტელეფონი"
              {...register("number", { pattern: /^\d{9}$/ })}
              required
            />
            <button className={Styles.contactNumberButton}>გაგზავნა</button>
          </div>
          {errors.number && <p className={Styles.error}>{numberValidation}</p>}
        </form>
      </div>

      <div className={Styles.imgContainer}>
        <img className={Styles.img} src={MiddlePhoto} alt="doorPhoto" />
      </div>
    </section>
  );
};

export default MainPage;

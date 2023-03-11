import React from "react";
import mainMenuData from "../menuData/mainMenu";
import Styles from "../Styles/mainPage.module.css";
import { Form, Link } from "react-router-dom";

import MiddlePhoto from "../assets/exteriorDoor.jpg";
import { useForm } from "react-hook-form";
import axios from "axios";
const MainPage = () => {
  return (
    <>
      <MiddleFormAndWallpaper />
      <div className={Styles.slide}></div>
      <div className={Styles.listContainer}>
        {mainMenuData.map((item) => (
          <div key={item.name}>
            <div className={Styles.listDiv}>
              <Link to={item.path} className={Styles.list}>
                <img style={{ width: "50px", height: "60px" }} src={item.img} />
              </Link>
              <p className={Styles.linkNames}>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

type FormData = {
  name: string;
  number: number;
};

const welcomeText =
  "კომპანია 'DA Design' გთავაზობთ უმაღლესი ხარისხის რკინის ნაკეთობებს, ეს იქნება კარები,მოაჯირi,ვიტრინა , კიბე, ჭიშკარი თუ უამრავი ინტერიერის სხვა დეტალები. თუ ხართ დაინტერესებული ჩვენი კომპანიით, მოგვწერეთ ტელეფონი ნომერი და ჩვენ დაგიკავშირდებით";

const numberValidation = "მიუთითეთ ვალიდური ნომერი მაგ: 599123456";

const MiddleFormAndWallpaper = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
    axios({
      method: "post",
      url: "http://localhost:4000/user",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        number: data.number,
      },
    });
  });
  return (
    <section className={Styles.middleSectionDiv}>
      <div className={Styles.formContainer}>
        <h1 className={Styles.headerText}>
          მოგესალმებით
          <br />
          DaDesign
        </h1>
        <p className={Styles.welcomeText}>{welcomeText}</p>

        <form className={Styles.form} onSubmit={onSubmit}>
          <div>
            <input
              className={Styles.contactNumberInput}
              placeholder="ტელეფონი"
              {...register("number", { pattern: /^\d{9}$/ })}
            />
            <button className={Styles.contactNumberButton}>გაგზავნა</button>
          </div>
          {errors.number && <p className={Styles.error}>{numberValidation}</p>}
        </form>
      </div>

      <div className={Styles.imgContainer}>
        <img className={Styles.img} src={MiddlePhoto} />
      </div>
    </section>
  );
};

export default MainPage;

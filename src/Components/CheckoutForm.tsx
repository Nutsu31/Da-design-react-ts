import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Styles from "../Styles/checkoutForm.module.css";

type CheckoutFormTypes = {
  setCheckout: React.Dispatch<React.SetStateAction<boolean>>;
};
const CheckoutForm = ({ setCheckout }: CheckoutFormTypes) => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = handleSubmit((data) => {
    axios({
      method: "post",
      url: "http://localhost:4000/checkout",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        done: "false",
        firstname: data.Firstname,
        lastname: data.Lastname,
        number: data.Number,
        address: data.Address,
        ironwork: data.ironwork,
        modelNumber: data.modelNumber,
      },
    });
    setCheckout((curr) => (curr = false));
    reset({
      Firstname: "",
      Lastname: "",
      Number: "",
      Address: "",
      ironwork: "",
      modelNumber: "",
    });
  });
  return (
    <div className={Styles.container}>
      <form onSubmit={onSubmit} className={Styles.formWrapper}>
        <h2 className={Styles.formHeader}>შეუკვეთე ახლავე</h2>
        <h1
          className={Styles.closer}
          onClick={() => setCheckout((curr) => (curr = false))}
        >
          X
        </h1>
        <input
          type="text"
          {...register("Firstname", { required: true, maxLength: 20 })}
          placeholder="სახელი"
          className={Styles.input}
        />
        <input
          type="text"
          {...register("Lastname", { required: true, maxLength: 20 })}
          placeholder="გვარი"
          className={Styles.input}
        />
        <input
          type="text"
          {...register("Number", { required: true, maxLength: 9 })}
          placeholder="ტელ. ნომერ მაგ: 599123123"
          className={Styles.input}
        />
        <input
          type="text"
          {...register("Address", { required: true })}
          placeholder="მისამართი"
          className={Styles.input}
        />
        <select {...register("ironwork")} className={Styles.input}>
          <option value="choose">აირჩიეთ სასურველი ნივთი</option>
          <option value="door">კარი</option>
          <option value="gate">ჭიშკარი</option>
          <option value="slider-door">ვიტრინა</option>
        </select>
        <input
          className={Styles.input}
          type="number"
          min={0}
          maxLength={3}
          {...register("modelNumber")}
          placeholder="მიუთითეთ მოდელის ნომერი"
        />
        <button className={Styles.checkoutButton}>გაგზავნა</button>
      </form>
    </div>
  );
};

export default CheckoutForm;

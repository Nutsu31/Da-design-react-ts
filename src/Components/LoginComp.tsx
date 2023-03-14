import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Styles from "../Styles/loginComp.module.css";

interface LoginCompTypes {
  logIn: boolean;
  setLogIn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface DataTypes {
  username: string;
  password: string;
}

const LoginComp = ({ setLogIn, logIn }: LoginCompTypes) => {
  const [showPass, setShowPass] = useState(false);
  const { register, handleSubmit } = useForm<DataTypes>();
  const [err, setErr] = useState("");
  const onSubmit = handleSubmit(async (datas) => {
    const res = await fetch("http://localhost:4000/user");
    const reqData: DataTypes[] = await res.json();

    if (
      reqData[0].username === datas.username &&
      reqData[0].password === datas.password
    ) {
      setLogIn((current) => !current);
    } else {
      setErr("არასწორია მომხმარებლის სახელი ან მისამართი");
    }
    return;
  });

  return (
    <>
      <form className={Styles.formWrapper} onSubmit={onSubmit}>
        <h1 className={Styles.loginText}>L O G I N</h1>
        <input
          type="text"
          className={Styles.formInput}
          placeholder="Username"
          {...register("username")}
          autoComplete={"username"}
        />
        <input
          type={showPass ? "text" : "password"}
          className={Styles.formInput}
          placeholder="Password"
          {...register("password")}
          autoComplete={"current-password"}
        />
        <div
          style={{
            width: 15,
            height: 15,
            borderRadius: "50%",
            background: "white",
          }}
          onClick={() => setShowPass(!showPass)}
        ></div>
        <button className={Styles.logInButton}>Log-in</button>
        {logIn ? null : <p className={Styles.err}>{err}</p>}
      </form>
    </>
  );
};

export default LoginComp;

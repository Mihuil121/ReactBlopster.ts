import React, { useEffect, useState ,ChangeEvent,FocusEvent } from "react";
import "./Sin.css";

const Sin = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailDirty, setEmailDirti] = useState<boolean>(false);
  const [passwordDirty, setPasswordDirti] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("почта не может быть пустой");
  const [passwordError, setPasswordError] = useState<string>(
    "пороль не может быть пустой"
  );
  const [formValid, setFromValid] = useState<boolean>(false);

  useEffect(() => {
    if (emailError || passwordError || !emailDirty || !passwordDirty) {
      setFromValid(false);
    } else {
      setFromValid(true);
    }
  }, [emailError, passwordError, emailDirty, passwordDirty]);

  const emailHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re:RegExp =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!re.test(email.toLowerCase())) {
      setEmailError("некоректен");
      setFromValid(false);
    } else {
      setEmailError("");
      if (!passwordError) {
        setFromValid(true);
      }
    }
    return re.test(email.toLowerCase());
  };

  const passwordHandler = (e:ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    const pa:RegExp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{6,11})$/;

    if (e.target.value.length < 6 || e.target.value.length > 11) {
      setPasswordError("некоректен");
      setFromValid(false);
    } else {
      setPasswordError("");
      if (!emailError) {
        setFromValid(true);
      }
    }
    return pa.test(password.toLowerCase());
  };

  const Blur = (e:FocusEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDirti(true);
        break;
      case "password":
        setPasswordDirti(true);
        break;
      default:
        break;
    }
  };

  return (
    <div className="Registration">
      <div className="background-elements"></div>
      <form action="">
        <h1>Регистрация</h1>
        {emailDirty && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <input
          onChange={(e) => emailHandler(e)}
          value={email}
          onBlur={(e) => Blur(e)}
          type="text"
          name="email"
          placeholder="ведите свой email ..."
        />
        {emailDirty && passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}
        <input
          onChange={(e) => passwordHandler(e)}
          value={password}
          onBlur={(e) => Blur(e)}
          type="password"
          name="password"
          placeholder="ведите свой password ..."
        />
        <button disabled={!formValid} type="submit">
          start
        </button>
      </form>
    </div>
  );
};
export default Sin;

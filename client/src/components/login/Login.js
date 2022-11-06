import { useContext, useEffect, useRef, useState } from "react";
import { loginUser } from "../../api/UserApi";
import { useNavigate } from "react-router-dom";
import CoinContext from "../../context/CoinContext";
import "./login.css";

export const Login = () => {
  const { user, setUser, loginOpen, setLoginOpen, setRegisterOpen } =
    useContext(CoinContext);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const loginRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      setLoginOpen(false);
    }
  }, [user]);

  const login = async (e) => {
    e.preventDefault();

    try {
      if (loginForm.email !== "" && loginForm !== "") {
        await loginUser(loginForm);
        const currUser = JSON.parse(localStorage.getItem("user"));
        setUser(currUser);
      }
    } catch (err) {
      console.log(err.response.data.message);
    }
  };

  const setForm = (e) => {
    setLoginForm({
      ...loginForm,
      [e.target.name]: e.target.value,
    });
  };

  const register = () => {
    setLoginOpen(false);
    setRegisterOpen(true);
  };

  const close = (e) => {
    if (!loginRef.current?.contains(e.target)) {
      setLoginOpen(false);
      navigate("/");
    }
  };

  return (
    <div
      className="login-wrapper"
      style={{ display: loginOpen ? "inherit" : "none" }}
      onClick={(e) => close(e)}
    >
      <form className="login-form" ref={loginRef}>
        <h1>Login</h1>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={loginForm.email}
            onChange={(e) => setForm(e)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={(e) => setForm(e)}
          />
        </div>
        <button type="submit" onClick={(e) => login(e)}>
          Login
        </button>
        <div className="form-group">
          <p>
            Don't have an account yet?{" "}
            <span onClick={register}>Create Account</span>
          </p>
        </div>
      </form>
    </div>
  );
};

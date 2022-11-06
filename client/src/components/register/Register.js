import { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router";
import { createUser, loginUser } from "../../api/UserApi";
import CoinContext from "../../context/CoinContext";
import "./register.css";

export const Register = () => {
  const {
    loginOpen,
    setLoginOpen,
    registerOpen,
    setRegisterOpen,
    user,
    setUser,
  } = useContext(CoinContext);
  const registerRef = useRef(null);
  const navigate = useNavigate()
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  useEffect(() => {
    if (user) {
      setRegisterOpen(false);
      setLoginOpen(false)
    }
  }, [user]);

  const register = async (e) => {
    e.preventDefault();

    try {
      if (registerForm.password === registerForm.confirmPassword) {
        await createUser(registerForm);
        await loginUser(registerForm);
        const currUser = JSON.parse(localStorage.getItem("user"));
        setUser(currUser);
      }
    } catch (err) {
      console.log(err.response.data)
    }
  };

  const login = () => {
    setRegisterOpen(false);
    setLoginOpen(true);
  };

  const setForm = (e) => {
    setRegisterForm({
      ...registerForm,
      [e.target.name]: e.target.value,
    });
  };

  const close = (e) => {
    if (!registerRef.current?.contains(e.target)) {
      setRegisterOpen(false);
      navigate("/");
    }
  };

  return (
    <div
      className="register-wrapper"
      style={{ display: registerOpen ? "inherit" : "none" }}
      onClick={(e) => close(e)}
    >
      <form className="register-form" ref={registerRef}>
        <h1>Create Account</h1>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={registerForm.name}
            onChange={(e) => setForm(e)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={registerForm.email}
            onChange={(e) => setForm(e)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={registerForm.password}
            onChange={(e) => setForm(e)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={registerForm.confirmPassword}
            onChange={(e) => setForm(e)}
          />
        </div>
        <button type="submit" onClick={(e) => register(e)}>
          Create
        </button>
        <div className="form-group">
          <p>
            Already have an account? <span onClick={login}>Login</span>
          </p>
        </div>
      </form>
    </div>
  );
};

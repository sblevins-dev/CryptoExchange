import { useContext } from "react";
import CoinContext from "../../context/CoinContext";
import "./login.css";

export const Login = () => {
    const { loginOpen, setLoginOpen, setRegisterOpen } = useContext(CoinContext)

  const login = (e) => {
    e.preventDefault();
  };

  const register = () => {
    setLoginOpen(false)
    setRegisterOpen(true)
  }

  return (
    <div className="login-wrapper" style={{display: loginOpen ? 'inherit' : 'none'}}>
      <form className="login-form">
        <h1>Login</h1>
        <div className="form-group">
          <label>Email</label>
          <input type="text" />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input type="password" />
        </div>
        <button type="submit" onClick={(e) => login(e)}>
          Login
        </button>
        <div className="form-group">
          <p>Don't have an account yet? <span onClick={register}>Create Account</span></p>
        </div>
      </form>
    </div>
  );
};

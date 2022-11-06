import { useContext } from "react";
import CoinContext from "../../context/CoinContext";
import "./register.css"

export const Register = () => {
    const { loginOpen, setLoginOpen, registerOpen, setRegisterOpen } = useContext(CoinContext)

    const register = (e) => {
      e.preventDefault();
    };

    const login = () => {
        setRegisterOpen(false)
        setLoginOpen(true)
    }
  
    return (
      <div className="register-wrapper" style={{display: registerOpen ? 'inherit' : 'none'}}>
        <form className="register-form">
          <h1>Create Account</h1>
          <div className="form-group">
            <label>Name</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="text" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input type="password" />
          </div>
          <button type="submit" onClick={(e) => register(e)}>
            Create
          </button>
          <div className="form-group">
            <p>Already have an account? <span onClick={login}>Login</span></p>
          </div>
        </form>
      </div>
    );
}

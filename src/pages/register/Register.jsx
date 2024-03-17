import "./register.scss";
import video from "/assets/login/video.mp4";
import logo from "/assets/login/logo.png";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";

const Register = () => {
  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>

          <div className="textDiv">
            <h2 className="title">Find Aparts or Mates</h2>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let's Register </h3>
          </div>

          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdAlternateEmail className="icon" />
                <input type="email" id="email" placeholder="Enter Email" />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input type="text" id="username" placeholder="Enter Username" />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your Password?? <a href="">Click Here</a>
            </span>
            <div className="footerDiv flex">
              <span className="text">Have account? </span>

              <Link to={"/login"}>
                <button className="btn">Login</button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

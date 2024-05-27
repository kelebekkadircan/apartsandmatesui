import "./register.scss";
// import video from "/assets/login/video.mp4";
import logo from "/assets/login/logo.png";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdAlternateEmail } from "react-icons/md";
// import Navbar from "~/layouts/navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "~/context/auth/AuthContext";
import { useRegister } from "~/hooks/auth/useRegister";

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  console.log("REGISTER USER ", user);

  // const navigate = useNavigate();
  const { error } = useContext(AuthContext);
  const { register } = useRegister();

  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    await register(user.username, user.email, user.password);
  };

  return (
    <>
      {/* <Navbar /> */}
      <div className="registerPage flex">
        <div className="container flex">
          <div className="videoDiv">
            {/* <video src={video} autoPlay muted loop></video> */}

            <div className="textDiv">
              <h2 className="title">Find Aparts or Mates</h2>
            </div>
          </div>

          <div className="formDiv flex">
            <div className="headerDiv">
              <img src={logo} alt="Logo Image" />
              <h3>Let`s Register </h3>
            </div>

            <form action="" className="form grid">
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                  <MdAlternateEmail className="icon" />
                  <input
                    onChange={handleChange}
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                  />
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
                    name="username"
                    type="text"
                    id="username"
                    placeholder="Enter Username"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="inputDiv">
                <label htmlFor="password">Password</label>
                <div className="input flex">
                  <BsFillShieldLockFill className="icon" />
                  <input
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                type="submit"
                onClick={handleRegister}
                className="btn flex"
              >
                <span>Register</span>
                <AiOutlineSwapRight className="icon" />
              </button>
              {error}

              <span className="forgotPassword">
                Forgot your Password?? <a href="">Click Here</a>
              </span>
              <div className="footerDiv flex">
                <span className="text">Have account? </span>

                <Link to="/login">
                  <button className="btn">Login</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

import { useContext, useState } from "react";
import { AuthContext } from "~/context/auth/AuthContext";
import "./login.scss";
// import video from "/assets/login/video.mp4";
import logo from "/assets/login/logo.png";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
// import Navbar from "~/layouts/navbar/Navbar";
import { useLogin } from "~/hooks/auth/useLogin";

const Login = () => {
  const [credentials, setCredentials] = useState({
    username: undefined,
    password: undefined,
  });

  // const navigate = useNavigate();

  const { error, loading, user } = useContext(AuthContext);
  const { login } = useLogin();

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    await login(credentials?.username, credentials?.password);
  };

  console.log(credentials);
  console.log(user);

  // if (user) {
  //   navigate("/");
  // }

  return (
    <>
      {/* <Navbar /> */}
      <div className="loginPage flex">
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
              <h3>Welcome Aparts&Mates</h3>
            </div>

            <form action="" className="form grid">
              <div className="inputDiv">
                <label htmlFor="username">Username</label>
                <div className="input flex">
                  <FaUserShield className="icon" />
                  <input
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
                    type="password"
                    id="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <button
                disabled={loading}
                onClick={handleLogin}
                type="submit"
                className="btn flex"
              >
                <span>Login</span>
                <AiOutlineSwapRight className="icon" />
              </button>
              <div className="error">{error}</div>

              <span className="forgotPassword">
                Forgot your Password?? <a href="">Click Here</a>
              </span>
              <div className="footerDiv flex">
                <span className="text">Don`t you have account?</span>

                <Link to={"/register"}>
                  <button className="btn">Sign Up</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
    // <div className="login">
    //   <div className="lContainer">
    //     <input
    //       type="text"
    //       placeholder="username"
    //       id="username"
    //       className="lInput"
    //       onChange={handleChange}
    //     />
    //     <input
    //       type="password"
    //       placeholder="password"
    //       id="password"
    //       className="lInput"
    //       onChange={handleChange}
    //     />
    //     <button onClick={handleLogin} className="lButton">
    //       {" "}
    //       Login{" "}
    //     </button>
    //     {/* {error && <span>{error.message}</span>} */}
    //   </div>
    // </div>
  );
};

export default Login;

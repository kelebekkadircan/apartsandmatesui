import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '~/context/auth/AuthContext';
import useFetch from '~/hooks/fetch/useFetch';
import './login.scss';
import video from '/assets/login/video.mp4';
import logo from '/assets/login/logo.png';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import Navbar from '~/layouts/navbar/Navbar';
import newRequest from '~/utils/newRequest';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await newRequest.post('/auth/login', { username, password });
      localStorage.setItem('currentUser', JSON.stringify(res.data));
      navigate('/');
    } catch (err) {
      console.log(err.response.data);
    }
  };

  return (
    <>
      <Navbar />
      <div className="loginPage flex">
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
                    onChange={(e) => setUsername(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              <button onClick={handleLogin} type="submit" className="btn flex">
                <span>Login</span>
                <AiOutlineSwapRight className="icon" />
              </button>

              <span className="forgotPassword">
                Forgot your Password?? <a href="">Click Here</a>
              </span>
              <div className="footerDiv flex">
                <span className="text">Don't you have account?</span>

                <Link to={'/register'}>
                  <button className="btn">Sign Up</button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

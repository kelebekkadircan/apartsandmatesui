import './register.scss';
import video from '/assets/login/video.mp4';
import logo from '/assets/login/logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import { MdAlternateEmail } from 'react-icons/md';
import Navbar from '~/layouts/navbar/Navbar';
import React, { useState } from 'react';
import newRequest from '~/utils/newRequest';

const Register = () => {
  const [user, setUser] = useState({
    username: '',
    email: '',
    password: '',
  });
  console.log(user);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await newRequest.post('/auth/register', {
        ...user,
      });
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };

  /* 
    FIVER DA SELLER OLMAK İÇİN REGİSTERDA CHECKBOX VAR ONUN İÇİN YAZILIYOR BU 
    HANDLEOWNER BİZDE BİR YANSIMASI OLACAK MI EMİN OLANA KADAR KALSIN
  const handleOwner = async (e) => {
    setUser((prev) => {
      return {
        ...prev,
        isHotelOwner: e.target.checked,
      };
    });
  }; */

  return (
    <>
      <Navbar />
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

            <form action="" className="form grid" onSubmit={handleSubmit}>
              <div className="inputDiv">
                <label htmlFor="email">Email</label>
                <div className="input flex">
                  <MdAlternateEmail className="icon" />
                  <input
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter Email"
                    onChange={handleChange}
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

              <button type="submit" className="btn flex">
                <span>Register</span>
                <AiOutlineSwapRight className="icon" />
              </button>

              <div className="footerDiv flex">
                <span className="text">Hesabın var mı?</span>
                <Link to={'/login'}>
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

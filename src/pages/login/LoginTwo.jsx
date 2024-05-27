// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { AuthContext } from "~/context/auth/AuthContext";
// import { useLogin } from "~/hooks/auth/useLogin";
// import "./LoginTwo.scss";

// const LoginTwo = () => {
//   const { user } = useContext(AuthContext);
//   const { login, error } = useLogin();

//   const [usernameError, setUsernameError] = useState(null);

//   const [newUser, setNewUser] = useState({
//     username: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setNewUser((prev) => {
//       return {
//         ...prev,
//         [e.target.name]: e.target.value,
//       };
//     });
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       await login(newUser);
//       console.log("NEW USER ", newUser);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   console.log(user);

//   if (user) {
//     navigate("/");
//   }

//   console.log("Login USER ", newUser);

//   return (
//     <div className="LoginTwo">
//       <div className="LoginTwoContainer">
//         <div className="LoginTwoHeader">
//           <h1>Giriş Yap</h1>
//         </div>
//         <div className="LoginTwoForm">
//           <form onSubmit={handleLogin}>
//             <div className="LoginTwoFormItem">
//               <label htmlFor="username">Kullanıcı Adı:</label>
//               <input
//                 onChange={handleChange}
//                 type="text"
//                 id="username"
//                 name="username"
//                 placeholder="ornek: alico"
//                 required={true}
//               />
//             </div>

//             <div className="LoginTwoFormItem">
//               <label htmlFor="password">Şifreniz:</label>
//               <input
//                 onChange={handleChange}
//                 type="password"
//                 id="password"
//                 placeholder="*******"
//                 name="password"
//                 required={true}
//               />
//             </div>

//             <div className="LoginTwoFormButton">
//               <button type="submit">Giriş Yap</button>
//             </div>
//             {error && <div className="LoginTwoFormError">{error}</div>}
//             <div className="LoginFormForgotPassword">
//               <p>
//                 {" "}
//                 veya <span>Şifremi Unuttum</span>{" "}
//               </p>
//             </div>
//             <div className="LoginFormLine"></div>
//             <div className="LoginTwoFormFooter">
//               <p>
//                 Hesabınız yok mu?{" "}
//                 <span onClick={() => navigate("/register")}>Kayıt Ol</span>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginTwo;

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "~/context/auth/AuthContext";
import { useLogin } from "~/hooks/auth/useLogin";
import "./LoginTwo.scss";

const LoginTwo = () => {
  const { user } = useContext(AuthContext);
  const { login, error } = useLogin();

  const [usernameError, setUsernameError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
      // const usernamePattern = null; // 3-20 karakter, harfler, rakamlar ve alt çizgi
      setUsernameError(
        !usernamePattern.test(value)
          ? "Geçersiz kullanıcı adı 3-20 karakter olmalı  ve , harfler, rakamlar ve alt çizgi içerebilir"
          : null
      );
    }

    if (name === "password") {
      // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/; // En az 8 karakter, en az bir büyük harf, bir küçük harf ve bir rakam
      const passwordPattern = /^[a-zA-Z0-9_]{3,20}$/;
      setPasswordError(
        !passwordPattern.test(value)
          ? "Geçersiz şifre En az 8 karakter, en az bir büyük harf, bir küçük harf ve bir rakam içermelidir"
          : null
      );
    }

    setNewUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    // Form validation
    // const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
    // const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
    const passwordPattern = /^[a-zA-Z0-9_]{3,20}$/;

    const isUsernameValid = usernamePattern.test(newUser.username);
    const isPasswordValid = passwordPattern.test(newUser.password);

    if (!isUsernameValid || !isPasswordValid) {
      setUsernameError(!isUsernameValid ? "Geçersiz kullanıcı adı" : null);
      setPasswordError(!isPasswordValid ? "Geçersiz şifre" : null);
      return;
    }

    try {
      await login(newUser);
      console.log("NEW USER ", newUser);
    } catch (err) {
      console.log(err);
    }
  };

  console.log(user);

  if (user) {
    navigate("/");
  }

  console.log("Login USER ", newUser);

  return (
    <div className="LoginTwo">
      <div className="LoginTwoContainer">
        <div className="LoginTwoHeader">
          <h1>Giriş Yap</h1>
        </div>
        <div className="LoginTwoForm">
          <form onSubmit={handleLogin}>
            <div className="LoginTwoFormItem">
              <label htmlFor="username">Kullanıcı Adı:</label>
              <input
                onChange={handleChange}
                type="text"
                id="username"
                name="username"
                placeholder="örnek: alico"
                required={true}
                // pattern="^[a-zA-Z0-9_]{3,20}$"
              />
            </div>
            {usernameError && (
              <div className="LoginTwoFormError">{usernameError}</div>
            )}

            <div className="LoginTwoFormItem">
              <label htmlFor="password">Şifreniz:</label>
              <input
                onChange={handleChange}
                type="password"
                id="password"
                placeholder="*******"
                name="password"
                required={true}
                // pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              />
            </div>
            {passwordError && (
              <div className="LoginTwoFormError">{passwordError}</div>
            )}

            <div className="LoginTwoFormButton">
              <button type="submit">Giriş Yap</button>
            </div>
            {error && <div className="LoginTwoFormError">{error}</div>}
            <div className="LoginFormForgotPassword">
              <p>
                {" "}
                veya <span>Şifremi Unuttum</span>{" "}
              </p>
            </div>
            <div className="LoginFormLine"></div>
            <div className="LoginTwoFormFooter">
              <p>
                Hesabınız yok mu?{" "}
                <span onClick={() => navigate("/register")}>Kayıt Ol</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginTwo;

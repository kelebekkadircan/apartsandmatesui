/* eslint-disable no-case-declarations */
// import { AuthContext } from "~/context/auth/AuthContext";
// import "./RegisterTwo.scss";
// import { useContext, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useRegister } from "~/hooks/auth/useRegister";

// const RegisterTwo = () => {
//   const { user } = useContext(AuthContext);
//   const { register, error } = useRegister();

//   const [newUser, setNewUser] = useState({
//     username: "",
//     email: "",
//     firstname: "",
//     lastname: "",
//     phoneNumber: "",
//     password: "",
//     sex: "erkek",
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

//   const handleRegister = async (e) => {
//     e.preventDefault();

//     try {
//       await register(newUser);
//       console.log("NEW USER ", newUser);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   console.log(user);

//   if (user) {
//     navigate("/");
//   }

//   console.log("REGISTER USER ", newUser);

//   return (
//     <div className="RegisterTwo">
//       <div className="RegisterTwoContainer">
//         <div className="RegisterTwoHeader">
//           <h1>Üye Ol</h1>
//         </div>
//         <div className="RegisterTwoForm">
//           <form onSubmit={handleRegister}>
//             <div className="RegisterTwoFormItem">
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
//             <div className="RegisterTwoFormItem">
//               <label htmlFor="email">Email Adresi:</label>
//               <input
//                 onChange={handleChange}
//                 type="email"
//                 id="email"
//                 name="email"
//                 placeholder="ornek : alico@gmail.com"
//                 required={true}
//               />
//             </div>
//             <div className="RegisterTwoFormItem">
//               <label htmlFor="firstname">Adınız:</label>
//               <input
//                 onChange={handleChange}
//                 type="tornekt"
//                 id="firstname"
//                 name="firstname"
//                 placeholder="ornek : Ali"
//                 required={true}
//               />
//             </div>
//             <div className="RegisterTwoFormItem">
//               <label htmlFor="lastname">Soyadınız:</label>
//               <input
//                 onChange={handleChange}
//                 type="lastname"
//                 id="lastname"
//                 name="lastname"
//                 placeholder="ornek : Can"
//                 required={true}
//               />
//             </div>
//             <div className="RegisterTwoFormItem">
//               <label htmlFor="phoneNumber">Telefon Numaranız:</label>
//               <input
//                 onChange={handleChange}
//                 type="phoneNumber"
//                 id="phoneNumber"
//                 placeholder="ornek : 05369847114"
//                 name="phoneNumber"
//                 required={true}
//               />
//             </div>
//             <div className="RegisterTwoFormItem">
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
//             <div className="RegisterTwoFormItem">
//               <label htmlFor="sex">Cinsiyetinizi Seçiniz:</label>
//               <select
//                 onChange={handleChange}
//                 id="sex"
//                 name="sex"
//                 defaultValue="erkek"
//                 required={true}
//               >
//                 <option name="erkek" value="erkek" id="erkek">
//                   Erkek
//                 </option>
//                 <option name="kadin" value="kadin" id="kadin">
//                   Kadın
//                 </option>
//               </select>
//             </div>
//             <div className="RegisterTwoFormButton">
//               <button type="submit">Kayıt Ol</button>
//             </div>
//             {error && <div className="RegisterTwoError">{error}</div>}
//             <div className="RegisterTwoFormTerm">
//               <p>
//                 Kaydolurken{" "}
//                 <span onClick={() => navigate("/terms")}>
//                   Kullanım Şartlarımızı
//                 </span>{" "}
//                 ve{" "}
//                 <span onClick={() => navigate("/terms")}>
//                   Gizlilik Politikamızı
//                 </span>{" "}
//                 kabul edersiniz
//               </p>
//             </div>
//             <div className="RegisterTwoLine"></div>
//             <div className="RegisterTwoFormFooter">
//               <p>
//                 Zaten Hesabınız var mı?{" "}
//                 <span onClick={() => navigate("/login")}>Oturum Açın</span>
//               </p>
//             </div>
//             <div className="RegisterTwoFormFooter">
//               <p>
//                 Oteliniz var mı?{" "}
//                 <span onClick={() => navigate("/dorm")}>Talep Oluşturun</span>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default RegisterTwo;

import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "~/context/auth/AuthContext";
import { useRegister } from "~/hooks/auth/useRegister";
import "./RegisterTwo.scss";

const RegisterTwo = () => {
  const { user } = useContext(AuthContext);
  const { register, errorRegister } = useRegister();
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    firstname: "",
    lastname: "",
    phoneNumber: "",
    password: "",
    sex: "erkek",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    let error = null;

    switch (name) {
      case "username":
        const usernamePattern = /^[a-zA-Z0-9_]{3,20}$/;
        error = !usernamePattern.test(value)
          ? "Geçersiz kullanıcı adı: 3-20 karakter olmalı ve harfler, rakamlar ve alt çizgi içerebilir."
          : null;
        break;
      case "email":
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        error = !emailPattern.test(value) ? "Geçersiz email adresi." : null;
        break;
      case "phoneNumber":
        const phonePattern = /^[0-9]{10,15}$/;
        error = !phonePattern.test(value)
          ? "Geçersiz telefon numarası: 10-15 rakam olmalı."
          : null;
        break;
      case "password":
        const passwordPattern =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        error = !passwordPattern.test(value)
          ? "Geçersiz şifre: En az 8 karakter, bir büyük harf, bir küçük harf ve bir rakam içermelidir."
          : null;
        break;
      default:
        break;
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
    setNewUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    const isFormValid =
      Object.values(errors).every((error) => !error) &&
      Object.values(newUser).every((value) => value);

    if (!isFormValid) {
      alert("Lütfen formu doğru ve eksiksiz doldurun.");
      return;
    }

    try {
      await register(newUser);
      console.log("NEW USER ", newUser);
    } catch (err) {
      console.log(err);
    }
  };

  if (user) {
    navigate("/");
  }

  return (
    <div className="RegisterTwo">
      <div className="RegisterTwoContainer">
        <div className="RegisterTwoHeader">
          <h1>Üye Ol</h1>
        </div>
        <div className="RegisterTwoForm">
          <form onSubmit={handleRegister}>
            <div className="RegisterTwoFormItem">
              <label htmlFor="username">Kullanıcı Adı:</label>
              <input
                onChange={handleChange}
                type="text"
                id="username"
                name="username"
                placeholder="örnek: alico"
                required={true}
                pattern="^[a-zA-Z0-9_]{3,20}$"
              />
            </div>
            {errors.username && (
              <div className="RegisterTwoError">{errors.username}</div>
            )}

            <div className="RegisterTwoFormItem">
              <label htmlFor="email">Email Adresi:</label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="örnek: alico@gmail.com"
                required={true}
                pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
              />
            </div>
            {errors.email && (
              <div className="RegisterTwoError">{errors.email}</div>
            )}

            <div className="RegisterTwoFormItem">
              <label htmlFor="firstname">Adınız:</label>
              <input
                onChange={handleChange}
                type="text"
                id="firstname"
                name="firstname"
                placeholder="örnek: Ali"
                required={true}
              />
            </div>

            <div className="RegisterTwoFormItem">
              <label htmlFor="lastname">Soyadınız:</label>
              <input
                onChange={handleChange}
                type="text"
                id="lastname"
                name="lastname"
                placeholder="örnek: Can"
                required={true}
              />
            </div>

            <div className="RegisterTwoFormItem">
              <label htmlFor="phoneNumber">Telefon Numaranız:</label>
              <input
                onChange={handleChange}
                type="tel"
                id="phoneNumber"
                placeholder="örnek: 05369847114"
                name="phoneNumber"
                required={true}
                pattern="^[0-9]{10,15}$"
              />
            </div>
            {errors.phoneNumber && (
              <div className="RegisterTwoError">{errors.phoneNumber}</div>
            )}

            <div className="RegisterTwoFormItem">
              <label htmlFor="password">Şifreniz:</label>
              <input
                onChange={handleChange}
                type="password"
                id="password"
                placeholder="*******"
                name="password"
                required={true}
                pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
              />
            </div>
            {errors.password && (
              <div className="RegisterTwoError">{errors.password}</div>
            )}

            <div className="RegisterTwoFormItem">
              <label htmlFor="sex">Cinsiyetinizi Seçiniz:</label>
              <select
                onChange={handleChange}
                id="sex"
                name="sex"
                defaultValue="erkek"
                required={true}
              >
                <option name="erkek" value="erkek" id="erkek">
                  Erkek
                </option>
                <option name="kadin" value="kadin" id="kadin">
                  Kadın
                </option>
              </select>
            </div>

            <div className="RegisterTwoFormButton">
              <button type="submit">Kayıt Ol</button>
            </div>
            {errorRegister && (
              <div className="RegisterTwoError">{errorRegister}</div>
            )}
            <div className="RegisterTwoFormTerm">
              <p>
                Kaydolurken{" "}
                <span onClick={() => navigate("/terms")}>
                  Kullanım Şartlarımızı
                </span>{" "}
                ve{" "}
                <span onClick={() => navigate("/terms")}>
                  Gizlilik Politikamızı
                </span>{" "}
                kabul edersiniz
              </p>
            </div>
            <div className="RegisterTwoLine"></div>
            <div className="RegisterTwoFormFooter">
              <p>
                Zaten Hesabınız var mı?{" "}
                <span onClick={() => navigate("/login")}>Oturum Açın</span>
              </p>
            </div>
            <div className="RegisterTwoFormFooter">
              <p>
                Oteliniz var mı?{" "}
                <span onClick={() => navigate("/dorm")}>Talep Oluşturun</span>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterTwo;

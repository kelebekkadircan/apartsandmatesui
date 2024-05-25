// import { useAuthContext } from "~/hooks/auth/useAuthContext";
// import "./updateProfile.scss";
// import UploadWidget from "~/components/uploadWidget/UploadWidget";
// import { newRequest } from "~/utils/newRequest";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";

// const UpdateProfile = () => {
//   const { user } = useAuthContext();

//   const [error, setError] = useState("");
//   const [avatar, setAvatar] = useState([]);
//   const [currentUser, setCurrentUser] = useState([]);

//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData(e.target);

//     const {
//       username,
//       email,
//       password,
//       phoneNumber,
//       newPassword,
//       confirmNewPassword,
//       firstname,
//       lastname,
//     } = Object.fromEntries(formData);
//     console.log(
//       username,
//       email,
//       password,
//       phoneNumber,
//       newPassword,
//       confirmNewPassword,
//       firstname,
//       lastname
//     );

//     try {
//       const res = await newRequest.put(`/users/${user?._id}`, {
//         username,
//         email,
//         password,
//         avatar: avatar[0],
//       });
//       localStorage.setItem("user", JSON.stringify(res?.data));
//       navigate(`/profile/${user?._id}`);
//     } catch (err) {
//       console.log(err);
//       setError(err.response.data.message);
//     }
//   };

//   useEffect(() => {
//     const fetchUser = async () => {
//       const res = await newRequest.get(`users/auth/me`);
//       setCurrentUser(res.data);
//     };
//     fetchUser();
//   }, []);

//   console.log(user);
//   console.log(currentUser);

//   return (
//     <div className="profileUpdatePage">
//       <div className="formContainer">
//         <form onSubmit={handleSubmit}>
//           <h1 className="updateProfileTitle" style={{ marginTop: "20px" }}>
//             Profili Güncelle
//           </h1>
//           <div className="itemWrapper">
//             <div className="item">
//               <label htmlFor="username">Kullanıcı Adı</label>
//               <input
//                 id="username"
//                 name="username"
//                 type="text"
//                 defaultValue={currentUser?.username}
//               />
//             </div>
//             <div className="item">
//               <label htmlFor="firstname">Adı</label>
//               <input
//                 id="firstname"
//                 name="firstname"
//                 type="text"
//                 defaultValue={currentUser?.firstname}
//               />
//             </div>
//             <div className="item">
//               <label htmlFor="lastname">Soyadı</label>
//               <input
//                 id="lastname"
//                 name="lastname"
//                 type="text"
//                 defaultValue={currentUser?.lastname}
//               />
//             </div>
//             <div className="item">
//               <label htmlFor="phoneNumber">Telefon Numarası</label>
//               <input
//                 id="phoneNumber"
//                 name="phoneNumber"
//                 type="text"
//                 defaultValue={currentUser?.phoneNumber}
//               />
//             </div>
//             <div className="item">
//               <label htmlFor="email">Email</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="email"
//                 defaultValue={currentUser?.email}
//               />
//             </div>
//             <div className="item">
//               <label htmlFor="password">Eski Şifreniz</label>
//               <input
//                 id="password"
//                 required
//                 name="password"
//                 type="password"
//                 // placeholder="Şifrenizi Giriniz 1 harf 1 sayı 1 özel karakter en az 8 haneli"
//                 // alt="Şifrenizi Giriniz 1 harf 1 sayı 1 özel karakter en az 8 haneli"
//                 // pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[._!@#$%^&*])[a-zA-Z0-9!@#$%^&._*]{8,20}$"
//               />
//               {/* id: 4,
//       name: "password",
//       type: "password",
//       placeholder: "Password",
//       errorMessage:
//         "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
//       label: "Password",
//       pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[._!@#$%^&*])[a-zA-Z0-9!@#$%^&._*]{8,20}$`,
//       required: true, */}
//             </div>
//             <div className="item">
//               <label htmlFor="newPassword">Yeni Şifreniz</label>
//               <input
//                 id="newPassword"
//                 required
//                 name="newPassword"
//                 type="password"
//                 // placeholder="Şifrenizi Giriniz 1 harf 1 sayı 1 özel karakter en az 8 haneli"
//                 // alt="Şifrenizi Giriniz 1 harf 1 sayı 1 özel karakter en az 8 haneli"
//                 // pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[._!@#$%^&*])[a-zA-Z0-9!@#$%^&._*]{8,20}$"
//               />
//             </div>
//             <div className="item">
//               <label htmlFor="confirmNewPassword">
//                 Yeni Şifrenizi Tekrar Giriniz
//               </label>
//               <input
//                 id="confirmNewPassword"
//                 required
//                 name="confirmNewPassword"
//                 type="password"
//                 // placeholder="Şifrenizi Giriniz 1 harf 1 sayı 1 özel karakter en az 8 haneli"
//                 // alt="Şifrenizi Giriniz 1 harf 1 sayı 1 özel karakter en az 8 haneli"
//                 // pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[._!@#$%^&*])[a-zA-Z0-9!@#$%^&._*]{8,20}$"
//               />
//             </div>
//           </div>

//           <button style={{ marginBottom: "20px" }}>Update</button>
//           {error && <span>error</span>}
//         </form>
//       </div>
//       <div className="sideContainer">
//         <img
//           src={avatar[0] || currentUser?.avatar || "/noavatar.jpg"}
//           alt=""
//           className="avatar"
//         />
//         <UploadWidget
//           uwConfig={{
//             cloudName: "debzpp4al",
//             uploadPreset: "apartsandmates",
//             multiple: false,
//             maxImageFileSize: 2000000,
//             folder: "avatars",
//           }}
//           setState={setAvatar}
//         />
//       </div>
//     </div>
//   );
// };

// export default UpdateProfile;

import { useAuthContext } from "~/hooks/auth/useAuthContext";
import "./updateProfile.scss";
import UploadWidget from "~/components/uploadWidget/UploadWidget";
import { newRequest } from "~/utils/newRequest";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";

const UpdateProfile = () => {
  const { user } = useAuthContext();

  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const {
      username,
      email,
      password,
      phoneNumber,
      newPassword,
      confirmNewPassword,
      firstname,
      lastname,
    } = Object.fromEntries(formData);

    // Password confirmation validation
    if (newPassword !== confirmNewPassword) {
      setError("New passwords do not match!");
      return;
    }

    try {
      const res = await newRequest.put(`/users/update/${currentUser?._id}`, {
        username,
        email,
        password,
        phoneNumber,
        newPassword,
        firstname,
        lastname,
        avatar: avatar[0],
        confirmNewPassword,
      });
      console.log(res.data);
      localStorage.setItem("user", JSON.stringify(res?.data));
      navigate(`/profile/${user?._id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
      setError(err.response?.data?.message || "An error occurred");
    }
  };

  const fetchUser = useCallback(async () => {
    try {
      const res = await newRequest.get(`users/auth/me`);
      setCurrentUser(res.data);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1 className="updateProfileTitle">Profili Güncelle</h1>
          <div className="itemWrapper">
            <div className="item">
              <label htmlFor="username">Kullanıcı Adı</label>
              <input
                id="username"
                name="username"
                type="text"
                defaultValue={currentUser?.username || ""}
              />
            </div>
            <div className="item">
              <label htmlFor="firstname">Adı</label>
              <input
                id="firstname"
                name="firstname"
                type="text"
                defaultValue={currentUser?.firstname || ""}
              />
            </div>
            <div className="item">
              <label htmlFor="lastname">Soyadı</label>
              <input
                id="lastname"
                name="lastname"
                type="text"
                defaultValue={currentUser?.lastname || ""}
              />
            </div>
            <div className="item">
              <label htmlFor="phoneNumber">Telefon Numarası</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                defaultValue={currentUser?.phoneNumber || ""}
              />
            </div>
            <div className="item">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                defaultValue={currentUser?.email || ""}
              />
            </div>
            <div className="item">
              <label htmlFor="password">Eski Şifreniz</label>
              <input id="password" name="password" type="password" required />
            </div>
            <div className="item">
              <label htmlFor="newPassword">Yeni Şifreniz</label>
              <input id="newPassword" name="newPassword" type="password" />
            </div>
            <div className="item">
              <label htmlFor="confirmNewPassword">
                Yeni Şifrenizi Tekrar Giriniz
              </label>
              <input
                id="confirmNewPassword"
                name="confirmNewPassword"
                type="password"
              />
            </div>
          </div>
          <button type="submit">Update</button>
          {error && <span className="error">{error}</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar[0] || currentUser?.avatar || "/noavatar.jpg"}
          alt="avatar"
          className="avatar"
        />
        <UploadWidget
          uwConfig={{
            cloudName: "debzpp4al",
            uploadPreset: "apartsandmates",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "avatars",
          }}
          setState={setAvatar}
        />
      </div>
    </div>
  );
};

export default UpdateProfile;

import { useAuthContext } from "~/hooks/auth/useAuthContext";
import "./updateProfile.scss";
import UploadWidget from "~/components/uploadWidget/UploadWidget";
import { newRequest } from "~/utils/newRequest";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const UpdateProfile = () => {
  const { user } = useAuthContext();

  const [error, setError] = useState("");
  const [avatar, setAvatar] = useState([]);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const res = await newRequest.put(`/users/${user?.details?._id}`, {
        username,
        email,
        password,
        avatar: avatar[0],
      });
      localStorage.setItem("user", JSON.stringify(res?.data));
      navigate(`/profile/${user?.details?._id}`);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  console.log(user);

  return (
    <div className="profileUpdatePage">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Update Profile</h1>
          <div className="item">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              name="username"
              type="text"
              defaultValue={user?.details?.username}
            />
          </div>
          <div className="item">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              defaultValue={user?.details?.email}
            />
          </div>
          <div className="item">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              required
              name="password"
              type="password"
              // placeholder="Şifrenizi Giriniz 1 harf 1 sayı 1 özel karakter en az 8 haneli"
              // alt="Şifrenizi Giriniz 1 harf 1 sayı 1 özel karakter en az 8 haneli"
              // pattern="^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[._!@#$%^&*])[a-zA-Z0-9!@#$%^&._*]{8,20}$"
            />
            {/* id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[._!@#$%^&*])[a-zA-Z0-9!@#$%^&._*]{8,20}$`,
      required: true, */}
          </div>
          <button>Update</button>
          {error && <span>error</span>}
        </form>
      </div>
      <div className="sideContainer">
        <img
          src={avatar[0] || user?.details?.avatar || "/noavatar.jpg"}
          alt=""
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

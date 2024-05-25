import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "~/context/auth/AuthContext";
import { useLogin } from "~/hooks/auth/useLogin";
import "./LoginTwo.scss";

const LoginTwo = () => {
  const { user } = useContext(AuthContext);
  const { login } = useLogin();

  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setNewUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(newUser);
      console.log("NEW USER ", newUser);
    } catch (err) {
      console.log(err);
      setError(err.response.data.message);
    }
  };

  console.log(user);

  if (user) {
    navigate("/");
  }

  console.log("Login USER ", newUser);

  return (
    <div className="RegisterTwo">
      <div className="RegisterTwoContainer">
        <div className="RegisterTwoHeader">
          <h1>Giriş Yap</h1>
        </div>
        <div className="RegisterTwoForm">
          <form onSubmit={handleLogin}>
            <div className="RegisterTwoFormItem">
              <label htmlFor="username">Kullanıcı Adı:</label>
              <input
                onChange={handleChange}
                type="text"
                id="username"
                name="username"
                placeholder="ornek: alico"
                required={true}
              />
            </div>

            <div className="RegisterTwoFormItem">
              <label htmlFor="password">Şifreniz:</label>
              <input
                onChange={handleChange}
                type="password"
                id="password"
                placeholder="*******"
                name="password"
                required={true}
              />
            </div>

            <div className="RegisterTwoFormButton">
              <button type="submit">Giriş Yap</button>
              <span>{error && <div>{error}</div>}</span>
            </div>
            <div className="RegisterFormForgotPassword">
              <p>
                {" "}
                veya <span>Şifremi Unuttum</span>{" "}
              </p>
            </div>
            <div className="RegisterFormLine"></div>
            <div className="RegisterTwoFormFooter">
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

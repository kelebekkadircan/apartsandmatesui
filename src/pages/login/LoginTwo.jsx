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
                placeholder="ornek: alico"
                required={true}
              />
            </div>

            <div className="LoginTwoFormItem">
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

            <div className="LoginTwoFormButton">
              <button type="submit">Giriş Yap</button>
              <span>{error && <div>{error}</div>}</span>
            </div>
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

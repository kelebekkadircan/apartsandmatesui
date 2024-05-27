import { useNavigate } from "react-router-dom";
import "./TalepForm.scss";
import { useContext, useState } from "react";
import { AuthContext } from "~/context/auth/AuthContext";
import { newRequest } from "~/utils/newRequest";
const TalepForm = () => {
  const { user } = useContext(AuthContext);
  const [desc, setDesc] = useState("");
  const [error, setError] = useState(null);

  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    title: "",
    address: "",
    desc: desc || "",
    phoneNumber: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleTalep = async (e) => {
    e.preventDefault();
    newUser.desc = desc;

    try {
      const res = await newRequest.post(
        "users/submithotelrequest/form",
        newUser
      );
      console.log(res);
      if (res.status === 200) {
        navigate("/");
      }
    } catch (err) {
      setError(err.response.data.message);
    }
  };

  console.log(user);
  console.log("REGISTER USER ", newUser);

  return (
    <div className="RegisterTwoTalep">
      <div className="RegisterTwoContainer">
        <div className="RegisterTwoHeader">
          <h1>Otel Kayıt Talep Formu</h1>
        </div>
        <div className="RegisterTwoForm">
          <form onSubmit={handleTalep}>
            <div className="RegisterTwoFormItem">
              <label htmlFor="username">Adınız:</label>
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
              <label htmlFor="email">Email Adresi:</label>
              <input
                onChange={handleChange}
                type="email"
                id="email"
                name="email"
                placeholder="ornek : alico@gmail.com"
                required={true}
              />
            </div>
            <div className="RegisterTwoFormItem">
              <label htmlFor="title">Otel Adı:</label>
              <input
                onChange={handleChange}
                type="text"
                id="title"
                name="title"
                placeholder="ornek : Grand Hotel"
                required={true}
              />
            </div>
            <div className="RegisterTwoFormItem">
              <label htmlFor="address">Otel Adresi:</label>
              <input
                onChange={handleChange}
                type="text"
                id="address"
                name="address"
                placeholder="ornek : Saray Mah. 123. Sokak No: 5..."
                required={true}
              />
            </div>

            <div className="RegisterTwoFormItem">
              <label htmlFor="phoneNumber">Telefon Numaranız:</label>
              <input
                onChange={handleChange}
                type="text"
                id="phoneNumber"
                placeholder="örnek : 05369847114"
                name="phoneNumber"
                required={true}
              />
            </div>

            <div
              style={{ flexDirection: "column" }}
              className="RegisterTwoFormItem"
            >
              <label
                style={{
                  alignItems: "flex-start",
                  width: "100%",
                }}
                htmlFor="desc"
              >
                Otelinizden Genel Olarak Bahsedin:
              </label>
              <textarea
                name="desc"
                id="desc"
                onChange={(e) => setDesc(e.target.value)}
                placeholder="örnek : Mavi Deniz Oteli, Akdeniz'in muhteşem kıyısında, misafirlerine konfor ve lüksü bir arada sunan bir butik oteldir. Modern ve şık tasarımıyla dikkat çeken otelimiz, huzurlu bir tatil arayan misafirler için ideal bir konaklama deneyimi sunar."
              />
            </div>

            <div className="RegisterTwoFormButton">
              <button type="submit">Gönder</button>
            </div>
            {error && <div className="RegisterTwoError">{error}</div>}
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
            {user && (
              <div className="RegisterTwoFormFooter">
                <p>
                  Zaten Hesabınız var mı?{" "}
                  <span onClick={() => navigate("/login")}>Oturum Açın</span>
                </p>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default TalepForm;

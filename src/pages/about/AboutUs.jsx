import "./AboutUs.scss";

const AboutUs = () => {
  return (
    <div className="aboutUs">
      <div className="aboutUsContainer">
        <div className="aboutUsContent">
          <div className="aboutUsTitle">
            <h1>
              {/* Neden <span style={{ color: "#4a5aa3" }}>Aparts</span> &{" "}
              <span style={{ color: "#0097b2" }}>Mates</span>{" "} 
              */}
              <span style={{ color: "#4a5aa3" }}>HAKKIMIZDA</span>
            </h1>
          </div>
          <div className="aboutUsDescription">a</div>
        </div>
        <div className="aboutUsProfile">
          <h1>Biz Kimiz</h1>
          <div className="aboutUsProfileWrapper">
            <div className="aboutUsProfileItem">
              <div className="aboutUsProfileImage">
                <img
                  src="https://images.pexels.com/photos/2049422/pexels-photo-2049422.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt=""
                />
              </div>
              <div className="aboutUsProfileContent">
                <h2>Kadircan Kelebek</h2>
                <p>Bilgisayar Mühendisi</p>
              </div>
            </div>
            <div className="aboutUsProfileItem">
              <div className="aboutUsProfileImage">
                <img
                  src="https://images.pexels.com/photos/1496373/pexels-photo-1496373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="aboutUsProfileContent">
                <h2>İbrahim Baran Ögel</h2>
                <p>Bilgisayar Mühendisi</p>
              </div>
            </div>
            <div className="aboutUsProfileItem">
              <div className="aboutUsProfileImage">
                <img
                  src="https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt=""
                />
              </div>
              <div className="aboutUsProfileContent">
                <h2>Barış Özgür Yaşar</h2>
                <p>Bilgisayar Mühendisi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

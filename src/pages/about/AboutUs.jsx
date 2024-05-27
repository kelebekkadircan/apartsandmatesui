/* eslint-disable react/no-unescaped-entities */
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
          <div className="aboutUsDescription">
            <p>
              <b>Aparts&Mates</b> olarak, Alanya ilçesindeki öğrencilerin
              konaklama arayışlarını kolaylaştırmak için yola çıktık. Öğrencilik
              yıllarının, yeni yerler keşfetmek, yeni insanlarla tanışmak ve
              kendini keşfetmek için eşsiz bir fırsat olduğuna inanıyoruz.
              Öğrenci hayatının getirdiği heyecanı ve zorlukları bizzat
              deneyimleyen bir ekip olarak, bu deneyimlerin keyfini çıkarırken
              konaklama gibi detaylarla uğraşmak, zaman zaman stresli olabilir.
              İşte bu noktada, Aparts&Mates olarak devreye giriyoruz.
              Yaşadığımız zorluklardan öğrendiklerimizle bu ihtiyaca çözüm
              bulmak için bir araya geldik ve Aparts&Mates sitesini oluşturduk.
            </p>
            <br />
            <p>
              <b>Vizyonumuz:</b>Öğrencilerin konaklama arayışlarını sıkıntısız,
              güvenilir ve keyifli hale getirerek, onların eğitim hayatlarına
              odaklanmalarını sağlamak.
            </p>
            <br />
            <p>
              <b>Misyonumuz:</b>Alanya'daki öğrenciler için uygun, ekonomik ve
              kaliteli konaklama seçeneklerini sunarak, onların yaşam
              standartlarını yükseltmek ve sosyal etkileşimlerini artırmak.
            </p>
            <br />
            <p>
              <b>Aparts&Mates</b> olarak, öğrencilerin konaklama süreçlerini
              kolaylaştırmak için elimizden gelenin en iyisini yapmaya
              kararlıyız. Sizlerin destek ve güveniyle, daha nice öğrenciye
              keyifli ve güvenilir bir konaklama deneyimi sunmayı hedefliyoruz.
            </p>
          </div>
        </div>
        <div className="aboutUsProfile">
          <h1>Biz Kimiz</h1>
          <div className="aboutUsProfileWrapper">
            <div className="aboutUsProfileItem">
              <div className="aboutUsProfileImage">
                <img src="/aboutUsKadir.jpg" alt="" />
              </div>
              <div className="aboutUsProfileContent">
                <h2>Kadircan Kelebek</h2>
                <p>Bilgisayar Mühendisi</p>
              </div>
            </div>
            <div className="aboutUsProfileItem">
              <div className="aboutUsProfileImage">
                <img src="/aboutUsBaran.jpg" alt="" />
              </div>
              <div className="aboutUsProfileContent">
                <h2>İbrahim Baran Ögel</h2>
                <p>Bilgisayar Mühendisi</p>
              </div>
            </div>
            <div className="aboutUsProfileItem">
              <div className="aboutUsProfileImage">
                <img src="/aboutUsBaris.jpg" alt="" />
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

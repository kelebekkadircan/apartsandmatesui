import "./footer.scss";
import { FaFacebook, FaSearch, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

import { Link, useLocation } from "react-router-dom";
const Footer = () => {
  const location = useLocation();
  const loc = location.pathname.split("/")[1];

  return loc === "login" ? null : loc === "register" ? null : loc ===
    "dorm" ? null : (
    <div className="footer">
      {/* <div className="footerTop">
        <div className="topContainer">
          <div className="topLeft">
            <Link className="topLeftLink">Apartımı Ekle</Link>
          </div>
          <div className="topRight">right</div>
        </div>
      </div> */}
      <div className="footerContainer">
        <div className="footerWrapper">
          <div className="footerInfo">
            <Link className="link">
              {/* <img
                src="https://www.yurtlarburada.com/img/logo-footer.svg"
                alt=""
              /> */}
              <h1>
                Aparts<span style={{ color: "#1C5C90" }}>&</span>{" "}
                <span style={{ color: "#0097B2" }}> Mates</span>
              </h1>
            </Link>
            <div className="infoTxt">
              <p>
                Alanya Alaaddin Keykubat Üniversitesi Teknoloji Gelistirme
                Bölgesi Üniversite Cad. Akademi Yolu Alanya, Antalya
              </p>
            </div>
            <div className="socialGroup">
              <Link className="item">
                <div className="iconFacebook">
                  <FaFacebook />
                </div>
              </Link>
              <Link className="item">
                <div className="iconTwitter">
                  <FaXTwitter />
                </div>
              </Link>
              <Link className="item">
                <div className="iconInstagram">
                  <FaInstagram />
                </div>
              </Link>
            </div>
          </div>
          <div className="footerList">
            <div className="footerCol">
              <div className="footerLinks">
                <div className="footerLinksTitle">
                  <span className="color-blue">Hızlı Arama</span> Metodları
                </div>
                <Link className="footerLinksItem">
                  <div className="iconContainer">
                    <FaSearch />
                  </div>
                  <div className="linkTxt">Bölgeye Göre Ara</div>
                </Link>
                <Link className="footerLinksItem">
                  <div className="iconContainer">
                    <FaSearch />
                  </div>
                  <div className="linkTxt">Üniversiteye Göre Ara</div>
                </Link>
                <Link className="footerLinksItem">
                  <div className="iconContainer">
                    <FaSearch />
                  </div>
                  <div className="linkTxt">Apart Adına Göre Ara</div>
                </Link>
                <Link className="footerLinksItem">
                  <div className="iconContainer">
                    <FaSearch />
                  </div>
                  <div className="linkTxt">Apart Fiyatları</div>
                </Link>
              </div>
            </div>
            <div className="footerCol">
              <div className="footerLinks">
                <div className="footerLinksTitle">
                  <span className="color-blue">Apartlar İçin</span> İlanlar
                </div>
                <Link className="footerLinksItem">
                  <div className="linkTxt">Alım Talepleri</div>
                </Link>
                <Link className="footerLinksItem">
                  <div className="linkTxt">Eleman Arayanlar</div>
                </Link>
                <Link className="footerLinksItem">
                  <div className="linkTxt">2. El Yurt Araçları</div>
                </Link>
                <Link className="footerLinksItem">
                  <div className="linkTxt">Araç İlanları</div>
                </Link>
              </div>
            </div>
            <div className="footerCol">
              <div className="footerLinks">
                <Link className="footerLinksItem">
                  <div className="linkTxt">Hakkımızda</div>
                </Link>
                <Link className="footerLinksItem">
                  <div className="linkTxt">S.S.S</div>
                </Link>
                <Link className="footerLinksItem">
                  <div className="linkTxt">Blog</div>
                </Link>
                <Link className="footerLinksItem">
                  <div className="linkTxt">İletişim</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footerSecond">
          <div className="clearFix"></div>
          <ul className="contractLinks">
            <li>
              <Link className="links">
                <strong>Gizlilik Politikası</strong>
              </Link>
            </li>
            <li>
              <Link className="links">
                <strong>İptal ve İade Koşulları</strong>
              </Link>
            </li>
            <li>
              <Link className="links">
                <strong>Mesafeli Satış Sözleşmesi</strong>
              </Link>
            </li>
            <li>
              <Link className="links">
                <strong>Kullanıcı Sözleşmesi</strong>
              </Link>
            </li>
          </ul>
          <div className="clearFix"></div>
          <strong className="copyrights">
            {" "}
            &copy; 2024 apartsandmates.com Tüm Hakları Saklıdır.{" "}
          </strong>
        </div>
      </div>
    </div>
  );
};

export default Footer;

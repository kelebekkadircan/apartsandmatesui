import Slider from "~/components/singlePageSlider/SinglePageSlider";
// import { userData } from "~/lib/dummydata";
import "./singlePageHotelDetails.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaBowlFood,
  FaWifi,
  FaInternetExplorer,
} from "react-icons/fa6";
import { FaBed, FaHeadphones, FaPhone } from "react-icons/fa";

const HotelDetail = ({
  setLoading,
  loading,
  singlePostData,
  setError,
  error,
}) => {
  const [detailData, setDetailData] = useState(singlePostData || []);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      setDetailData(singlePostData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [singlePostData, setLoading, setError]);
  // console.log(singlePostData, "HotelDetailSINGLEPOSTDATA");
  if (error) {
    return <div>Error</div>;
  }
  // console.log(detailData, "HotelDetailDETAILDATA");
  return !loading ? (
    <>
      <div className="details">
        <div className="wrapper">
          <div className="hotelDetailBreadcrumb">
            <ul>
              <li>
                <Link to="/">
                  <span>apartsandmates.com</span>
                </Link>{" "}
                <span>/</span>{" "}
              </li>
              <li>
                {" "}
                <Link to={`/list?district=${detailData.district}`}>
                  <span style={{ textTransform: "capitalize" }}>
                    {" "}
                    {detailData.district} Öğrenci Apartları
                  </span>
                </Link>{" "}
              </li>
            </ul>
          </div>

          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <Slider images={detailData.images} />
          )} */}
          <Slider images={detailData?.images} />
          <div className="hotelDetailTop">
            <div className="hotelDetailLogo">
              <img src={detailData?.logo} alt="" />
            </div>
            <div className="hotelDetailContent">
              <div className="hotelDetailContentTitle">{detailData?.name}</div>
              <div className="hotelDetailContentLocation">
                <span className="hotelDetailContentLocationIcon">
                  <FaLocationDot />
                </span>
                <div className="hotelDetailContentLocationTitle">
                  {detailData?.district}
                </div>
              </div>
            </div>
          </div>
          <div className="hotelDetailBottom">
            <div className="hotelDetailBottomInfo">
              <div className="hotelDetailBottomInfoItem">
                <div className="hotelDetailBottomInfoItemIcon">
                  <FaBed />
                </div>
                <div className="hotelDetailBottomInfoItemText">
                  {detailData?.bedCount} Yatak
                </div>
              </div>
              <div className="hotelDetailBottomInfoItem">
                <div className="hotelDetailBottomInfoItemIcon">
                  <FaBowlFood />{" "}
                </div>
                <div className="hotelDetailBottomInfoItemText">2 Öğün</div>
              </div>
              <div className="hotelDetailBottomInfoItem">
                <div className="hotelDetailBottomInfoItemIcon">
                  <FaWifi />
                </div>
                <div className="hotelDetailBottomInfoItemText">Wi-Fi Var</div>
              </div>
            </div>
            <div className="hotelDetailBottomCustomer">
              <div className="hotelDetailBottomCustomerContent">
                <div className="hotelDetailBottomCustomerContentName">
                  {detailData?.ownerName}
                </div>
                <div className="hotelDetailBottomCustomerContentBranch">
                  Yetkili Danışman
                </div>
              </div>
              <div className="hotelDetailBottomCustomerIcon">
                <FaHeadphones />
              </div>
            </div>
          </div>
          <div className="hotelInfoContent">
            <div className="hotelInfoAddress">
              <div className="hotelInfoAddressIcon">
                {" "}
                <FaLocationDot />{" "}
              </div>
              <div className="hotelInfoAddressTitle">
                {detailData?.address}{" "}
              </div>
            </div>
            <div className="hotelInfoDoubleContent">
              <div className="hotelInfoDoubleContentAddress">
                <div className="hotelInfoDoubleContentAddressIcon">
                  {" "}
                  <FaInternetExplorer />{" "}
                </div>
                <div className="hotelInfoDoubleContentAddressTitle">
                  www.kadircan.com
                </div>
              </div>
              <div className="hotelInfoDoubleContentAddress">
                <div className="hotelInfoDoubleContentAddressIcon">
                  {" "}
                  <FaPhone />{" "}
                </div>
                <div className="hotelInfoDoubleContentAddressTitle">
                  {detailData?.phoneNumber}{" "}
                </div>
              </div>
            </div>
            <div className={`hotelInfoCollapse  ${isOpen && "uncollapse"} `}>
              <div className="hotelInfoCollapseContent">
                <p>
                  Vatan Caddesi’nde bulunan kendi binasında ilk şubesini 2020
                  yılında açmıştır. Amacı bu ülkenin geleceğini belirleyecek
                  öğrencilerin güler yüzle, konforlu, korunaklı ve okullarına
                  yakın olabilecekleri bir yer temin etmektir. Bu üstün
                  standartları sağlamak adına uzun ve kapsamlı bir sürecin
                  sonunda geleceğimizi birlikte değiştirmeye hazırlandık.
                </p>
                <p>
                  <br />
                </p>
                <p style={{ fontWeight: "900" }}>Konum</p>
                <p>
                  Binamızın mevcut konumu metro(1 dk.), tramvay(5 dk.),
                  Marmaray(10 dk.), otobüs(2 dk.), minibüs(1 dk.) ve
                  üniversitelere kısa yürüme mesafesindedir. Bu sayede
                  öğrencilerimiz İstanbul’un yoğun trafiğinde zaman kaybedip
                  yorulmayarak derslerine odaklanabilirler. Aksaray konum olarak
                  da İstanbul’un merkezindedir ve öğrenciler boş zamanlarında bu
                  kültür dolu şehri toplu taşımaya rahatça ulaşarak
                  gezebilirler.{" "}
                  {!isOpen && (
                    <span
                      onClick={() => setIsOpen(true)}
                      style={{ fontWeight: "900", cursor: "pointer" }}
                    >
                      Devamını Oku...
                    </span>
                  )}
                </p>
                <p>
                  <br />
                </p>
                <p style={{ fontWeight: "900" }}>Odalar</p>
                <p>
                  Odalarımız her öğrenci için en az 12 m3 alan ayrılacak şekilde
                  1, 2, 4 ve 6 kişilik olarak organize edilmiştir. Her oda kendi
                  içinde bir aydınlık ve ferah bir yaşam alanıdır. Mimarlarımız
                  odaları öğrencilerin hem huzur içinde uyuyabilecekleri, hem
                  konforlu bir şekilde ders çalışabileceği, hem de boş
                  zamanlarında rahatlayabilecekleri şekilde düzenlemiştir.
                  Odalardaki tüm mobilyalar sipariş üzerine üretilmiş ve
                  öğrencilerin memnuniyeti için özel tasarlanmıştır.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="info">
            <div className="top">
              <div className="post">
                <h1>{detailData?.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{detailData.address}</span>
                </div>
                <div className="price">
                  $ {detailData?.priceRange?.min} Başlayan Fiyatlarla...
                </div>
              </div>
              <div className="user">
                <img src={userData?.img} alt="" />
                <span>{userData?.name}</span>
              </div>
            </div>
            <div className="bottom">{detailData?.desc}</div>
          </div> */}
        </div>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default HotelDetail;

import Slider from "~/components/singlePageSlider/SinglePageSlider";
// import { userData } from "~/lib/dummydata";
import "./singlePageHotelDetails.scss";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  FaLocationDot,
  // FaBowlFood,
  // FaWifi,
  FaPerson,
  FaAddressCard,
  // FaInternetExplorer,
} from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { useAuthContext } from "~/hooks/auth/useAuthContext";
import { newRequest } from "~/utils/newRequest";
// import { newRequest } from "~/utils/newRequest";

const HotelDetail = ({
  setLoading,
  loading,
  singlePostData,
  setError,
  // error,
}) => {
  const [detailData, setDetailData] = useState(singlePostData || []);
  // const [features, setFeatures] = useState([]);

  // const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthContext();
  console.log(user, "HotelDetailUSER");

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    try {
      setDetailData(singlePostData);
      // const fetchFeatures = async () => {
      //   const res = await newRequest.get(
      //     `/hotels/priority/${singlePostData._id}`
      //   );
      //   setFeatures(res.data);
      // };
      // fetchFeatures();
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [singlePostData, setLoading, setError]);
  // console.log(singlePostData, "HotelDetailSINGLEPOSTDATA");
  // if (error) {
  //   return <div>Error</div>;
  // }
  console.log(detailData, "HotelDetailDETAILDATA");

  const handleSaveHotel = async () => {
    console.log(user);
    // if (user === undefined || []) {
    //   navigate("/login");
    // }
    try {
      await newRequest.post(`users/${user?._id}/favorites/${id}`);

      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };
  // console.log(features, "HotelDetailFEATURES");
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
            <div className="icons">
              <div onClick={handleSaveHotel} className="icon">
                {user?.favoriteHotels?.includes(id) ? (
                  <img src="/img/saved.svg" alt="" />
                ) : (
                  <img src="/img/unsaved.svg" alt="" />
                )}
                {/* <img src={saved ? "/img/saved.svg" : "/img/unsaved.svg"} alt="" /> */}
              </div>
            </div>
          </div>

          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <Slider images={detailData.images} />
          )} */}
          <Slider images={detailData?.images} />
          <div className="hotelDetailTop">
            <div className="leftDetailTop">
              <div className="hotelDetailLogo">
                <img src={detailData?.logo || "/noLogo.png"} alt="" />
              </div>
              <div className="hotelDetailContent">
                <div className="hotelDetailContentTitle">
                  {detailData?.name}
                </div>
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
            <div className="rightDetailTop">
              <div className="hotelDetailPrice">
                {" "}
                {detailData?.min} - {detailData?.max} ₺ Arasında Fiyatlar
              </div>
            </div>
          </div>
          {/* <div className="hotelDetailBottom">
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
          </div> */}
          <div className="hotelInfoContent">
            <div className="tryhotelDetailBottomPreferredWrapper">
              <div className="hotelDetailBottomPreferredItem">
                <div className="hotelDetailBottomPreferredIcon">
                  <div className="hotelDetailBottomPreferredIconContainer">
                    <FaAddressCard />
                  </div>
                </div>
                <div className="hotelDetailBottomPreferredContent">
                  <div className="hotelDetailBottomPreferredContentQuestion">
                    Adres Bilgileri
                  </div>
                  <div className="hotelDetailBottomPreferredContentAnswer">
                    {detailData?.address?.substring(0, 30)}...
                  </div>
                </div>
              </div>
              <div className="hotelDetailBottomPreferredItem">
                <div className="hotelDetailBottomPreferredIcon">
                  <div className="hotelDetailBottomPreferredIconContainer">
                    <FaPerson />
                  </div>
                </div>
                <div className="hotelDetailBottomPreferredContent">
                  <div className="hotelDetailBottomPreferredContentQuestion">
                    Misafir Uygunluk Durumu
                  </div>
                  <div className="hotelDetailBottomPreferredContentAnswer">
                    {detailData?.guestPolicy === "gelebilirucretli"
                      ? "ÜCRETLİ BİR ŞEKİLDE  KONAKLAYABİLİR"
                      : detailData?.guestPolicy === "gelebilirucretsiz"
                      ? "ÜCRETSİZ BİR ŞEKİLDE  KONAKLAYABİLİR"
                      : " KONAKLAYAMAZ"}
                  </div>
                </div>
              </div>
              <div className="hotelDetailBottomPreferredItem">
                <div className="hotelDetailBottomPreferredIcon">
                  <div className="hotelDetailBottomPreferredIconContainer">
                    <FaPhone />
                  </div>
                </div>
                <div className="hotelDetailBottomPreferredContent">
                  <div className="hotelDetailBottomPreferredContentQuestion">
                    İletişim Bilgileri
                  </div>
                  <div className="hotelDetailBottomPreferredContentAnswer">
                    {detailData?.phoneNumber}
                  </div>
                </div>
              </div>
            </div>

            <div className="hotelInfoCollapse">
              <div className="hotelInfoCollapseWrapper">
                <div className="hotelInfoCollapseSections">
                  <h1 className="hotelInfoCollapseSectionsTitle">
                    Otel Hakkında
                  </h1>
                  <p className="hotelInfoCollapseSectionsContent">
                    {detailData?.aboutHotel}
                  </p>
                </div>
                <div className="hotelInfoCollapseSections">
                  <h1 className="hotelInfoCollapseSectionsTitle">
                    Odalar Hakkında
                  </h1>
                  <p className="hotelInfoCollapseSectionsContent">
                    {detailData?.roomInfo}
                  </p>
                </div>
                <div className="hotelInfoCollapseSections">
                  <h1 className="hotelInfoCollapseSectionsTitle">
                    Konumu Hakkında
                  </h1>
                  <p className="hotelInfoCollapseSectionsContent">
                    {detailData?.locationInfo}
                  </p>
                </div>
                <div className="hotelInfoCollapseSections">
                  <h1 className="hotelInfoCollapseSectionsTitle">
                    Öne Çıkan Özellikleri Hakkında
                  </h1>
                  <p className="hotelInfoCollapseSectionsContent">
                    {detailData?.standoutFeatures}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default HotelDetail;

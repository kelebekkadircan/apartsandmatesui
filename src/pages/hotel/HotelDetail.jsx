import Slider from "~/components/singlePageSlider/SinglePageSlider";
// import { userData } from "~/lib/dummydata";
import "./singlePageHotelDetails.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaLocationDot,
  FaBowlFood,
  FaWifi,
  FaPerson,
  // FaInternetExplorer,
} from "react-icons/fa6";
import { FaBed, FaHeadphones, FaPhone } from "react-icons/fa";
// import { newRequest } from "~/utils/newRequest";

const HotelDetail = ({
  setLoading,
  loading,
  singlePostData,
  setError,
  error,
}) => {
  const [detailData, setDetailData] = useState(singlePostData || []);
  // const [features, setFeatures] = useState([]);

  // const [isOpen, setIsOpen] = useState(false);

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
  if (error) {
    return <div>Error</div>;
  }
  console.log(detailData, "HotelDetailDETAILDATA");

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
                  <FaPerson />{" "}
                </div>
                <div className="hotelInfoDoubleContentAddressTitle">
                  {detailData?.guestPolicy === "gelebilirucretli"
                    ? "ÜCRETLİ BİR ŞEKİLDE MİSAFİR KONAKLAYABİLİR"
                    : detailData?.guestPolicy === "gelebilirucretsiz"
                    ? "ÜCRETSİZ BİR ŞEKİLDE MİSAFİR KONAKLAYABİLİR"
                    : "MİSAFİR KONAKLAYAMAZ"}
                </div>
              </div>
            </div>
            <div className="hotelInfoDoubleContent">
              {/* <div className="hotelInfoDoubleContentAddress">
                <div className="hotelInfoDoubleContentAddressIcon">
                  {" "}
                  <FaInternetExplorer />{" "}
                </div>
                <div className="hotelInfoDoubleContentAddressTitle">
                  www.kadircan.com
                </div>
              </div> */}
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
            <div className={`hotelInfoCollapse `}>
              <div className="hotelInfoCollapseContent">
                <h1>Otel Hakkında</h1>
                <p>{detailData?.aboutHotel}</p>
                <p>
                  <br />
                </p>
                <h1>Odalar Hakkında</h1>
                <p>{detailData?.roomInfo}</p>
                <p>
                  <br />
                </p>
                <h1>Konumu Hakkında</h1>
                <p>{detailData?.locationInfo}</p>
                <p>
                  <br />
                </p>
                <h1>Öne Çıkan Özellikleri Hakkında</h1>
                <p>{detailData?.standoutFeatures}</p>
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

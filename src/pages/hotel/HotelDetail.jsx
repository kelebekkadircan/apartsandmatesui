import Slider from "~/components/singlePageSlider/SinglePageSlider";
import { userData } from "~/lib/dummydata";
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

const HotelDetail = ({ setLoading, loading, singlePostData }) => {
  const [detailData, setDetailData] = useState(singlePostData || []);

  useEffect(() => {
    setLoading(true);
    try {
      setDetailData(singlePostData);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  }, [singlePostData, setLoading]);
  // console.log(singlePostData, "HotelDetailSINGLEPOSTDATA");

  console.log(detailData, "HotelDetailDETAILDATA");
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
          <Slider images={detailData.images} />
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
          </div>
          <div className="info">
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
          </div>
        </div>
      </div>
    </>
  ) : (
    <div>Loading...</div>
  );
};

export default HotelDetail;

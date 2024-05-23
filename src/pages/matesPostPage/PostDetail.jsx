import Slider from "~/components/singlePageSlider/SinglePageSlider";
// import { userData } from "~/lib/dummydata";
import "./singlePagePostDetails.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoMdPerson } from "react-icons/io";
import { FaBeer, FaInstagram } from "react-icons/fa";
import { IoCalendarNumberOutline } from "react-icons/io5";

import {
  MdOutlineCleaningServices,
  MdSmokeFree,
  MdOutlinePets,
  MdPhone,
  MdMail,
} from "react-icons/md";

import { newRequest } from "~/utils/newRequest";
// import { newRequest } from "~/utils/newRequest";

const PostDetail = ({
  setLoading,
  loading,
  singlePostData,
  setError,
  error,
}) => {
  const [detailData, setDetailData] = useState(singlePostData || []);
  const [user, setUser] = useState();
  const [fetchId, setFetchId] = useState(singlePostData.userId || "");

  // const [features, setFeatures] = useState([]);

  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setLoading(true);

    try {
      setDetailData(singlePostData);
      setFetchId(singlePostData.userId);
      const fetchUser = async () => {
        const response = await newRequest(`/users/${fetchId}`);
        setUser(response.data);
      };

      fetchUser();
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
  }, [singlePostData, setLoading, setError, fetchId]);
  // console.log(singlePostData, "HotelDetailSINGLEPOSTDATA");
  if (error) {
    return <div>Error</div>;
  }
  console.log(detailData, "HotelDetailDETAILDATA");
  // console.log(features, "HotelDetailFEATURES");
  console.log(user);
  return !loading ? (
    <>
      <div className="Postdetails">
        <div className="Postwrapper">
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
                <Link to={`/roommates?district=${detailData.district}`}>
                  <span style={{ textTransform: "capitalize" }}>
                    {" "}
                    {detailData.district} Oda Arkadaşı İlanları
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
                <img src={user?.avatar || "/favicon.png"} alt="" />
              </div>
              <div className="hotelDetailContent">
                <div className="hotelDetailContentTitle">
                  {user?.firstname} <span>, {user?.age || 24} </span>
                </div>
                <div className="hotelDetailContentTitle">
                  <div
                    style={{ textTransform: "capitalize", fontWeight: "300" }}
                  >
                    {user?.sex}
                  </div>
                </div>
              </div>
              <div className="hotelDetailContentSearch">
                Ev Arkadaşı Arıyor!
              </div>
            </div>
            <div className="rightDetailTop">
              <div className="hotelDetailPrice">
                {" "}
                {detailData?.min} ₺ Aylık Fiyat
              </div>
            </div>
          </div>

          <div className="hotelDetailBottom">
            <div className="hotelDetailBottomLocation">
              {/* <h1 className="hotelDetailBottomLocationTitle" >Genel Bilgiler</h1> */}
              <div className="bottomDetailed">
                <div className="hotelDetailBottomLocationOne">
                  <div className="hotelDetailBottomLocationTitle">
                    Evin Konumu
                  </div>
                  <p style={{ textTransform: "capitalize" }}>
                    {detailData?.address?.substring(0, 40)}...
                  </p>
                </div>
                <div className="hotelDetailBottomLocationOne">
                  <div className="hotelDetailBottomLocationTitle">
                    İlan Türü
                  </div>
                  {/* <p>{detailData?.rentType}</p> */}
                  <p>Bir Oda Kiraya Veriyor</p>
                </div>
                <div className="hotelDetailBottomLocationOne">
                  <div className="hotelDetailBottomLocationTitle">
                    Uygun Olduğu Tarih
                  </div>
                  {/* <p>{detailData?.dateOfEntry}</p> */}
                  <p>Hemen</p>
                </div>
              </div>
            </div>
            <div className="hotelDetailBottomDesc">
              <div className="hotelDetailBottomDescTitle">Açıklama</div>
              <p>
                {detailData?.desc} {detailData?.desc} {detailData?.desc}{" "}
                {detailData?.desc} {detailData?.desc} {detailData?.desc}{" "}
                {detailData?.desc} {detailData?.desc} {detailData?.desc}{" "}
                {detailData?.desc}{" "}
              </p>
            </div>
            <div className="postDetailContactInfo">
              <div className="postDetailContactInfoTitle">
                İletişim Bilgileri
              </div>
              <div className="postDetailContactInfoWrapper">
                <div className="postDetailContactInfoItem">
                  <div className="postDetailContactInfoIcon">
                    <div className="postDetailContactInfoIconContainer">
                      <MdPhone />
                    </div>
                  </div>
                  <div className="postDetailContactInfoContent">
                    <div className="postDetailContactInfoContentQuestion">
                      Telefon Numarası
                    </div>
                    <div className="postDetailContactInfoContentAnswer">
                      0536 123 45 67
                    </div>
                  </div>
                </div>
                <div className="postDetailContactInfoItem">
                  <div className="postDetailContactInfoIcon">
                    <div className="postDetailContactInfoIconContainer">
                      <MdMail />
                    </div>
                  </div>
                  <div className="postDetailContactInfoContent">
                    <div className="postDetailContactInfoContentQuestion">
                      Mail Adresi
                    </div>
                    <div className="postDetailContactInfoContentAnswer">
                      kelebekkadircan@gmail.com
                    </div>
                  </div>
                </div>
                <div className="postDetailContactInfoItem">
                  <div className="postDetailContactInfoIcon">
                    <div className="postDetailContactInfoIconContainer">
                      <FaInstagram />
                    </div>
                  </div>
                  <div className="postDetailContactInfoContent">
                    <div className="postDetailContactInfoContentQuestion">
                      İnstagram Adresi
                    </div>
                    <div className="postDetailContactInfoContentAnswer">
                      kelebekkadircan
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hotelDetailBottomPreferred">
              <h1 className="hotelDetailBottomPreferredTitle">
                Ev Arkadaşı Tercihi
              </h1>
              <div className="hotelDetailBottomPreferredWrapper">
                <div className="hotelDetailBottomPreferredItem">
                  <div className="hotelDetailBottomPreferredIcon">
                    <div className="hotelDetailBottomPreferredIconContainer">
                      <IoMdPerson />
                    </div>
                  </div>
                  <div className="hotelDetailBottomPreferredContent">
                    <div className="hotelDetailBottomPreferredContentQuestion">
                      İdeal Ev Arkadaşının Cinsiyeti
                    </div>
                    <div className="hotelDetailBottomPreferredContentAnswer">
                      {detailData?.sexSituation === "kadinolabilir"
                        ? "Kadın"
                        : "Erkek"}
                    </div>
                  </div>
                </div>
                <div className="hotelDetailBottomPreferredItem">
                  <div className="hotelDetailBottomPreferredIcon">
                    <div className="hotelDetailBottomPreferredIconContainer">
                      <FaBeer />
                    </div>
                  </div>
                  <div className="hotelDetailBottomPreferredContent">
                    <div className="hotelDetailBottomPreferredContentQuestion">
                      Alkol Durumu
                    </div>
                    <div className="hotelDetailBottomPreferredContentAnswer">
                      Odada{" "}
                      {detailData?.alcohol === "kullanabilir"
                        ? "Alkol Kullanabilir"
                        : "Alkol Kullanamaz"}
                    </div>
                  </div>
                </div>
                <div className="hotelDetailBottomPreferredItem">
                  <div className="hotelDetailBottomPreferredIcon">
                    <div className="hotelDetailBottomPreferredIconContainer">
                      <IoCalendarNumberOutline />
                    </div>
                  </div>
                  <div className="hotelDetailBottomPreferredContent">
                    <div className="hotelDetailBottomPreferredContentQuestion">
                      Yaş Aralığı Tercihi
                    </div>
                    <div className="hotelDetailBottomPreferredContentAnswer">
                      {detailData?.age}
                    </div>
                  </div>
                </div>
                <div className="hotelDetailBottomPreferredItem">
                  <div className="hotelDetailBottomPreferredIcon">
                    <div className="hotelDetailBottomPreferredIconContainer">
                      <MdOutlinePets />
                    </div>
                  </div>
                  <div className="hotelDetailBottomPreferredContent">
                    <div className="hotelDetailBottomPreferredContentQuestion">
                      Evcil Hayvan Durumu
                    </div>
                    <div className="hotelDetailBottomPreferredContentAnswer">
                      {detailData?.petSituation === "evetolabilir"
                        ? "Evcil Hayvan Olabilir"
                        : "Evcil Hayvan Olamaz"}
                    </div>
                  </div>
                </div>
                <div className="hotelDetailBottomPreferredItem">
                  <div className="hotelDetailBottomPreferredIcon">
                    <div className="hotelDetailBottomPreferredIconContainer">
                      <MdSmokeFree />
                    </div>
                  </div>
                  <div className="hotelDetailBottomPreferredContent">
                    <div className="hotelDetailBottomPreferredContentQuestion">
                      Sigara Kullanım Durumu
                    </div>
                    <div className="hotelDetailBottomPreferredContentAnswer">
                      Odada{" "}
                      {detailData?.smokeSituation === "kullanabilir"
                        ? "Kullanabilir"
                        : "Kullanamaz"}
                    </div>
                  </div>
                </div>
                <div className="hotelDetailBottomPreferredItem">
                  <div className="hotelDetailBottomPreferredIcon">
                    <div className="hotelDetailBottomPreferredIconContainer">
                      <MdOutlineCleaningServices />
                    </div>
                  </div>
                  <div className="hotelDetailBottomPreferredContent">
                    <div className="hotelDetailBottomPreferredContentQuestion">
                      Temizlik Durumu
                    </div>
                    <div className="hotelDetailBottomPreferredContentAnswer">
                      Haftada {detailData?.cleaningSituation} gün temizlik
                      yapmalı
                    </div>
                  </div>
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

export default PostDetail;

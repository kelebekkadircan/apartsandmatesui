/* eslint-disable no-unused-vars */
import { Map } from "~/components/map/Map";
import "./singlePageHotelFeatures.scss";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { newRequest } from "~/utils/newRequest";
import { FaArrowRight } from "react-icons/fa";
import { MapSingle } from "~/components/map/MapSingle";

const HotelFeatures = ({
  singlePostData,
  loading,
  setError,
  error,
  setLoading,
}) => {
  const [hotelFeatures, setHotelFeatures] = useState(singlePostData || []);
  const [tags, setTags] = useState([]);
  const [buildingFeatures, setBuildingFeatures] = useState([]);
  const [roomFeatures, setRoomFeatures] = useState([]);
  const [servicesFeatures, setServicesFeatures] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    try {
      setHotelFeatures(singlePostData);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
    }
    const tagsFetching = async () => {
      try {
        const tagsRes = await newRequest.get(`/hotels/tags/${id}`);
        const { buildingFeatures, roomFeatures, services } = tagsRes.data;
        setBuildingFeatures(buildingFeatures);
        setRoomFeatures(roomFeatures);
        setServicesFeatures(services);
        setTags(tagsRes.data);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    tagsFetching();
  }, [singlePostData, setError, setLoading, id]);

  // if (error) {
  //   return <div>Error</div>;
  // }
  console.log(hotelFeatures);
  console.log(buildingFeatures, roomFeatures, servicesFeatures);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="features">
      <div className="wrapper">
        <div className="contentNavbar">
          <div className="contentNavbarContainer">
            <div className="navbarList">
              <div className="navbarListItem">
                <NavLink>Özellikler</NavLink>
              </div>
              <div className="navbarListItem">
                <NavLink>Yorumlar</NavLink>
              </div>
              <div className="navbarListItem">
                <NavLink>Harita</NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="featuresWrapper">
          <div className="featuresWrapperContainer">
            <div>
              <div className="buildingProperty">
                <div className="buildingPropertyTitle">Bina Özellikleri</div>
                <ul>
                  {buildingFeatures.map((tag, i) => (
                    <li key={i}>
                      <img src={`/img/${tag.value}.svg`} alt="" />
                      <span> {tag.name} </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="buildingProperty">
                <div className="buildingPropertyTitle">Oda Özellikleri</div>
                <ul>
                  {roomFeatures.map((tag, i) => (
                    <li key={i}>
                      <img src={`/img/${tag.value}.svg`} alt="" />
                      <span> {tag.name} </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="buildingProperty">
                <div className="buildingPropertyTitle">Hizmetler</div>
                <ul>
                  {servicesFeatures.map((tag, i) => (
                    <li key={i}>
                      <img src={`/img/${tag.value}.svg`} alt="" />
                      <span> {tag.name} </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="contentComment">
          <div className="contentCommentContainer">
            <div className="resultBracket">
              <div className="emptyContent">
                <div className="emptyContentIcon">
                  <img
                    src="https://www.yurtlarburada.com/img/yorum-yok.png"
                    alt=""
                  />
                </div>
                <div className="emptyContentTitle">
                  Henüz Yorum Yapılmadı. Yorumunu Merak Ediyoruz
                </div>
              </div>
            </div>
            <form>
              <div className="commentReplyText">
                <input
                  type="text"
                  placeholder="Yorumunuzu Buraya Yazınız"
                  className="commentEntry"
                />
                <span className="commentReplyIcon">
                  <FaArrowRight />
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="mapContainer">
        {/* {loading ? (
          <div> loading </div>
        ) : error ? (
          <div> Error</div>
        ) : (
          <Map items={[singlePostData]} />
        )} */}
        <MapSingle items={[hotelFeatures]} />
      </div>
    </div>
  );
};

export default HotelFeatures;

/* eslint-disable no-unused-vars */
import { Map } from "~/components/map/Map";
import "./singlePageHotelFeatures.scss";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { newRequest } from "~/utils/newRequest";
import { FaArrowRight } from "react-icons/fa";

const HotelFeatures = ({
  singlePostData,
  loading,
  setError,
  error,
  setLoading,
}) => {
  const [hotelFeatures, setHotelFeatures] = useState([]);
  const [tags, setTags] = useState([]);
  const [buildingFeatures, setBuildingFeatures] = useState([]);
  const [roomFeatures, setRoomFeatures] = useState([]);
  const [servicesFeatures, setServicesFeatures] = useState([]);

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
      setLoading(true);
      try {
        const tagsRes = await newRequest.get("/hotels/tags");
        const { buildingFeatures, roomFeatures, services } = tagsRes.data;
        setBuildingFeatures(buildingFeatures);
        setRoomFeatures(roomFeatures);
        setServicesFeatures(services);
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    tagsFetching();
  }, [singlePostData, setError, setLoading]);

  if (error) {
    return <div>Error</div>;
  }

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
                      <img src="/img/search.svg" alt="" />
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
                      <img src="/img/search.svg" alt="" />
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
                      {/* <img src={`/img/${tag.value}`} alt="" /> */}
                      <img src="/img/search.svg" alt="" />
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
        <Map items={[singlePostData]} />
      </div>
    </div>
  );
};

export default HotelFeatures;

{
  /* <p className="title">General</p>
        <div className="listVertical">
          <div className="feature">
            <img src="/utility.png" alt="" />
            <div className="featureText">
              <span>Utilities</span>
              <p>Renter is responsible</p>
            </div>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="" />
            <div className="featureText">
              <span>Pet Policy</span>
              <p>Pets Allowed</p>
            </div>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="" />
            <div className="featureText">
              <span>Property Fees</span>
              <p>Must have 3x the rent in total household income</p>
            </div>
          </div>
        </div>
        <p className="title">Sizes</p>
        <div className="sizes">
          <div className="size">
            <img src="/size.png" alt="" />
            <span>80 sqft</span>
          </div>
          <div className="size">
            <img src="/bed.png" alt="" />
            <span>2 beds</span>
          </div>
          <div className="size">
            <img src="/bath.png" alt="" />
            <span>1 bathroom</span>
          </div>
        </div>
        <p className="title">Nearby Places</p>
        <div className="listHorizontal">
          <div className="feature">
            <img src="/school.png" alt="" />
            <div className="featureText">
              <span>School</span>
              <p>250m away</p>
            </div>
          </div>
          <div className="feature">
            <img src="/pet.png" alt="" />
            <div className="featureText">
              <span>Bus Stop</span>
              <p>100m away</p>
            </div>
          </div>
          <div className="feature">
            <img src="/fee.png" alt="" />
            <div className="featureText">
              <span>Restaurant</span>
              <p>200m away</p>
            </div>
          </div>
        </div>
        <p className="title">Location</p>
        <div className="mapContainer">
          <Map items={[singlePostData]} />
        </div>
        <div className="buttons">
          <button>
            <img src="/chat.png" alt="" />
            Send a Message
          </button>
          <button>
            <img src="/save.png" alt="" />
            Save the Place
          </button>
        </div> */
}

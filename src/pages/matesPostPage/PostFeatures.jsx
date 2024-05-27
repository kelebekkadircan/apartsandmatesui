/* eslint-disable no-unused-vars */
import { Map } from "~/components/map/Map";
import "./singlePagePostFeatures.scss";
import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { newRequest } from "~/utils/newRequest";
import { FaArrowRight } from "react-icons/fa";
import { MapSingle } from "~/components/map/MapSingle";

const PostFeatures = ({
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
  const [hobbies, setHobbies] = useState([]);

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
        const tagsRes = await newRequest.get(`/posts/posttags/${id}`);
        const { buildingFeatures, roomFeatures, services } = tagsRes.data;
        setBuildingFeatures(buildingFeatures);
        setRoomFeatures(roomFeatures);
        setServicesFeatures(services);
        setTags(tagsRes.data);
        const fetchHobbies = async () => {
          const response = await newRequest(`/posts/posthobby/${id}`);
          const { hobies } = response.data;
          setHobbies(hobies);
        };
        fetchHobbies();
      } catch (e) {
        setError(e);
      } finally {
        setLoading(false);
      }
    };
    tagsFetching();
  }, [singlePostData, setError, setLoading, id]);

  if (error) {
    return <div>Error</div>;
  }

  console.log(buildingFeatures, roomFeatures, servicesFeatures);
  console.log(hobbies);

  return loading ? (
    <div>Loading...</div>
  ) : (
    <div className="Postfeatures">
      <div className="Postwrapper">
        <div className="contentNavbar">
          <div className="contentNavbarContainer">
            <div className="navbarList">
              <div className="navbarListItem">
                <NavLink>Özellikler</NavLink>
              </div>
              {/* <div className="navbarListItem">
                <NavLink>Yorumlar</NavLink>
              </div> */}
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
                <div className="buildingPropertyTitle">Hobilerim</div>
                <ul>
                  {hobbies.map((tag, i) => (
                    <li key={i}>
                      <img src={`/img/${tag.value}.svg`} alt="" />
                      <span>{tag.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
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
          </div>
        </div>
        {/* <div className="contentComment">
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
        </div> */}
      </div>
      <div className="mapContainer">
        <MapSingle items={[hotelFeatures]} />
      </div>
    </div>
  );
};

export default PostFeatures;

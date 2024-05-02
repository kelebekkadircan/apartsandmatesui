import { FaArrowRightLong } from "react-icons/fa6";
import "./aparts.scss";
import { ApartsCard } from "./ApartsCard";
import { useEffect, useState } from "react";
import { newRequest } from "~/utils/newRequest";
import { Link } from "react-router-dom";
export const Aparts = () => {
  // const [apartInfos, setApartInfos] = useState({});
  const [apartDist, setApartDist] = useState([]);
  const [apartNumber, setApartNumber] = useState(1);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const apartCountFetching = async () => {
      setIsLoading(true);

      try {
        const response = await newRequest.get("hotels/topDistricts");
        const { topDistricts, totalCount } = response.data;
        setApartDist(topDistricts);
        setApartNumber(totalCount);
      } catch (e) {
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    apartCountFetching();
  }, []);

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="ApartSection">
      <div className="apartContainer">
        <div className="apartWrapper">
          <div className="apartContent">
            <img src="https://www.yurtlarburada.com/img/building.svg" alt="" />
            <div className="apartContentTitle">
              <span className="color-blue d-block">Bölgelere Göre</span>
              Apart Listeleri
            </div>
            <div className="contentText">
              Üniversiteyi kazandınız kalacak yer mi arıyorsunuz? Şehrindeki kız
              ve erkek öğrenci apartlarını bir araya getiren apartsandmates.com
              aracılığıyla yurtların iletişim bilgilerini öğrenebilir, en uygun
              oda fiyatlarına kolayca ulaşabilirsiniz!
            </div>
            <div className="contentInfo">
              <div className="infoTitle">
                <strong>{apartNumber}</strong>
                Aktif Apart
              </div>
              <div className="apartNav">
                <Link to={`/list`} className="link">
                  <div className="navTitle">
                    Tümünü Gör
                    <div className="navIcon">
                      <FaArrowRightLong />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="apartCard">
            {loading ? (
              <div> Loading ...</div>
            ) : (
              apartDist?.map((data, i) => <ApartsCard key={i} data={data} />)
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

import { useState } from "react";
import "./createHotel.scss";
import FormInput from "~/components/form/FormInput";
import UploadWidget from "~/components/uploadWidget/UploadWidget";
import {
  binaozellikleri,
  inputsHotelCreate,
  mahalleler,
  misafirkabul,
  odaozellikleri,
  servisler,
} from "~/lib/dummydata";
import { newRequest } from "~/utils/newRequest";
// import { Map } from "~/components/map/Map";
import { MapFinder } from "~/components/map/MapFinder";
import { useNavigate } from "react-router-dom";
// import DenemeUploadWidget from "../test/DenemeUploadWidget";

const CreateHotel = () => {
  const [images, setImages] = useState([]);
  const [aboutHotel, setAboutHotel] = useState("");
  const [standoutFeatures, setStandoutFeatures] = useState("");
  const [locationInfo, setLocationInfo] = useState("");
  const [roomInfo, setRoomInfo] = useState("");
  const [buildingFeatures, setBuildingFeatures] = useState([]);
  const [roomFeatures, setRoomFeatures] = useState([]);
  const [services, setServices] = useState([]);
  const [getLatLng, setGetLatLng] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  // const [avatars, setAvatars] = useState([]);

  const navigate = useNavigate();

  const [values, setValues] = useState({
    name: "",
    ownerName: "",
    title: "",
    address: "",
    shortDesc: "",
    email: "",
    phoneNumber: "",
    bedCount: Number,
    busStop: Number,
    university: Number,
    market: Number,
    min: Number,
    max: Number,
    standoutFeatures: "",
    locationInfo: "",
    roomInfo: "",
    receptionNumber: "",
    type: "karma",
    district: "oba",
    guestPolicy: "gelebilirucretsiz",
    buildingFeatures: [],
    roomFeatures: [],
    services: [],
    tags: [],
    isPaid: "free",
  });

  const onChange = (e) => {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  };
  const handleCheckboxBuild = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setBuildingFeatures([...buildingFeatures, name]);
    } else {
      setBuildingFeatures(buildingFeatures.filter((item) => item !== name));
    }
  };

  const handleCheckboxRoom = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setRoomFeatures([...roomFeatures, name]);
    } else {
      setRoomFeatures(roomFeatures.filter((item) => item !== name));
    }
  };

  const handleCheckboxServices = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setServices([...services, name]);
    } else {
      setServices(services.filter((item) => item !== name));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    values.images = images;
    values.aboutHotel = aboutHotel;
    values.standoutFeatures = standoutFeatures;
    values.locationInfo = locationInfo;
    values.roomInfo = roomInfo;
    values.buildingFeatures = buildingFeatures;
    values.roomFeatures = roomFeatures;
    values.services = services;
    values.latitude = getLatLng.lat;
    values.longitude = getLatLng.lng;

    // values.logo = avatars[0];
    values.tags = [...buildingFeatures, ...roomFeatures, ...services];

    console.log(getLatLng, "GETLATLNG");

    if (
      values.images.length > 3 ||
      getLatLng !== null ||
      getLatLng !== undefined ||
      getLatLng !== "" ||
      getLatLng !== 0
    ) {
      // console.log("Form submitted!", values);
      setLoading(true);
      try {
        const res = await newRequest.post("/hotels", values);
        console.log(res.data);
        setLoading(false);
        navigate(`/list`);
      } catch (err) {
        console.log(err);
        setError(err.response.data.message);
      } finally {
        setLoading(false);
      }
    } else {
      alert("En az 4 resim yükleyiniz ve konum seçiniz");
    }
  };

  console.log(getLatLng, "GETLATLNG");

  return (
    <div className="createHotel">
      <div className="createHotelContainer">
        <div className="createHotelWrapper">
          <div className="createHotelForm">
            <h1 style={{ color: "#808080" }}> Otelini Oluştur</h1>
            <div className="ImageContainer">
              <div className="hotelImageContainer">
                {images?.map((image, index) => (
                  <img src={image} key={index} alt="" />
                ))}
                {images.length < 4 && <div>EN AZ 4 RESİM YÜKLEYİNİZ !!</div>}
                <UploadWidget
                  uwConfig={{
                    cloudName: "debzpp4al",
                    uploadPreset: "apartsandmates",
                    multiple: true,
                    maxImageFileSize: 10000000,
                    folder: "hotelsabc",
                  }}
                  setState={setImages}
                />
              </div>
            </div>

            <h1 style={{ color: "#808080" }}>Haritadan Konum Seçiniz</h1>
            <div
              style={{
                width: "100%",
                height: "500px",
                backgroundColor: "transparent",
                margin: "10px auto",
                borderRadius: "20px",
                border: "1px solid #0000003b",
              }}
            >
              <MapFinder setGetLatlng={setGetLatLng} />
            </div>
            <form onSubmit={handleSubmit}>
              {inputsHotelCreate?.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}

              <div className="typeInput">
                <label style={{ fontSize: "1.3rem" }} htmlFor="aboutHotel">
                  Otel Hakkında Genel Bilgi Veriniz
                </label>
                <textarea
                  name="aboutHotel"
                  id="aboutHotel"
                  onChange={(e) => setAboutHotel(e.target.value)}
                  value={aboutHotel}
                  required
                  className="textAreaDeneme"
                  placeholder=" örnek : Otelimiz Alanya'nın kalbinde konumlanmış olup, üniversite öğrencilerine konforlu konaklama ve üstün hizmet kalitesi sunarak, ders çalışmak için ideal bir ortam sağlamaktadır."
                />
              </div>
              <div className="typeInput">
                <label
                  style={{ fontSize: "1.3rem" }}
                  htmlFor="standoutFeatures"
                >
                  Otelin Öne Çıkan Özelliklerini Yazınız
                </label>
                <textarea
                  name="standoutFeatures"
                  id="standoutFeatures"
                  onChange={(e) => setStandoutFeatures(e.target.value)}
                  value={standoutFeatures}
                  required
                  className="textAreaDeneme"
                  placeholder="örnek: Otel, 24 saat güvenlik, ücretsiz Wi-Fi, çeşitli sosyal alanlar ve düzenli temizlik hizmetleri gibi olanaklarla misafirlerine konforlu ve güvenli bir ortam sağlar."
                />
              </div>
              <div className="typeInput">
                <label style={{ fontSize: "1.3rem" }} htmlFor="locationInfo">
                  Otelin Konumu Hakkında Bilgi Veriniz
                </label>
                <textarea
                  name="locationInfo"
                  id="standoutFeatures"
                  onChange={(e) => setLocationInfo(e.target.value)}
                  value={locationInfo}
                  required
                  className="textAreaDeneme"
                  placeholder="örnek: Marketlere, sahile ve alışveriş merkezlerine birkaç adım uzaklıkta olan otelimiz, hem kolay ulaşım hem de tarihi yerlere yakın olma avantajı sunar. Merkezi konumuyla ders çalışmak  isteyen öğrenciler için idealdir.
                  "
                />
              </div>
              <div className="typeInput">
                <label style={{ fontSize: "1.3rem" }} htmlFor="roomInfo">
                  Otelin Odaları Hakkında Bilgi Veriniz
                </label>
                <textarea
                  name="roomInfo"
                  id="roomInfo"
                  onChange={(e) => setRoomInfo(e.target.value)}
                  value={roomInfo}
                  required
                  className="textAreaDeneme"
                  placeholder="örnek : iki kişilik klimalı odaları, konforlu konaklama sunar. Modern donanımlarıyla odalarımızda rahat yataklar, çalışma masası, TV, internet ve banyo bulunmaktadır.
                  "
                />
              </div>
              <div className="typeInput">
                <label style={{ fontSize: "1.3rem" }}>Mahalleyi Seçiniz</label>
                <select
                  name="district"
                  value={values.district}
                  onChange={onChange}
                  required
                >
                  {mahalleler.map((mahalle, i) => (
                    <option
                      style={{ textTransform: "capitalize" }}
                      key={i}
                      value={mahalle.value}
                      onChange={onChange}
                    >
                      {mahalle.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="typeInput">
                <label style={{ fontSize: "1.3rem" }}>Tipi</label>
                <select
                  name="type"
                  value={values.type}
                  onChange={onChange}
                  required
                >
                  <option
                    defaultChecked={true}
                    onChange={onChange}
                    value="karma"
                  >
                    Karma
                  </option>
                  <option onChange={onChange} value="erkek">
                    Erkek
                  </option>
                  <option onChange={onChange} value="kiz">
                    Kadın
                  </option>
                </select>
              </div>
              <div className="typeInput">
                <div className="buildingFeatures">
                  <label style={{ fontSize: "2rem" }}>
                    Bina Özelliklerini Seçiniz
                  </label>
                  {binaozellikleri.map((ozellik, i) => (
                    <label key={i} className="buildingFeaturesLabel">
                      <input
                        style={{
                          width: "1.5rem",
                          height: "1.5rem",
                        }}
                        type="checkbox"
                        name={ozellik.value}
                        checked={buildingFeatures.includes(ozellik.value)}
                        onChange={handleCheckboxBuild}
                      />
                      {ozellik.name}
                    </label>
                  ))}
                </div>
              </div>
              <div className="typeInput">
                <div className="buildingFeatures">
                  <label style={{ fontSize: "2rem" }}>
                    Oda Özelliklerini Seçiniz
                  </label>
                  {odaozellikleri.map((ozellik, i) => (
                    <label key={i} className="buildingFeaturesLabel">
                      <input
                        style={{ width: "1.5rem", height: "1.5rem" }}
                        type="checkbox"
                        name={ozellik.value}
                        checked={roomFeatures.includes(ozellik.value)}
                        onChange={handleCheckboxRoom}
                      />
                      {ozellik.name}
                    </label>
                  ))}
                </div>
              </div>
              <div className="typeInput">
                <div className="buildingFeatures">
                  <label style={{ fontSize: "2rem" }}>
                    Sağladığınız Hizmetleri Seçiniz
                  </label>
                  {servisler.map((ozellik, i) => (
                    <label key={i} className="buildingFeaturesLabel">
                      <input
                        style={{ width: "1.5rem", height: "1.5rem" }}
                        type="checkbox"
                        name={ozellik.value}
                        checked={services.includes(ozellik.value)}
                        onChange={handleCheckboxServices}
                      />
                      {ozellik.name}
                    </label>
                  ))}
                </div>
              </div>
              <div className="typeInput">
                <label style={{ fontSize: "1.3rem" }}>
                  Misafir Kabul Durumu
                </label>
                <select
                  name="guestPolicy"
                  value={values.guestPolicy}
                  onChange={onChange}
                  required
                >
                  {misafirkabul.map((mahalle, i) => (
                    <option
                      style={{ textTransform: "capitalize" }}
                      key={i}
                      value={mahalle.value}
                      onChange={onChange}
                    >
                      {mahalle.name}
                    </option>
                  ))}
                </select>
              </div>

              <button
                disabled={loading}
                style={{ backgroundColor: "#4a5aa3" }}
                type="submit"
              >
                Oluştur
              </button>
              {error && <div className="CreateHotelError">{error}</div>}
            </form>
            {/* <DenemeUploadWidget avatars={avatars} setAvatars={setAvatars} /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHotel;

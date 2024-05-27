// import { newRequest } from "~/utils/newRequest";
import "./createMatesPage.scss";
import { useState } from "react";
import {
  Postbinaozellikleri,
  hobilerim,
  inputsPostCreate,
  mahalleler,
  // misafirkabul,
  Postodaozellikleri,
} from "~/lib/dummydata";
import FormInput from "~/components/form/FormInput";
import { MapFinder } from "~/components/map/MapFinder";
import UploadWidget from "~/components/uploadWidget/UploadWidget";
import { newRequest } from "~/utils/newRequest";
import { redirect, useNavigate } from "react-router-dom";

const CreateMatesPage = () => {
  const [images, setImages] = useState([]);
  const [aboutPost, setAboutPost] = useState("");
  // const [standoutFeatures, setStandoutFeatures] = useState("");
  // const [locationInfo, setLocationInfo] = useState("");
  // const [roomInfo, setRoomInfo] = useState("");
  const [buildingFeatures, setBuildingFeatures] = useState([]);
  const [roomFeatures, setRoomFeatures] = useState([]);
  const [hobies, setHobies] = useState([]);
  const [getLatLng, setGetLatLng] = useState();
  // const [avatars, setAvatars] = useState([]);
  const navigate = useNavigate();

  const [values, setValues] = useState({
    title: "",
    address: "",
    desc: "",
    email: "",
    phoneNumber: "",
    min: 5000,
    deposit: 0,
    instaAccount: "",
    buildingFeatures: [],
    roomFeatures: [],
    personalFeatures: [],
    hobies: [],
    tags: [],
    district: "oba",
    sexSituation: "erkekolabilir",
    petSituation: "evetolabilir",
    smokeSituation: "kullanabilir",
    alcoholSituation: "kullanabilir",
    guestPolicy: "gelebilir",
    age: "18-21",
    rentType: "birodaarkadasiariyor",
    dateOfEntry: "1-2hafta",
    priceSelection: "aylik",
    cleaningSituation: "1",
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

  const handleCheckboxHobies = (e) => {
    const { name, checked } = e.target;

    if (checked) {
      setHobies([...hobies, name]);
    } else {
      setHobies(hobies.filter((item) => item !== name));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    values.images = images;
    values.buildingFeatures = buildingFeatures;
    values.roomFeatures = roomFeatures;
    values.hobies = hobies;
    values.latitude = getLatLng.lat;
    values.longitude = getLatLng.lng;
    values.aboutPost = aboutPost;
    // values.standoutFeatures = standoutFeatures;
    // values.locationInfo = locationInfo;
    // values.roomInfo = roomInfo;

    // values.logo = avatars[0];
    values.tags = [...buildingFeatures, ...roomFeatures, ...hobies];

    console.log("Form submitted!", values);
    if (values.images.length > 3 && getLatLng !== undefined) {
      try {
        const res = await newRequest.post("/posts", values);
        console.log(res.data);
        redirect("/roommates");
      } catch (err) {
        console.log(err);
      } finally {
        navigate(`/roommates`);
      }
    } else {
      alert("En az 4 resim yükleyiniz ve konum seçiniz !!");
    }
  };
  // console.log(getLatLng, "GETLATLNG");
  return (
    <div className="MatesPage">
      {" "}
      <div className="createHotel">
        <div className="createHotelContainer">
          <div className="createHotelWrapper">
            <div className="createHotelForm">
              <h1 style={{ color: "#808080" }}> Mates İlanını Oluştur!</h1>
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
                      folder: "matesImages",
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
                {inputsPostCreate?.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}

                <div className="typeInput">
                  <label style={{ fontSize: "1.3rem" }}>
                    Yaşadığınız Mahalleyi Seçiniz
                  </label>
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
                  <label style={{ fontSize: "1.3rem" }}>
                    Aradığınız Oda Arkadaşının Cinsiyeti
                  </label>
                  <select
                    name="sexSituation"
                    value={values.sexSituation}
                    onChange={onChange}
                    required
                  >
                    <option
                      defaultChecked={true}
                      onChange={onChange}
                      value="erkekolabilir"
                    >
                      Erkek
                    </option>
                    <option onChange={onChange} value="kadinolabilir">
                      Kadın
                    </option>
                  </select>
                </div>

                <div className="typeInput">
                  <label style={{ fontSize: "1.3rem" }}>
                    Evcil Hayvan Getirme Durumu
                  </label>
                  <select
                    name="petSituation"
                    value={values.petSituation}
                    onChange={onChange}
                    required
                  >
                    <option
                      defaultChecked={true}
                      onChange={onChange}
                      value="evetolabilir"
                    >
                      Evcil Hayvanı Olabilir
                    </option>
                    <option onChange={onChange} value="hayirolamaz">
                      Evcil Hayvanı Olamaz
                    </option>
                  </select>
                </div>

                <div className="typeInput">
                  <label style={{ fontSize: "1.3rem" }}>
                    Sigara Kullanma Durumu
                  </label>
                  <select
                    name="smokeSituation"
                    value={values.smokeSituation}
                    onChange={onChange}
                    required
                  >
                    <option
                      defaultChecked={true}
                      onChange={onChange}
                      value="kullanabilir"
                    >
                      Sigara Kullanması Sorun Değil
                    </option>
                    <option onChange={onChange} value="hayirkullanamaz">
                      Sigara Kullanmamasını Tercih Ederim
                    </option>
                  </select>
                </div>

                <div className="typeInput">
                  <label style={{ fontSize: "1.3rem" }}>
                    Alkol Kullanma Durumu
                  </label>
                  <select
                    name="alcoholSituation"
                    value={values.alcoholSituation}
                    onChange={onChange}
                    required
                  >
                    <option
                      defaultChecked={true}
                      onChange={onChange}
                      value="kullanabilir"
                    >
                      Odada Alkol Kullanabilir
                    </option>
                    <option onChange={onChange} value="hayirkullanamaz">
                      Odada Alkol Kullanamaz
                    </option>
                  </select>
                </div>

                <div className="typeInput">
                  <label style={{ fontSize: "1.3rem" }}>
                    Misafiri Olma Durumu
                  </label>
                  <select
                    name="guestPolicy"
                    value={values.guestPolicy}
                    onChange={onChange}
                    required
                  >
                    <option
                      defaultChecked={true}
                      onChange={onChange}
                      value="gelebilir"
                    >
                      Odaya Misafir Getirebilir
                    </option>
                    <option onChange={onChange} value="gelemez">
                      Odaya Misafir Getiremez
                    </option>
                  </select>
                </div>

                <div className="typeInput">
                  <label style={{ fontSize: "1.3rem" }}>
                    Yaş Aralığı Seçiniz
                  </label>
                  <select
                    name="age"
                    value={values.age}
                    onChange={onChange}
                    required
                  >
                    <option
                      defaultChecked={true}
                      onChange={onChange}
                      value="18-21"
                    >
                      18-21 Yaş Aralığında Olabilir
                    </option>
                    <option onChange={onChange} value="21-24">
                      21-24 Yaş Aralığında Olabilir
                    </option>
                    <option onChange={onChange} value="24-27">
                      24-27 Yaş Aralığında Olabilir
                    </option>
                    <option onChange={onChange} value="27-30">
                      27-30 Yaş Aralığında Olabilir
                    </option>
                    <option onChange={onChange} value="30-33">
                      30-33 Yaş Aralığında Olabilir
                    </option>
                  </select>
                </div>

                <div className="typeInput">
                  <label style={{ fontSize: "1.3rem" }}>
                    Oda Arkadaşı Arama Tipini Giriniz
                  </label>
                  <select
                    name="rentType"
                    value={values.rentType}
                    onChange={onChange}
                    required
                  >
                    <option
                      defaultChecked={true}
                      onChange={onChange}
                      value="birodaarkadasiariyor"
                    >
                      Oda Arkadaşı Arıyorum
                    </option>
                    <option onChange={onChange} value="birodayikirayaveriyor">
                      Başka Bir Odaya Taşınacak Birini Arıyorum
                    </option>
                  </select>
                </div>

                <div className="typeInput">
                  <label style={{ fontSize: "1.3rem" }}>
                    Ne Zaman Giriş Yapabileceğini Seçiniz
                  </label>
                  <select
                    name="dateOfEntry"
                    value={values.dateOfEntry}
                    onChange={onChange}
                    required
                  >
                    <option
                      defaultChecked={true}
                      onChange={onChange}
                      value="1-2hafta"
                    >
                      1 - 2 Hafta içerisinde Taşınabilir
                    </option>
                    <option onChange={onChange} value="2-4hafta">
                      2 - 4 Hafta arasında Taşınabilir
                    </option>
                    <option onChange={onChange} value="1-2ay">
                      1 - 2 Ay İçerisinde Taşınabilir
                    </option>
                    <option onChange={onChange} value="hemen">
                      Hemen
                    </option>
                  </select>
                </div>

                <div className="typeInput">
                  <label style={{ fontSize: "1.3rem" }}>
                    Hangi Aralıkta Ödeme Yapacağını Seçiniz
                  </label>
                  <select
                    name="priceSelection"
                    value={values.priceSelection}
                    onChange={onChange}
                    required
                  >
                    <option
                      defaultChecked={true}
                      onChange={onChange}
                      value="aylik"
                    >
                      Aylık Ödeme Yapabilir
                    </option>
                    <option onChange={onChange} value="haftalik">
                      Haftalık Ödeme Yapabilir
                    </option>
                    <option onChange={onChange} value="gunluk">
                      Günlük Ödeme Yapabilir
                    </option>
                  </select>
                </div>

                <div className="typeInput">
                  <label style={{ fontSize: "1.3rem" }}>
                    Haftada Kaç Defa Temizlik Yapmalı
                  </label>
                  <select
                    name="cleaningSituation"
                    value={values.cleaningSituation}
                    onChange={onChange}
                    required
                  >
                    <option defaultChecked={true} onChange={onChange} value="1">
                      1 Gün Yapsa İyi Olur
                    </option>
                    <option onChange={onChange} value="2">
                      2 Gün Yapsa İyi Olur
                    </option>
                    <option onChange={onChange} value="3">
                      3 Gün Yapsa İyi Olur
                    </option>
                  </select>
                </div>

                <div className="typeInput">
                  <label style={{ fontSize: "1.3rem" }} htmlFor="aboutPost">
                    Postunuzun açıklamasını yazınız
                  </label>
                  <textarea
                    name="aboutPost"
                    id="aboutPost"
                    onChange={(e) => setAboutPost(e.target.value)}
                    value={aboutPost}
                    required
                    className="textAreaDeneme"
                    style={{ height: "500px" }}
                    placeholder="örnek : Ekonomik nedenlerden ötürü Kirayı karşılayamıyorum O yüzden bir oda arkadaşına ihtiyacım var. evin bulunduğu mahalle çok sakin ve komşularımız da çok iyi insanlar.
                    "
                  />
                </div>
                <div className="typeInput">
                  <div className="buildingFeatures">
                    <label style={{ fontSize: "2rem" }}>
                      Bina Özelliklerini Seçiniz
                    </label>
                    {Postbinaozellikleri.map((ozellik, i) => (
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
                    {Postodaozellikleri.map((ozellik, i) => (
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
                      Hobilerinizi Seçiniz
                    </label>
                    {hobilerim.map((ozellik, i) => (
                      <label key={i} className="buildingFeaturesLabel">
                        <input
                          style={{ width: "1.5rem", height: "1.5rem" }}
                          type="checkbox"
                          name={ozellik.value}
                          checked={hobies.includes(ozellik.value)}
                          onChange={handleCheckboxHobies}
                        />
                        {ozellik.name}
                      </label>
                    ))}
                  </div>
                </div>

                <button type="submit">Submit</button>
              </form>
              {/* <DenemeUploadWidget avatars={avatars} setAvatars={setAvatars} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateMatesPage;

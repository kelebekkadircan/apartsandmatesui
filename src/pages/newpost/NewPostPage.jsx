import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UploadWidget from "~/components/uploadWidget/UploadWidget";
import { newRequest } from "~/utils/newRequest";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./newPostPage.scss";

const NewPostPage = () => {
  const [value, setValue] = useState("");
  const [images, setImages] = useState([]);
  const [error, setError] = useState("");
  const [isLatitude, setIsLatitude] = useState("");
  const [isLongitude, setIsLongitude] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(formData);
    const inputs = Object.fromEntries(formData);
    console.log(inputs, images);
    console.log({
      name: inputs.name,
      type: inputs.type,
      ownerName: inputs.ownerName,
      city: inputs.city,
      district: inputs.district,
      title: inputs.title,
      desc: value,
      address: inputs.address,
      shortDesc: inputs.shortDesc,
      email: inputs.email,
      phoneNumber: inputs.phoneNumber,
      images: images,
      // logo : logo,
      isPaid: inputs.isPaid,
      bedCount: parseInt(inputs.bedCount),
      distances: {
        busStop: parseInt(inputs.busStop),
        university: parseInt(inputs.university),
        market: parseInt(inputs.market),
      },
      priceRange: {
        min: parseInt(inputs.min),
        max: parseInt(inputs.max),
      },
      hotelContent: {
        aboutHotel: inputs.aboutHotel,
        standoutFeatures: inputs.standoutFeatures,
        locationInfo: inputs.locationInfo,
        roomInfo: inputs.roomInfo,
      },
      receptionNumber: inputs.receptionNumber,
      guestPolicy: inputs.guestPolicy,
    });
    // try {
    //   const res = await newRequest.post("/hotels", {
    //     name: inputs.name,
    //     type: inputs.type,
    //     ownerName: inputs.ownerName,
    //     city: inputs.city,
    //     district: inputs.district,
    //     title: inputs.title,
    //     desc: value,
    //     address: inputs.address,
    //     shortDesc: inputs.shortDesc,
    //     email: inputs.email,
    //     phoneNumber: inputs.phoneNumber,
    //     images: images,
    //     // logo : logo,
    //     isPaid: inputs.isPaid,
    //     bedCount: parseInt(inputs.bedCount),
    //     distances: {
    //       busStop: parseInt(inputs.busStop),
    //       university: parseInt(inputs.university),
    //       market: parseInt(inputs.market),
    //     },
    //     priceRange: {
    //       min: parseInt(inputs.min),
    //       max: parseInt(inputs.max),
    //     },
    //     hotelContent: {
    //       aboutHotel: inputs.aboutHotel,
    //       standoutFeatures: inputs.standoutFeatures,
    //       locationInfo: inputs.locationInfo,
    //       roomInfo: inputs.roomInfo,
    //     },
    //     receptionNumber: inputs.receptionNumber,
    //     guestPolicy: inputs.guestPolicy,
    //   });
    //   navigate("/" + res.data.id);
    // } catch (err) {
    //   console.log(err);
    //   setError(err.response.data.message);
    // }
  };

  const handleLatitude = (e) => {
    e.preventDefault();
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLatitude(position.coords.latitude);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  const handleLongitude = (e) => {
    e.preventDefault();

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setIsLongitude(position.coords.longitude);
      },
      (error) => {
        console.log(error);
      }
    );
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Yeni Otel Ekle</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" type="text" />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="kiz" defaultChecked>
                  Kız
                </option>
                <option value="erkek">Erkek</option>
                <option value="karma">Karma</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="ownerName">ownerName</label>
              <input id="ownerName" name="ownerName" type="text" />
            </div>
            <div className="item">
              <label htmlFor="city">city</label>
              <select name="city">
                <option value="Alanya" defaultChecked>
                  Alanya
                </option>
                <option value="Manavgat">Manavgat</option>
                <option value="Gazipaşa">Gazipaşa</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="district">district</label>
              <select name="district">
                <option value="oba" defaultChecked>
                  Oba
                </option>
                <option value="cikcilli">Cikcilli</option>
                <option value="kestel">Kestel</option>
                <option value="saray">Saray</option>
                <option value="gullerpinari">Güllerpınarı</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="title">Title</label>
              <input id="title" name="title" type="text" />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill theme="snow" onChange={setValue} value={value} />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input id="address" name="address" type="text" />
            </div>
            <div className="item">
              <label htmlFor="shortDesc">shortDesc</label>
              <input id="shortDesc" name="shortDesc" type="text" />
            </div>
            <div className="item">
              <label htmlFor="email">email</label>
              <input id="email" name="email" type="email" />
            </div>
            <div className="item">
              <label htmlFor="phoneNumber">phoneNumber</label>
              <input id="phoneNumber" name="phoneNumber" type="text" />
            </div>

            <div className="item">
              <label htmlFor="minPrice">minPrice </label>
              <input id="minPrice" name="minPrice" type="number" />
            </div>
            <div className="item">
              <label htmlFor="maxPrice">maxPrice </label>
              <input id="maxPrice" name="maxPrice" type="number" />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input id="city" name="city" type="text" />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input min={1} id="bedroom" name="bedroom" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input min={1} id="bathroom" name="bathroom" type="number" />
            </div>
            <div className="item">
              <label
                style={{ cursor: "pointer" }}
                onClick={handleLatitude}
                htmlFor="latitude"
              >
                Latitude
              </label>
              <input
                id="latitude"
                name="latitude"
                value={isLatitude || ""}
                type="text"
              />
            </div>
            <div className="item">
              <label
                style={{ cursor: "pointer" }}
                onClick={handleLongitude}
                htmlFor="longitude"
              >
                Longitude
              </label>
              <input
                value={isLongitude}
                id="longitude"
                name="longitude"
                type="text"
              />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select name="type">
                <option value="kiz" defaultChecked>
                  Kız
                </option>
                <option value="erkek">Erkek</option>
                <option value="karma">Karma</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="type">Property</label>
              <select name="property">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>

            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select name="utilities">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select name="pet">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input min={0} id="size" name="size" type="number" />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input min={0} id="school" name="school" type="number" />
            </div>
            <div className="item">
              <label htmlFor="bus">bus</label>
              <input min={0} id="bus" name="bus" type="number" />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input min={0} id="restaurant" name="restaurant" type="number" />
            </div>
            <button className="sendButton">Add</button>
            {error && <span> {error} </span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            cloudName: "debzpp4al",
            uploadPreset: "apartsandmates",
            multiple: true,
            maxImageFileSize: 2000000,
            folder: "hotels",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
};

export default NewPostPage;

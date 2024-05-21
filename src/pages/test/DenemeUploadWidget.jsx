import "./denemeUploadWidget.scss";
import UploadWidgetLogo from "~/components/uploadWidget/UploadWidgerLogo";

const DenemeUploadWidget = (props) => {
  const { avatars, setAvatars } = props;
  return (
    <div className="ImageContainerDeneme">
      <div className="hotelImageContainer">
        {avatars?.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidgetLogo
          uwConfig={{
            cloudName: "debzpp4al",
            uploadPreset: "apartsandmates",
            multiple: false,
            maxImageFileSize: 2000000,
            folder: "logos",
          }}
          setState={setAvatars}
        />
      </div>
    </div>
  );
};

export default DenemeUploadWidget;

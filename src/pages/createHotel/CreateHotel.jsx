import { useState } from "react";
import "./createHotel.scss";
import FormInput from "~/components/form/FormInput";
const CreateHotel = () => {
  // const [priceRange, setPriceRange] = useState({
  //   min: Number,
  //   max: Number,
  // });
  const [values, setValues] = useState({
    name: "",
    ownerName: "",
    title: "",
    address: "",
    shortDesc: "",
    email: "",
    phoneNumber: "",
    bedCount: 1,
    distances: {
      busStop: 1,
      university: 1,
      market: 1,
    },
    priceRange: {
      min: 1,
      max: 10,
    },
    hotelContent: {
      aboutHotel: "",
      standoutFeatures: "",
      locationInfo: "",
      roomInfo: "",
    },
    receptionNumber: "",
    type: "",
    district: "",
    guestPolicy: "",
    desc: "",
    images: [""],
  });

  const inputs = [
    // {
    //   id: 1,
    //   name: "name",
    //   type: "text",
    //   placeholder: "Otel Adı",
    //   errorMessage:
    //     "Otel adı en az 3 en fazla 25 karakter olmalıdır ve özel karakter içeremez!",
    //   label: "Otel Adı",
    //   // pattern: "^(?! )[A-Za-z0-9ŞşÇçİÜüĞğÖö ]{3,25}$",
    //   required: true,
    // },
    // {
    //   id: 2,
    //   name: "ownerName",
    //   type: "text",
    //   placeholder: "Otel Sahibi Adı",
    //   errorMessage:
    //     "Otel sahibi adı en az 3  en fazla 25 karakter olmalıdır ve özel karakter içeremez!",
    //   label: "Otel Sahibi Adı",
    //   // pattern: "^(?! )[A-Za-z0-9ŞşÇçİÜüĞğÖö ]{3,25}$",
    //   required: true,
    // },
    // {
    //   id: 3,
    //   name: "title",
    //   type: "text",
    //   placeholder: "Otel Başlığı",
    //   errorMessage:
    //     "Otel Başlığı en az 3  en fazla 25 karakter olmalıdır ve özel karakter içeremez!",
    //   label: "Otel Başlığı",
    //   // pattern: "^(?! )[A-Za-z0-9ŞşÇçİÜüĞğÖö ]{3,25}$",
    //   required: true,
    // },
    // {
    //   id: 4,
    //   name: "address",
    //   type: "text",
    //   placeholder: "Adres",
    //   errorMessage:
    //     "Adres en az 3  en fazla 45 karakter olmalıdır ve özel karakter içeremez!",
    //   label: "Adres",
    //   // pattern: "^(?! )[A-Za-z0-9ŞşÇçİÜüĞğÖö ]{3,45}$",
    //   required: true,
    // },
    // {
    //   id: 5,
    //   name: "shortDesc",
    //   type: "text",
    //   placeholder: "Kısaca Tanıtınız",
    //   errorMessage:
    //     "Kısa Tanımı en az 3  en fazla 45 karakter olmalıdır ve özel karakter içeremez!",
    //   label: "Hakkında",
    //   // pattern: "^(?! )[A-Za-z0-9ŞşÇçİÜüĞğÖö ]{3,45}$",
    //   required: true,
    // },
    // {
    //   id: 6,
    //   name: "email",
    //   type: "email",
    //   placeholder: "Email",
    //   errorMessage: "Geçerli bir mail adresi giriniz!",
    //   label: "Email",
    //   required: true,
    // },
    // {
    //   id: 7,
    //   name: "phoneNumber",
    //   type: "text",
    //   placeholder: "Telefon numarası",
    //   errorMessage: "Geçerli bir Telefon numarası Giriniz!",
    //   label: "Telefon Numarası",
    //   required: true,
    // },
    // {
    //   id: 8,
    //   name: "bedCount",
    //   type: "text",
    //   placeholder: "Yatak Sayısı",
    //   errorMessage: "Geçerli bir Sayı Giriniz!",
    //   // pattern: "^[0-9]{3,25}$",
    //   label: "Yatak Sayısı",
    //   required: true,
    // },
    {
      id: 9,
      name: "busStop",
      type: "text",
      placeholder: "En Yakın Otobüs Durağına Mesafe",
      errorMessage: "Geçerli bir Mesafe Giriniz!",
      // pattern: "^[0-9]{3,25}$",
      label: "Otobüs Durağına Mesafe",
      required: true,
    },
    {
      id: 10,
      name: "university",
      type: "text",
      placeholder: "Üniveriste Mesafe",
      // pattern: "^[0-9]{3,25}$",
      label: "Üniversiteye Olan Mesafesi",
      errorMessage: "Geçerli bir Mesafe Giriniz!",
      required: true,
    },
    {
      id: 11,
      name: "market",
      type: "text",
      placeholder: "Market Mesafe",
      // pattern: "^[0-9]{3,25}$",
      label: "En Yakın Markete Olan Mesafesi",
      errorMessage: "Geçerli bir Mesafe Giriniz Tl Cinsinden!",
      required: true,
    },
    // {
    //   id: 12,
    //   name: "price",
    //   type: "text",
    //   placeholder: "Ortalama Fiyatı Giriniz",
    //   label: "Oda Fiyatı",
    //   // pattern: "^[0-9]{3,25}$",
    //   errorMessage: "Geçerli bir Fiyat Giriniz Tl Cinsinden!",
    //   required: true,
    // },
    {
      id: 13,
      name: "receptionNumber",
      type: "text",
      placeholder: "Telefon numarası",
      // pattern: "^[0-9]{10,25}$",
      errorMessage: "Geçerli bir Telefon numarası Giriniz!",
      label: "Resepsiyon Numarası",
      required: true,
    },
    {
      id: 14,
      name: "min",
      type: "number",
      placeholder: "min price",
      errorMessage: "Geçerli bir min price Giriniz!",
      label: "min price",
      required: true,
    },
    {
      id: 15,
      name: "max",
      type: "number",
      placeholder: "max price",
      errorMessage: "Geçerli bir max price Giriniz!",
      label: "max price",
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted!", values);
  };

  const onChange = (e) => {
    // if (e.target.name === "min" || e.target.name === "max") {
    //   setPriceRange({ ...priceRange, [e.target.name]: e.target.value });
    // }

    const { name, value } = e.target;

    setValues((values) => ({
      ...values,
      priceRange: {
        ...values.priceRange,
        [name === "max" ? "max" : name === "min" ? "min" : name]: value,
      },
      distances: {
        ...values.distances,
        [name === "busStop"
          ? "busStop"
          : name === "university"
          ? "university"
          : "market"]: value,
      },

      [name]: value,
    }));
  };

  return (
    <div className="createHotel">
      <div className="createHotelContainer">
        <div className="createHotelWrapper">
          <div className="createHotelForm">
            <h1>Otelini Oluştur</h1>
            <form onSubmit={handleSubmit}>
              {inputs.map((input) => (
                <FormInput
                  key={input.id}
                  {...input}
                  value={
                    values[input.name] === "max"
                      ? values.priceRange.max
                      : values[input.name] === "min"
                      ? values.priceRange.min
                      : values[input.name]
                  }
                  onChange={onChange}
                />
              ))}
              <div className="typeInput">
                <label>Tipi</label>
                <select
                  name="type"
                  value={values.type}
                  onChange={onChange}
                  required
                  defaultChecked={true}
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
                  <option onChange={onChange} value="kadin">
                    Kadın
                  </option>
                </select>
              </div>
              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateHotel;

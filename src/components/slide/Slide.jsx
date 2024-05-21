import "./slide.scss";
import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Card from "../card/Card";
import { useEffect, useRef, useState } from "react";
import { newRequest } from "~/utils/newRequest";

const Slide = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 900,
    slidesToShow: 4,
    slidesToScroll: 2,
    initialSlide: 0,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 2500,

    responsive: [
      {
        breakpoint: 1170,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 960,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 560,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };
  const [isLoading, setIsLoading] = useState(false);
  const [paidHotels, setPaidHotels] = useState([]);
  const [error, setError] = useState();

  const abortControllerRef = useRef(null);

  useEffect(() => {
    const fetchPaidHotels = async () => {
      abortControllerRef.current?.abort();
      abortControllerRef.current = new AbortController();

      setIsLoading(true);

      try {
        const response = await newRequest.get("hotels/paid", {
          signal: abortControllerRef.current?.signal,
        });
        setPaidHotels(response.data);
      } catch (e) {
        if (e.name === "AbortError") {
          console.log("Request was aborted");
          return;
        }
        setError(e);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPaidHotels();
  }, []);

  if (error) {
    // location.reload();
  }

  console.log(paidHotels);

  return paidHotels.length === 0 ? null : (
    <Slider {...settings}>
      {isLoading ? (
        <div>...Loading...</div>
      ) : (
        paidHotels?.map((item, i) => {
          return <Card key={i} item={item} />;
        })
      )}
    </Slider>
  );
};

export default Slide;

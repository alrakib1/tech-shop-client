import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthContext } from "../providers/AuthProvider";
import Products from "./Products";

// Import Swiper styles
import "swiper/css";

const HpProducts = () => {
  const { loading } = useContext(AuthContext);
  const data = useLoaderData();
  if (loading) {
    return (
      <span className="loading loading-bars loading-lg mx-auto max-w-7xl flex justify-center items-center"></span>
    );
  }
  const hpProducts = data.filter((data) => data.brand == "Hp");

  if (hpProducts.length <= 0) {
    return (
      <div className="max-w-7xl mx-auto h-96 flex justify-center items-center">
        <Helmet>
          <title>TechLand || Hp Products</title>
        </Helmet>
        <h2 className="text-4xl font-semibold text-center ">
          Products coming soon
        </h2>
      </div>
    );
  } else {
    return (
      <div className="max-w-7xl mx-auto mb-10">
        <Helmet>
          <title>TechLand || Hp Products</title>
        </Helmet>
        <Swiper
          className="mb-10"
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/hPW7thpz/hp-pavilion-laptop-14-dv2014tu-500x500.jpg"
              alt="Samsung-Galaxy-A71-5-G-Prism-Cube-Blue"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/C0ZbNks/hp-laptop-15s-fq3234tu-02.jpg"
              alt="samsung-galaxy-s22-ultra-Custom-Mac-BD"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/znPZbCq/15s-eq3619au-01-500x500.webp"
              alt="1669043087-google-pixel-7-pro-1669043068"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/DQtWvgm/hp-probook-440-g9-821p0pa-i5-1235u-8gb-512gb-ssd-14-inch-fhd-dos-1-year-warranty-backlit-keyboard-50.webp"
              alt="download-3"
              border="0"
            />
          </SwiperSlide>
        </Swiper>

        <h2 className="text-4xl font-bold mb-10">Hp Products</h2>
        <div className="grid grid-cols-2 gap-10 mx-auto">
          {hpProducts.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
      </div>
    );
  }
};
export default HpProducts;

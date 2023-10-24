import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthContext } from "../providers/AuthProvider";
import Products from "./Products";

// Import Swiper styles
import "swiper/css";

const SamsungProducts = () => {
  const { loading } = useContext(AuthContext);
  const data = useLoaderData();
  if (loading) {
    return (
      <span className="loading loading-bars loading-lg mx-auto max-w-7xl flex justify-center items-center"></span>
    );
  }
  const samsungProducts = data.filter((data) => data.brand == "Samsung");

  if (samsungProducts.length <= 0) {
    return (
      <div className="max-w-7xl mx-auto h-96 flex justify-center items-center">
        <Helmet>
          <title>TechLand || Samsung Products</title>
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
          <title>TechLand || Samsung Products</title>
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
              src="https://i.ibb.co/59kPYf3/Samung-Galaxy-S21-FE-side-F-B.jpg"
              alt="Samsung-Galaxy-A71-5-G-Prism-Cube-Blue"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/5sFZTQ2/Samsung-Galaxy-S21-Ultra-5-G-500x500.jpg"
              alt="samsung-galaxy-s22-ultra-Custom-Mac-BD"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/NZ5sT4z/samsung-galaxy-s22-ultra-Custom-Mac-BD.webp"
              alt="1669043087-google-pixel-7-pro-1669043068"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.ibb.co/ZTHJkTD/Samsung-Galaxy-A71-5-G-Prism-Cube-Blue.jpg"
              alt="download-3"
              border="0"
            />
          </SwiperSlide>
        </Swiper>
        <h2 className="text-4xl font-bold mb-10">Samsung Products</h2>
        <div className="grid grid-cols-2 gap-10 mx-auto">
          {samsungProducts.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
      </div>
    );
  }
};

export default SamsungProducts;

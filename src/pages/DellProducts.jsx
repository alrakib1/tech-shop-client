import { useContext } from "react";
import { Helmet } from "react-helmet";
import { useLoaderData } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { AuthContext } from "../providers/AuthProvider";
import Products from "./Products";

// Import Swiper styles
import "swiper/css";

const DellProducts = () => {
  const { loading } = useContext(AuthContext);
  const data = useLoaderData();
  if (loading) {
    return (
      <span className="loading loading-bars loading-lg mx-auto max-w-7xl flex justify-center items-center"></span>
    );
  }
  const dellProducts = data.filter((data) => data.brand == "Dell");

  if (dellProducts.length <= 0) {
    return (
      <div className="max-w-7xl mx-auto h-96 flex justify-center items-center">
        <Helmet>
          <title>TechLand || Dell Products</title>
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
          <title>TechLand || Dell Products</title>
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
              src="https://i.postimg.cc/KzvJV1SH/a7610093-fedf-43ba-aa3b-cadab5f19c6e-f3dd64cab753064e202a08c9978663a6.jpg"
              alt="Samsung-Galaxy-A71-5-G-Prism-Cube-Blue"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/rw79jfQz/4-21.jpg"
              alt="samsung-galaxy-s22-ultra-Custom-Mac-BD"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/ZRqb7xfv/2610064e1e04a718183.png"
              alt="1669043087-google-pixel-7-pro-1669043068"
              border="0"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://i.postimg.cc/HW3gvhRS/dell-xps-9315-12thgen-ci5-13inch-sky-laptop-price-in-pakistan.jpg"
              alt="download-3"
              border="0"
            />
          </SwiperSlide>
        </Swiper>
        <h2 className="text-4xl font-bold mb-10">Dell Products</h2>
        <div className="grid grid-cols-2 gap-10 mx-auto">
          {dellProducts.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
      </div>
    );
  }
};

export default DellProducts;

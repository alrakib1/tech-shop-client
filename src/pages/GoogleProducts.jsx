
import { useLoaderData } from "react-router-dom";
import Products from "./Products";
import { Helmet } from "react-helmet";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const GoogleProducts = () => {
  const data = useLoaderData();

  const googleProducts = data.filter((data) => data.brand == "Google");
 
  
  if(googleProducts.length <= 0){
      return (
          <div
          className="max-w-7xl mx-auto h-96 flex justify-center items-center">
            <Helmet>
          <title>TechLand || Google Products</title>
        </Helmet>
              <h2 className="text-4xl font-semibold text-center ">Products coming soon</h2>
          </div>
      )
  }
  else{
  return (
      <div className="max-w-7xl mx-auto mb-10">
        <Helmet>
          <title>TechLand || Google Products</title>
        </Helmet>
        <Swiper className="mb-10"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/zhGxqTb/1669043087-google-pixel-7-pro-1669043068.jpg"
            alt="Samsung-Galaxy-A71-5-G-Prism-Cube-Blue"
            border="0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.postimg.cc/Wb3chSKy/ezgif-com-crop.jpg"
            alt="samsung-galaxy-s22-ultra-Custom-Mac-BD"
            border="0"
          />
        </SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/YCXtMhCg/ezgif-com-webp-to-jpg.jpg" alt="1669043087-google-pixel-7-pro-1669043068" border="0" /></SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/gMpy1NW/px5.jpg" alt="download-3" border="0" /></SwiperSlide>
      </Swiper>





        <h2 className="text-4xl font-bold mb-10">Google Products</h2>
        <div className="grid grid-cols-2 gap-10 mx-auto">
          {googleProducts.map((product) => (
            <Products key={product._id} product={product}></Products>
          ))}
        </div>
      </div>
    );
  }
  
  };

export default GoogleProducts;



import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

const Home = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <Helmet>
        <title>TechLand</title>
      </Helmet>
      <div className="mb-10 flex items-center justify-center">
        <p className="font-bold text-2xl mr-5">Switch theme :</p>
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={handleToggle}
            checked={theme === "light" ? false : true}
          />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
      </div>
      <img
        className="mx-auto"
        src="https://www.shutterstock.com/shutterstock/videos/1034191469/thumb/7.jpg"
        alt=""
      />
      {/* product section */}
      <hr className="mt-28 w-1/2 mx-auto" />
      <h3 className="text-3xl font-semibold text-center mt-3 mb-3">Brands</h3>
      <hr className="mb-20 w-1/2 mx-auto" />
      <div className="grid md:grid-cols-2 gap-10 mb-10">
        {/* card1 */}

        <Link to="/google">
          <div className="card w-3/4 md:h-[252px] md:w-[286px] lg:h-[357px] lg:w-[460px] bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/17ZwDXY/Google-logo.png"
                alt="google-logo"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Google</h2>
            </div>
          </div>
        </Link>
        {/* card2 */}
        <Link to="/apple">
          <div className="card w-3/4 md:h-[252px] md:w-[286px] lg:h-[357px] lg:w-[460px] bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/CBzPshK/apple-inc-minimalism-logo-simple-wallpaper-preview.jpg"
                alt="apple-logo"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Apple</h2>
            </div>
          </div>
        </Link>
        {/* card3 */}
        <Link to="/dell">
          <div className="card w-3/4 md:h-[252px] md:w-[286px] lg:h-[357px] lg:w-[460px] bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/1Tgy1RC/Dell-Logo.png"
                alt="dell-logo"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Dell</h2>
            </div>
          </div>
        </Link>
        {/* card1 */}
        <Link to="/hp">
          <div className="card w-3/4 md:h-[252px] md:w-[286px] lg:h-[357px] lg:w-[460px] bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/HHC79FY/HP-Logo-1999.jpg"
                alt="google-logo"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Hp</h2>
            </div>
          </div>
        </Link>

        {/* card1 */}
        <Link to="/samsung">
          <div className="card w-3/4 md:h-[252px] md:w-[286px] lg:h-[357px] lg:w-[460px] bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
              <img
                src="https://i.ibb.co/mqzHwN1/download-4.jpg"
                alt="google-logo"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Samsung</h2>
            </div>
          </div>
        </Link>
        {/* card1 */}
        <Link to="/nokia">
          <div className="card w-3/4 md:h-[252px] md:w-[286px] lg:h-[357px] lg:w-[460px] bg-base-100 shadow-xl mx-auto">
            <figure className="px-10 pt-10">
              <img
                src="https://i.postimg.cc/tgQKSkMB/BEIB3-EDB6-NI5-BFTPSP6-O3476-AA.jpg"
                alt="google-logo"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center text-center">
              <h2 className="card-title">Nokia</h2>
            </div>
          </div>
        </Link>
      </div>
      <hr className="mt-28 w-1/2 mx-auto" />
      <h3 className="text-3xl font-semibold text-center mt-3 mb-3">Our Featured Products</h3>
      <hr className="mb-20 w-1/2 mx-auto" />
      <Swiper className="mb-10"
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <img
            src="https://i.ibb.co/ZTHJkTD/Samsung-Galaxy-A71-5-G-Prism-Cube-Blue.jpg"
            alt="Samsung-Galaxy-A71-5-G-Prism-Cube-Blue"
            border="0"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.ibb.co/NZ5sT4z/samsung-galaxy-s22-ultra-Custom-Mac-BD.webp"
            alt="samsung-galaxy-s22-ultra-Custom-Mac-BD"
            border="0"
          />
        </SwiperSlide>
        <SwiperSlide><img src="https://i.ibb.co/zhGxqTb/1669043087-google-pixel-7-pro-1669043068.jpg" alt="1669043087-google-pixel-7-pro-1669043068" border="0" /></SwiperSlide>
        <SwiperSlide><img src="https://i.postimg.cc/Wb3chSKy/ezgif-com-crop.jpg" alt="download-3" border="0" /></SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Home;

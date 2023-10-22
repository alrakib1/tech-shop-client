import { Link } from "react-router-dom";

const Home = () => {




  return (
    <div className="max-w-7xl mx-auto min-h-screen">
      <img
        className="mx-auto"
        src="https://www.shutterstock.com/shutterstock/videos/1034191469/thumb/7.jpg"
        alt=""
      />
      {/* product section */}
      <h3 className="text-3xl font-semibold text-center mt-28 mb-20">Brands</h3>
      <div className="grid md:grid-cols-2 gap-10 mb-10">


        {/* card1 */}

     <Link to='/google'>
     <div className="card w-3/4 md:h-[252px] md:w-[286px] lg:h-[357px] lg:w-[460px] bg-base-100 shadow-xl mx-auto">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/17ZwDXY/Google-logo.png"
              alt="google-logo" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Google</h2>
  </div>
</div>
     </Link>
        {/* card2 */}
      <Link to='/apple'>
      
      <div className="card w-3/4 md:h-[252px] md:w-[286px] lg:h-[357px] lg:w-[460px] bg-base-100 shadow-xl mx-auto">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/CBzPshK/apple-inc-minimalism-logo-simple-wallpaper-preview.jpg"
              alt="apple-logo" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Apple</h2>
  </div>
</div>
</Link>
        {/* card3 */}
      <Link to='/dell'>
      <div className="card w-3/4 md:h-[252px] md:w-[286px] lg:h-[357px] lg:w-[460px] bg-base-100 shadow-xl mx-auto">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/1Tgy1RC/Dell-Logo.png"
              alt="dell-logo" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Dell</h2>
  </div>
</div></Link>
        {/* card1 */}
      <Link to='/hp'>
      <div className="card w-3/4 md:h-[252px] md:w-[286px] lg:h-[357px] lg:w-[460px] bg-base-100 shadow-xl mx-auto">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/HHC79FY/HP-Logo-1999.jpg"
              alt="google-logo" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Hp</h2>
  </div>
</div>
      </Link>

        {/* card1 */}
        <Link to='/samsung'>
        <div className="card w-3/4 md:h-[252px] md:w-[286px] lg:h-[357px] lg:w-[460px] bg-base-100 shadow-xl mx-auto">
  <figure className="px-10 pt-10">
    <img src="https://i.ibb.co/mqzHwN1/download-4.jpg"
              alt="google-logo" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Samsung</h2>
  </div>
</div>
        </Link>
        {/* card1 */}
     <Link to='/nokia'>
     <div className="card w-3/4 md:h-[252px] md:w-[286px] lg:h-[357px] lg:w-[460px] bg-base-100 shadow-xl mx-auto">
  <figure className="px-10 pt-10">
    <img src="https://i.postimg.cc/tgQKSkMB/BEIB3-EDB6-NI5-BFTPSP6-O3476-AA.jpg"
              alt="google-logo" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Nokia</h2>
  </div>
</div>
     </Link>
      </div>
    </div>
  );
};

export default Home;

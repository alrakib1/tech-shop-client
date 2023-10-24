import { AiFillStar } from "react-icons/ai";

const UserReview = () => {
  return (
    <div className=" mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {/* review-1 */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </h2>
          <p>
            "I brought a hp laptop and it working just fine. They also provided 1
            year official warranty"
          </p>
          <div className="card-actions">
            <div className="avatar placeholder flex gap-4  items-center">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span>JM</span>
              </div>
            <h2>Jason Mason</h2>
            </div>
          </div>
        </div>
      </div>
      {/* review-2 */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </h2>
          <p>
            "I always buy products from them. They are trusted and well organized."
          </p>
          <div className="card-actions">
            <div className="avatar placeholder flex gap-4  items-center">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <img src="https://i.ibb.co/mHd19x5/photo-1566753323558-f4e0952af115.jpg" alt="photo-1566753323558-f4e0952af115" border="0" />
              </div>
            <h2>Jonathan</h2>
            </div>
          </div>
        </div>
      </div>
      {/* review-3 */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </h2>
          <p>
            "They delayed delivery of my product. So I am giving 3 star."
          </p>
          <div className="card-actions">
            <div className="avatar placeholder flex gap-4  items-center">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <img src="https://i.ibb.co/F4Fz5Fc/photo-1604072366595-e75dc92d6bdc.jpg" alt="photo-1604072366595-e75dc92d6bdc" border="0" />
              </div>
            <h2>Jessica</h2>
            </div>
          </div>
        </div>
      </div>
      {/* review-4 */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </h2>
          <p>
            "I am satisfied with their products and service."
          </p>
          <div className="card-actions">
            <div className="avatar placeholder flex gap-4  items-center">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <img src="https://i.ibb.co/nfw041K/1-intro-photo-final.jpg" alt="1-intro-photo-final" border="0" />
              </div>
            <h2>Adam</h2>
            </div>
          </div>
        </div>
      </div>
      {/* review-1 */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </h2>
          <p>
            "I brought a phone and I have been using it nonstop. It's cool"
          </p>
          <div className="card-actions">
            <div className="avatar placeholder flex gap-4  items-center">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
                <span>RM</span>
              </div>
            <h2>Rahat Mehmood</h2>
            </div>
          </div>
        </div>
      </div>
      {/* review-1 */}
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
            <AiFillStar></AiFillStar>
          </h2>
          <p>
            "I definitely recommend products from them. They are trusted and well behaved with their customers."
          </p>
          <div className="card-actions">
            <div className="avatar placeholder flex gap-4  items-center">
              <div className="bg-neutral-focus text-neutral-content rounded-full w-12">
              <img src="https://i.ibb.co/YWZBWcy/photo-1545263595-8519601eec49.jpg" alt="photo-1545263595-8519601eec49" border="0" />
              </div>
            <h2>Hana Akari</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReview;

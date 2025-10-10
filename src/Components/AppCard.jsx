import { Link } from "react-router";
import download from "../assets/icon-downloads.png";
import rating from "../assets/icon-ratings.png";

const AppCard = ({ app }) => {
  const { image, title, ratingAvg, downloads, companyName, id } = app;
  return (
    <Link to={`/apps/${id}`} className="group">
      <div className="card bg-base-100  border shadow-sm hover:scale-105 transition ease-in-out">
        <figure className="h-48 overflow-hidden">
          <img className="w-full h-full" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-2xl text">{title}</h2>
          <p className="text-gray-400 font-semibold">{companyName}</p>
          <div className="card-actions justify-between">
            <div className="badge badge-outline text-[#00D390] font-bold bg-green-100">
              <img className="h-4 w-4" src={download} alt="" />
              {downloads / 1000000000} M
            </div>
            <div className="badge badge-outline font-bold text-[#FF8811] bg-[#FFF0E1]">
              <img className="h-4 w-4" src={rating} alt="" />
              {ratingAvg}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AppCard;

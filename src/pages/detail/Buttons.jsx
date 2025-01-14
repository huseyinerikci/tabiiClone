import { MdOutlineKeyboardArrowLeft as Back } from "react-icons/md";
import { Link } from "react-router-dom";
import AddButton from "../../components/add-button";
import { useEffect } from "react";

function Buttons({ movie }) {
  return (
    <div className="flex justify-between mb-5">
      <Link
        to={"../"}
        className="bg-gray-600 hover:bg-gray-700 hero-btn min-w-0 px-5"
      >
        <Back className="text-xl" />
        Back
      </Link>
      <AddButton movie={movie} />
    </div>
  );
}

export default Buttons;

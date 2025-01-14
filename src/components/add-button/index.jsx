import React from "react";
import { BsBookmarkPlusFill } from "react-icons/bs";
import { GoBookmarkSlashFill } from "react-icons/go";
import { useDispatch, useSelector } from "react-redux";
import { toggleMovieList } from "../../redux/actions/listActions";

function AddButton({ movie }) {
  const dispatch = useDispatch();
  const { list } = useSelector((store) => store);

  const isAdded = list.find((item) => item.id == movie.id);

  const handleClick = () => {
    dispatch(toggleMovieList(movie, !isAdded));
  };

  return (
    <button
      onClick={handleClick}
      className="hero-btn bg-[#00FF99]  hover:bg-[#00ff99a0] text-black"
    >
      {isAdded ? (
        <>
          <GoBookmarkSlashFill />
          Remove From List
        </>
      ) : (
        <>
          <BsBookmarkPlusFill />
          Add To List
        </>
      )}
    </button>
  );
}

export default AddButton;

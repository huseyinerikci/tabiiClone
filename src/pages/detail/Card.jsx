import { useState } from "react";
import { baseImgUrl } from "../../utils/constants";

function Card({ comment }) {
  const [isOpen, setIsOpen] = useState(false);
  const text = isOpen
    ? comment.content
    : comment.content.slice(0, 100) + "...daha fazla";
  const getPicture = (comment) => {
    return comment.author_details.avatar_path
      ? baseImgUrl + comment.author_details.avatar_path
      : "/defaultImg.jpg";
  };
  return (
    <div className="my-5">
      <div className=" flex gap-3 bg-black  p-5 rounded-md ">
        <img
          src={getPicture(comment)}
          className="rounded-full size-12 items-start"
        />
        <div className="flex flex-col gap-2">
          <h5 className="flex gap-2 items-center">
            <span
              className="font-semibold text-[#00ff99]
          "
            >
              {comment.author}
            </span>
            <span className="text-gray-500 text-sm">
              {new Date(comment.updated_at).toLocaleDateString("en", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })}
            </span>
          </h5>
          <p
            onClick={() => setIsOpen(!isOpen)}
            className="whitespace-pre-wrap cursor-pointer"
          >
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;

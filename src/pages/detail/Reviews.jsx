import { CgDanger } from "react-icons/cg";
import Card from "./Card";

function Reviews({ comments }) {
  return comments.length > 0 ? (
    <div className="my-10">
      <h1 className="text-2xl">Reviews ({comments.length})</h1>
      <div>
        <div className="flex items-center gap-3 bg-[#00ff99]  text-white rounded p-5 my-5 opacity-75 text-2xl">
          <span>
            <CgDanger className="text-3xl" />
          </span>
          <span className="font-semibold">
            Only registered members can comment
          </span>
        </div>

        {comments.map((comment) => (
          <Card key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  ) : (
    <div className="mb-10 text-center text-zinc-400">
      There are no comments yet
    </div>
  );
}

export default Reviews;

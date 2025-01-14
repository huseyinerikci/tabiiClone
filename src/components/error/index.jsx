const Error = ({ info }) => {
  return (
    <div className="grid place-items-center">
      <div className=" bg-[#00FF99] h-fit rounded p-6 flex flex-col gap-5 mt-44 text-center text-black">
        <p>Sorry, an error occurred, please try again later</p>
        <h2 className="font-semibold">{info}</h2>
      </div>
    </div>
  );
};

export default Error;

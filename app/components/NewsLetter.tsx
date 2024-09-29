import React from "react";

const NewsLetter = () => {
  return (
    <div className={"text-center bg-wh-10 px-5 py-10"}>
      <h4 className={"font-semibold text-base"}>Subscribe to our Newsletter</h4>
      <p className={"text-wh-500 my-3 w-5/6 mx-auto"}>
        Enter email address to get update news about the team
      </p>
      <input
        className={"text-center w-5/6 min-w-[100px] px-5 py-2 border-2"}
        placeholder={"Enter Email Address"}
      />
      <button
        className={
          "bg-accent-red text-wh-10 font-semibold w-5/6 min-w-[100px] py-2 px-5 mt-3"
        }>
        SUBSCRIBE
      </button>
    </div>
  );
};

export default NewsLetter;

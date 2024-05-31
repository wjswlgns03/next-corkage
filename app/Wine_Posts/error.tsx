"use client";
import React from "react";
import { BounceLoader } from "react-spinners";

const Error = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <div>
        <BounceLoader />
      </div>
      <div className="font-bold mt-10">문제가 발생했습니다...</div>
    </div>
  );
};

export default Error;

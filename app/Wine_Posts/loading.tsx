"use client";
import React from 'react';
import { DotLoader } from "react-spinners";

const Loading = () => {
    return (
        <div className="flex flex-col items-center mt-10">
          <div>
            <DotLoader />
          </div>
          <div className="font-bold mt-10">로딩중입니다...</div>
        </div>
      );
    };

export default Loading
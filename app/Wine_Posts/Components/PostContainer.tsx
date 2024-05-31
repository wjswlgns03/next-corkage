"use client";
import { getPosts } from "@/apis/Wine_Posts";
import React, { useEffect } from "react";

const PostContainer = () => {
  useEffect(() => {
    getPosts();
  }, []);

  return <div>PostContainer</div>;
};

export default PostContainer;

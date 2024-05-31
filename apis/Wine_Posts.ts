"use client";
import { createSupabaseBrowserClient } from "@/lib/client/supabase";

// 게시물 가져오기
export const getPosts = async () => {
  const supabase = createSupabaseBrowserClient();
  const { data, error } = await supabase.from("Wine_Posts").select("*").is("deleted_at", null);

  if (error) {
    console.error("Error fetching posts:", error);
    return [];
  }

  return data;
};

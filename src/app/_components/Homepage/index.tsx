"use client";

import { GetCategories } from "@/apis";
import { useQuery } from "@tanstack/react-query";

export const Homepage = () => {
  const { data } = useQuery({
    queryKey: ["Category"],
    queryFn: GetCategories,
  });

  console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen p-8 pb-20 gap-16 sm:p-20"></div>
  );
};

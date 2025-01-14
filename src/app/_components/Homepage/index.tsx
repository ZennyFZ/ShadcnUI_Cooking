"use client";

import { GetCategories } from "@/apis";
import { CategoryInterface } from "@/types";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";
import { useCallback } from "react";
import { ArrowRight } from "lucide-react";
import { Loading } from "../Loading";

export const Homepage = () => {
  const { data: categoryData, isLoading } = useQuery({
    queryKey: ["Category"],
    queryFn: GetCategories,
  });

  const homepageFilteredData = useCallback(() => {
    const gachaCategoryData = categoryData?.filter(
      (category: CategoryInterface) => {
        return category.parentCategory === "6760474d0646d34fdb23069a";
      }
    );

    const steamCategoryData = "";

    const softwareCategoryData = categoryData?.filter(
      (category: CategoryInterface) => {
        return (
          category.parentCategory === "67643542a9e90b228669c7f4" ||
          category.parentCategory === "6764354aa9e90b228669c7f9" ||
          category.parentCategory === "677e8578bb8bba820fe80a3a"
        );
      }
    );

    const accountCategoryData = categoryData?.filter(
      (category: CategoryInterface) => {
        return (
          category.parentCategory === "677e8578bb8bba820fe80a3a" ||
          category.parentCategory === "677e85a9bb8bba820fe80a3f" ||
          category.parentCategory === "677e85bfbb8bba820fe80a44" ||
          category.parentCategory === "677e85cabb8bba820fe80a49" ||
          category.parentCategory === "677e85d0bb8bba820fe80a4e" ||
          category.parentCategory === "677e85d6bb8bba820fe80a53"
        );
      }
    );

    return {
      gachaCategoryData,
      steamCategoryData,
      softwareCategoryData,
      accountCategoryData,
    };
  }, [categoryData]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen p-28">
        <Loading
          src="/images/ArisLoading3.gif"
          content="Đang tải trang chủ"
          titleCSS="text-xl"
          ImageWidth={200}
          Imageheight={200}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen p-28">
      <div className="flex rounded-lg p-4 w-full">
        <div className="flex flex-col gap-4 w-1/3">
          <div className="text-4xl font-bold">Gacha Games</div>
          <div className="text-lg">
            Nạp qua UID hoặc cung cấp thông tin tài khoản
          </div>
          <div className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-80">
            <span className="font-bold">Xem thêm</span>
            <ArrowRight size={20} />
          </div>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {homepageFilteredData()
            .gachaCategoryData?.slice(0, 10)
            .map((category: CategoryInterface) => (
              <div
                key={category._id}
                className="flex flex-col rounded-lg p-4 gap-4 cursor-pointer"
              >
                <Image
                  src={category.imageUrl}
                  alt={category.name}
                  width={200}
                  height={200}
                  className="rounded-lg"
                />
                <div className="font-bold">{category.name}</div>
              </div>
            ))}
        </div>
      </div>

      {/* <div className="flex rounded-lg p-4 w-full">
          <div className="flex flex-col gap-4 w-1/3">
            <div className="text-4xl font-bold">Steam</div>
            <div className="text-lg mt-4">
              Key game, gift game, wallet, steam Items
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-80">
              <span className="font-bold">Xem thêm</span>
              <ArrowRight size={20} />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 md:grid-cols-2">
            {homepageFilteredData()
              .gachaCategoryData?.slice(0, 10)
              .map((category: CategoryInterface) => (
                <div
                  key={category._id}
                  className="flex flex-col rounded-lg p-4 gap-4 cursor-pointer"
                >
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <div className="font-bold">{category.name}</div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex rounded-lg p-4 w-full">
          <div className="flex flex-col gap-4 w-1/3">
            <div className="text-4xl font-bold">Phần Mềm</div>
            <div className="text-lg mt-4">
              VPN, Diệt virus, Tiện ích, Phần mềm bản quyền
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-80">
              <span className="font-bold">Xem thêm</span>
              <ArrowRight size={20} />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {homepageFilteredData()
              .softwareCategoryData?.slice(0, 10)
              .map((category: CategoryInterface) => (
                <div
                  key={category._id}
                  className="flex flex-col rounded-lg p-4 gap-4 cursor-pointer"
                >
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <div className="font-bold">{category.name}</div>
                </div>
              ))}
          </div>
        </div>

        <div className="flex rounded-lg p-4 w-full">
          <div className="flex flex-col gap-4 w-1/3">
            <div className="text-4xl font-bold">Tài Khoản</div>
            <div className="text-lg mt-4">
              Giải trí, học tập, thiết kế, code, AI
            </div>
            <div className="flex flex-row items-center gap-2 cursor-pointer hover:opacity-80">
              <span className="font-bold">Xem thêm</span>
              <ArrowRight size={20} />
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {homepageFilteredData()
              .accountCategoryData?.slice(0, 10)
              .map((category: CategoryInterface) => (
                <div
                  key={category._id}
                  className="flex flex-col rounded-lg p-4 gap-4 cursor-pointer"
                >
                  <Image
                    src={category.imageUrl}
                    alt={category.name}
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <div className="font-bold">{category.name}</div>
                </div>
              ))}
          </div>
        </div> */}
    </div>
  );
};

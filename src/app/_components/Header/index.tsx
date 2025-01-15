"use client";
import {
  ArrowDown,
  MenuIcon,
  ShoppingBag,
  ShoppingCart,
  User2,
} from "lucide-react";
import { Input } from "../Input";
import Image from "next/image";

export const Header = () => {
  const handleMobileMenu = () => {
    const mobileMenu = document.getElementById("mobile_menu");
    const mobileMenuDropdown = document.getElementById("mobile_menu_dropdown");
    const headerProduct = document.getElementById("header_product");
    const headerMobileSearch = document.getElementById("header_mobile_search");
    const headerCart = document.getElementById("header_cart");
    const headerRegistration = document.getElementById("header_registration");

    if (
      mobileMenu &&
      mobileMenuDropdown &&
      headerProduct &&
      headerMobileSearch &&
      headerCart &&
      headerRegistration
    ) {
      mobileMenu.classList.toggle("hidden");
      mobileMenuDropdown.classList.toggle("hidden");
      headerProduct.classList.toggle("hidden");
      headerProduct.classList.toggle("flex");
      headerCart.classList.toggle("hidden");
      headerCart.classList.toggle("flex");
      headerMobileSearch.classList.toggle("hidden");
      headerRegistration.classList.toggle("hidden");
      headerRegistration.classList.toggle("flex");
    }
  };

  return (
    <div className="flex flex-col p-4 w-full items-center justify-center gap-4 laptop:join-[flex-row,w-full,gap-4,justify-evenly,h-20,items-center,p-0]">
      <div className="flex items-center gap-2 font-semibold cursor-default">
        <Image src="/images/logo.png" alt="logo" width={40} height={40} />
        <div className="text-base">ZennyShop</div>
      </div>
      <div
        id="header_product"
        className="gap-2 hidden laptop:join-[flex,gap-2,font-semibold,cursor-pointer]"
      >
        <ShoppingBag size={20} />
        Sản Phẩm
      </div>
      <div
        id="header_search"
        className="hidden laptop:join-[flex,w-1/2,gap-2,items-center]"
      >
        <Input className="text-black w-full" placeholder="Tìm kiếm sản phẩm" />
      </div>
      <div
        id="header_cart"
        className="gap-2 hidden laptop:join-[flex,gap-2,font-semibold,cursor-pointer]"
      >
        <ShoppingCart size={20} />
        Giỏ Hàng
      </div>
      <div
        id="header_registration"
        className="gap-2 hidden laptop:join-[flex,gap-2,font-semibold,cursor-pointer]"
      >
        <User2 size={20} />
        Đăng Nhập / Đăng Ký
      </div>
      <div id="header_mobile_search" className="hidden laptop:join-[hidden]">
        <Input
          className="text-black w-full text-center"
          placeholder="Tìm kiếm sản phẩm"
        />
      </div>
      <MenuIcon
        id="mobile_menu"
        size={20}
        className="laptop:join-[hidden,cursor-pointer]"
        onClick={handleMobileMenu}
      />
      <ArrowDown
        id="mobile_menu_dropdown"
        size={20}
        className="hidden"
        onClick={handleMobileMenu}
      />
    </div>
  );
};

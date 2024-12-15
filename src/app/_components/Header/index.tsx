import { ShoppingBag, ShoppingCart, User2 } from "lucide-react"
import { Input } from "../Input"
import Image from "next/image"

export const Header = () => {
    return (
        <div className="flex w-full gap-4 bg-primary justify-evenly h-20 text-sm items-center top-0 left-0 fixed">
            <div className="flex items-center gap-2 font-semibold cursor-default">
                <Image src="/images/logo.png" alt="logo" width={40} height={40} />
                <div className="text-base">ZennyStore</div>
            </div>
            <div className="flex gap-2 font-semibold cursor-pointer p-4">
                <ShoppingBag size={20} />
                Sản Phẩm
            </div>
            <div className="flex w-1/2 gap-2 items-center">
                <Input className="text-black" placeholder="Tìm kiếm sản phẩm" />
            </div>
            <div className="flex gap-2 font-semibold cursor-pointer">
                <ShoppingCart size={20} />
                Giỏ Hàng
            </div>
            <div className="flex gap-2 font-semibold cursor-pointer">
                <User2 size={20} />
                Đăng Nhập / Đăng Ký
            </div>
        </div>
    )
}
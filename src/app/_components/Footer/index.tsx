import { Album, Mail, Phone } from "lucide-react"
import Image from "next/image"

export const Footer = () => {

    const AboutUs = ["- Nạp Genshin Impact, Honkai Star Rail, Zenless Zone Zero,...", "- Gift game/wallet giá rẻ", "- Account và phần mềm bản quyền"]
    const ContactInformation = [
        {
            Information: "Số Điện Thoại: 0703809061",
            icon: <Phone size={20} />
        },
        {
            Information: "Mail: zenny@duck.com",
            icon: <Mail size={20} />
        },
        {
            Information: "Discord: zenny197",
            icon: <Album size={20} />
        },
    ]

    return (
        <div className="flex items-center justify-between gap-4 bg-primary text-sm p-4">
            <div className="flex flex-col gap-2 font-semibold">
                <div className="capitalize text-base">Về Sốp</div>
                <div className="flex text-sm flex-col gap-2">
                    {
                        AboutUs.map((item: string, index: number) => (
                            <div key={index}>
                                {item}
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="flex gap-2 items-center font-semibold">
                <div>
                    <Image src="/images/chibi_footer.png" alt="chibi_footer" width={100} height={100} />
                </div>
            </div>

            <div className="flex flex-col gap-2 font-semibold">
                <div className="capitalize text-base">Thông tin liên hệ</div>
                {
                    ContactInformation.map(({Information, icon}, index: number) => (
                        <div key={index} className="flex gap-2">
                            {icon}
                            {Information}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
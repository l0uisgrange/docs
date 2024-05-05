import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "../globals.css"
import Icon from "@/components/icons"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
    title: "Protocol.js",
    description: "Fast, lightweight and easy-to-use NPM package to build your own IMAP/SMTP mail server",
}

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${inter.className} flex items-top text-sm`}>
                <div className={"w-80 flex-none border-r p-7"}>
                    <div className={"flex items-center gap-3"}>
                        <Icon tag={"thread_unread"} className={"text-emerald-500"} />
                        <span className={"font-semibold text-xl"}>Protocol.js</span>

                    </div>
                </div>
                <div className={"flex-auto min-h-screen"}>
                    <div className={"border-b p-5"}>
                    </div>
                    {children}
                </div>
            </body>
        </html>
    )
}

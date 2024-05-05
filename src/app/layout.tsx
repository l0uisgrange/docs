import type { Metadata } from "next"
import {Plus_Jakarta_Sans} from "next/font/google"
import "./globals.css"
import Icon from "@/components/icons"

const inter = Plus_Jakarta_Sans({ subsets: ["latin"] })

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
                <div className={"flex-auto min-h-screen"}>
                    {children}
                </div>
            </body>
        </html>
    )
}

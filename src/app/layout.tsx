import type { Metadata } from "next"
import {Plus_Jakarta_Sans} from "next/font/google"
import "./globals.css"
import Icon from "@/components/icons"
import {SiGithub, SiNpm} from '@icons-pack/react-simple-icons'
import Link from "next/link";

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
            <body className={`${inter.className} dark:bg-black dark:text-white`}>
                <div className={"border-b dark:border-neutral-800"}>
                    <div className={"hidden max-w-7xl mx-auto gap-4 px-5 py-5 md:flex items-center"}>
                        <span className={"flex-auto"}>Protocol.js</span>
                        <a href={"https://github.com/protocoljs/"} className={"hover:opacity-75 transition"}>
                            <SiGithub size={25}/>
                        </a>
                        <a href={"https://www.npmjs.com/package/@protocoljs/imap"}
                           className={"hover:opacity-75 transition"}>
                            <SiNpm size={25}/>
                        </a>
                        <button className={"flex items-center"}>
                            <Icon tag={"drag_handle"}/>
                        </button>
                    </div>
                </div>
                <div className={"md:hidden border-b gap-4 px-5 py-5 dark:border-neutral-800 flex items-center"}>
                    <span className={"flex-auto"}>Protocol.js</span>
                    <a href={"https://github.com/protocoljs/"} className={"hover:opacity-75 transition"}>
                        <SiGithub size={25}/>
                    </a>
                    <a href={"https://www.npmjs.com/package/@protocoljs/imap"} className={"hover:opacity-75 transition"}>
                        <SiNpm size={25}/>
                    </a>
                    <button>
                        <Icon tag={"drag_handle"} />
                    </button>
                </div>
                <div className={"flex-auto min-h-screen"}>
                    {children}
                </div>
            </body>
        </html>
    )
}

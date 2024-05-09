import type { Metadata } from "next"
import "./globals.css"
import Icon from "@/components/icons"
import {SiGithub, SiNpm} from '@icons-pack/react-simple-icons'
import {text} from "@/fonts"
import Link from "next/link"
import Logo from "@/components/logo";

export const metadata: Metadata = {
    title: "Protocol.js",
    description: "Fast, lightweight and easy-to-use NPM package to build your own IMAP/SMTP mail server",
}

export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${text.className}`}>
                <div className={"border-b sticky top-0 z-50 bg-white"}>
                    <div className={"hidden max-w-7xl mx-auto gap-4 px-5 py-3 md:flex items-center"}>
                        <Logo className={"w-3 text-red-600"}/>
                        <span className={"font-medium mr-20"}>Protocol.js</span>
                        <Link href={"/docs"}>Documentation</Link>
                        <span className={"ml-auto font-mono text-sm mr-4"}>v1.0.0-alpha.4</span>
                        <a href={"https://github.com/protocoljs/"} className={"hover:opacity-75 transition"}>
                            <SiGithub size={25}/>
                        </a>
                        <a href={"https://www.npmjs.com/package/@protocoljs/imap"}
                           className={"hover:opacity-75 transition"}>
                            <SiNpm size={25}/>
                        </a>
                    </div>
                </div>
                <div className={"md:hidden border-b gap-4 px-5 py-5 flex items-center"}>
                    <Logo className={"w-9 text-red-600"}/>
                    <span className={"flex-auto"}>Protocol.js</span>
                    <Link href={"/docs"}>Documentation</Link>
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
            <footer className={"border-t"}>
                <div className={"max-w-7xl mx-auto py-10 px-5"}>
                    Copyright © {new Date().getFullYear()} Louis Grange
                </div>
            </footer>
            </body>
        </html>
    )
}

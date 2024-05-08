import {H1, H2} from "@/components/text"
import Code from "@/components/code"
import {display} from "@/fonts"
import Logo from "@/components/logo";
import Icon from "@/components/icons";
import Link from "next/link";

export default function Home() {
    return (
        <main className="p-10 max-w-7xl mx-auto">
            <div className={"text-center mx-auto py-20"}>
                <div className={"mx-auto bg-[#ff0000] mb-5 h-20 w-20 rounded-full p-3 text-white"}>
                    <Logo className={"mx-auto pl-1 pt-1"}/>
                </div>
                <h1 className={`${display.className} text-5xl lg:text-8xl font-black tracking-tight text-neutral-900 dark:text-neutral-200 max-w-4xl mx-auto`}>Create your own email server</h1>
                <p className={"text-neutral-700 text-xl mt-8 mx-auto dark:text-zinc-500"}>Protocol.js allows you to create a <span className={"text-black dark:text-white font-medium"}>high-quality mail server</span> with Typescript</p>
                <div className={"flex items-center justify-center mt-8 gap-5 mx-auto"}>
                    <Link href={"/docs"} className={"bg-black text-white rounded-full px-4 py-1.5 hover:bg-black/80 flex items-center gap-2"}><Icon tag={"import_contacts"} /> Documentation</Link>
                    <Link href={"https://github.com/protocoljs"} className={"border rounded-full py-1.5 px-4 hover:border-neutral-400"}>Code on GitHub</Link>
                </div>
            </div>
            <div className={"grid md:grid-cols-3 gap-10"}>
                <div>
                    <div className={"flex items-center gap-3 mb-2 text-lg"}>
                        <Icon tag={"flash_on"} />
                        <span className={"font-medium"}>Lightweight</span>
                    </div>
                    <p>Crafted from scratch, Protocol.js was designed to be as light as a floating feather, as quick as a flash.</p>
                </div>
                <div>
                    <div className={"flex items-center gap-3 mb-2 text-lg"}>
                        <Icon tag={"apps"} />
                        <span className={"font-medium"}>Privacy</span>
                    </div>
                    <p>Own your data. Own your email. Manage access the way you want.</p>
                </div>
                <div>
                    <div className={"flex items-center gap-3 mb-2 text-lg"}>
                        <Icon tag={"format_paint"} />
                        <span className={"font-medium"}>Customizable</span>
                    </div>
                    <p>Easily shape your server just the way you want with your own login method.</p>
                </div>
            </div>
        </main>
    )
}

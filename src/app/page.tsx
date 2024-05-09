import {display} from "@/fonts"
import Icon from "@/components/icons"
import Link from "next/link"
import {SiGithub, SiNpm, SiTypescript} from "@icons-pack/react-simple-icons"

export default function Home() {
    return (
        <main className="max-w-7xl mx-auto px-5">
            <div className={"text-center mx-auto py-32"}>
                <h1 className={`${display.className} text-5xl lg:text-8xl font-black tracking-tight text-neutral-900 dark:text-neutral-200 max-w-4xl mx-auto`}>Create your own email server</h1>
                <p className={"text-neutral-700 text-xl mt-8 mx-auto dark:text-zinc-500"}>Protocol.js allows you to create a <span className={"text-black dark:text-white font-medium"}>high-quality mail server</span> with Typescript</p>
                <div className={"flex flex-col sm:flex-row items-center justify-center mt-8 gap-5 mx-auto"}>
                    <Link href={"/docs"} className={"bg-black text-white rounded-full px-4 py-1.5 hover:bg-black/80 flex items-center gap-2"}><Icon tag={"import_contacts"} /> Documentation</Link>
                    <Link href={"https://github.com/protocoljs"} className={"border rounded-full py-1.5 px-4 hover:border-neutral-400 gap-2 flex items-center"}><SiGithub size={18} /> Code on GitHub</Link>
                </div>
            </div>
            <div className={"grid md:grid-cols-3 gap-10"}>
                <div className={"space-y-3"}>
                    <SiNpm size={40} className={"text-red-600 mb-3"}/>
                    <span className={"font-medium text-lg"}>Lightweight package</span>
                    <p className={"text-gray-700"}>Crafted from scratch, Protocol.js was designed to be as light as a floating feather, as quick as
                        a flash.</p>
                </div>
                <div className={"space-y-3"}>
                    <SiGithub size={40} className={"mb-3"}/>
                    <span className={"font-medium text-lg"}>Open Source</span>
                    <p className={"text-gray-700"}>Open source promotes innovation, collaboration, and transparency, enriching technological growth globally.</p>
                </div>
                <div className={"space-y-3"}>
                    <SiTypescript size={40} className={"text-blue-700 mb-3"}/>
                    <span className={"font-medium text-lg"}>Typescript support</span>
                    <p className={"text-gray-700"}>TypeScript adds static types to JavaScript, making it more verbose, explicit, and easy to maintain.</p>
                </div>
            </div>
        </main>
    )
}

import {H1, H2} from "@/components/text"
import Code from "@/components/code"

export default function Home() {
    return (
        <main className="p-10 max-w-7xl mx-auto flex items-center h-screen">
            <div className={"text-center mx-auto"}>
                <h1 className={"text-5xl lg:text-8xl font-black tracking-tight text-neutral-900 dark:text-neutral-200 max-w-5xl mx-auto"}>Create your own mail server</h1>
                <p className={"text-neutral-700 text-xl mt-20 mx-auto dark:text-zinc-500"}>Protocol.js allows you to create a <span className={"text-black dark:text-white font-medium"}>high-quality mail server</span> with Typescript</p>
            </div>
        </main>
    )
}

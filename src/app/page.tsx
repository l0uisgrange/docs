import {H1, H2} from "@/components/text"
import Code from "@/components/code"

export default function Home() {
    return (
        <main className="p-10 max-w-2xl">
            <H1>Documentation</H1>
            <H2>Get started</H2>
            <p className={"text-gray-700"}>You just have to download</p>
            <Code language="bash">
                npm install @protocoljs/imap
            </Code>
        </main>
    )
}

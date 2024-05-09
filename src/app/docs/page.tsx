import {H1, H2} from "@/components/text"
import Code from "@/components/code"

export default function Home() {
    return (
        <article>
            <H1>Get started</H1>
            <H2>Overview</H2>
            <p className={"text-gray-700"}>The Protocol.js Project consists of two main packages</p>
            <ul className={"mb-10 list-disc list-inside mt-3"}>
                <li className={"text-red-600 underline"}><a href={"https://www.npmjs.com/package/@protocoljs/imap"}>@protocoljs/imap</a></li>
                <li className={"text-gray-700"}>@protocoljs/smtp (coming soon)</li>
            </ul>
            <H2>Installation</H2>
            <p className={"text-gray-700"}>You just have to download the package from the official npm registry</p>
            <Code language="bash">
                npm install @protocoljs/imap
            </Code>
        </article>
    )
}

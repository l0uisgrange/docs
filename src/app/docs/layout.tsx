import "../globals.css"
import Link from "next/link";
export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <div className={"grid lg:grid-cols-5 gap-10 max-w-7xl mx-auto px-5 py-20"}>
            <div className={"col-span-1 hidden lg:block"}>
                <Link href={"/docs"}>Get started</Link>
            </div>
            <div className={"col-span-3"}>
                {children}
            </div>
            <div className={"col-span-1 hidden lg:block"}>

            </div>
        </div>
    )
}

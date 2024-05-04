import Link from "next/link"
import {ReactNode} from "react"

export function Button({href, children}: {href: string, children: ReactNode}) {
    return (
        <Link href={href} className={"px-2 py-1 border rounded-full"}>
            {children}
        </Link>
    )
}

export function DarkButton({href, children}: {href: string, children: ReactNode}) {
    return (
        <Link href={href} className={"px-2 py-1 border rounded-full bg-black text-white border-black"}>
            {children}
        </Link>
    )
}
import {ReactNode} from "react"
import {display} from "@/fonts"

export function H1({children}: {children: ReactNode}) {
    return (
        <h1 className={`font-extrabold tracking-tight text-5xl ${display.className} mb-5`}>{children}</h1>
    )
}

export function H2({children}: {children: ReactNode}) {
    return (
        <h1 className={"font-medium text-xl mb-3"}>{children}</h1>
    )
}
import {ReactNode} from "react"

export function H1({children}: {children: ReactNode}) {
    return (
        <h1 className={"font-semibold text-2xl mb-5"}>{children}</h1>
    )
}

export function H2({children}: {children: ReactNode}) {
    return (
        <h1 className={"font-medium text-xl mb-3"}>{children}</h1>
    )
}
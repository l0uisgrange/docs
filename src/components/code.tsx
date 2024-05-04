"use client"

import hljs from 'highlight.js';
import 'highlight.js/styles/github.css'
import {useEffect} from "react"
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import bash from 'highlight.js/lib/languages/bash'
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('bash', bash)

export default function Code({children, fileName=null, language="typescript"}: {children: string, fileName?: string | null, language: string}) {
    useEffect(() => {
        hljs.initHighlighting()
    }, [])
    return (
        <div className={"border rounded-xl text-white my-3 overflow-hidden"}>
            {fileName ?
                <>
                    <div className={"px-4 py-3 text-xs text-gray-400"}>{fileName}</div>
                    <hr className={"border-gray-600"}/>
                </>
            : <></>}
            <pre>
                <code className={`js p-4 text-sm ${language}`}>
                    {children}
                </code>
            </pre>
        </div>
    )
}
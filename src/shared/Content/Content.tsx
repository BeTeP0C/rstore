import React from "react";
// import style from "./container.scss"

interface IContentProps {
    children?: React.ReactNode
}

export function Content ({children}: IContentProps) {
    return (
        <main>
            {children}
        </main>
    )
}
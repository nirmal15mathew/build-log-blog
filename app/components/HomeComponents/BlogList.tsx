import { FC } from "react"


type PropsInterface = {
    children: JSX.Element[] | JSX.Element
}

const BlogList: FC<PropsInterface> = ({children}) => {
    return <ul className="grid grid-cols-3 px-4 gap-4">
        {children}
    </ul>
}

export {
    BlogList
}
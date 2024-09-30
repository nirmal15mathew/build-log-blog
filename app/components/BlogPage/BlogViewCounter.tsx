'use client'
import FeatherIcon from "feather-icons-react"
import { useEffect } from "react"


export default function BlogViewCounter({views, incrementViews}: {views: number, incrementViews: () => Promise<void>}) {
    useEffect(() => {
        const inc = async () => {
            await incrementViews()
        }
        inc()
    },[])
    return (
        <span className="flex items-center gap-2 p-2">
            <FeatherIcon icon="eye" size={16}></FeatherIcon>{views}
        </span>
    )
}
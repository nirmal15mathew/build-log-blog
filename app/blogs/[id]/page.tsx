import { BlogHeader } from "@/app/components/BlogPage/BlogHeader"
import { BlogComponent } from "@/app/components/BlogPage/BlogComponent"

import '../style.css'
import { getPost, incrementPostViews } from "@/app/lib/firebase"
import BlogViewCounter from "@/app/components/BlogPage/BlogViewCounter"

export default async function Page({params}: {params: {id: string}}) {
    const postData = await getPost(params.id) || {title: "Couldn't Find Post"}

    async function incrementViews() {
        "use server"
        if (params.id != "") {
            await incrementPostViews(params.id)
        }
    }

    return (
        <main className="px-4 md:mx-48 my-12 m-auto">
            <BlogHeader title={postData.title}></BlogHeader>
            <BlogViewCounter views={postData?.views} incrementViews={incrementViews}></BlogViewCounter>
            <BlogComponent content={postData?.content}></BlogComponent>
        </main>
    )
}
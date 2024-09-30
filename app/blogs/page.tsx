import { BlogList } from "@/app/components/HomeComponents/BlogList" 
import { BlogItem } from "@/app/components/HomeComponents/BlogItem"
import { randomUUID } from "crypto"
import { getAllPosts } from "../lib/firebase"
interface BlogItemType {
    title: string,
    timePublished: Date,
    author: string,
    likes: number,
    category: string,
    tag: string,
    id: string
}

const example: BlogItemType = {
    title: "First experience with Kaggle AI competition",
    timePublished: new Date(),
    author: "Nirmal Thomas Mathew",
    likes: 100,
    category: "AI",
    tag: "Contest",
    id: randomUUID()
}

export default async function Page() {
    const blogItems  = await getAllPosts()
    // implement fetching from server side
    const blogItemsList = blogItems.map((it, i) => <BlogItem {...it} key={i}></BlogItem>)
    return (
        <div className="bg-background py-12 sm:py-16 dark:bg-background">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-2xl lg:mx-0">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-foreground sm:text-4xl">Dev logs</h2>
      <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-foreground">Developer stories </p>
    </div>
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      {blogItemsList}
    </div>
  </div>
</div>

    )
}

export {
    type BlogItemType
}
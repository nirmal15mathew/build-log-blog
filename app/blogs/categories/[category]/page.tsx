export default function Page({params}: {params: {category: string}}){
    return (
        <main className="p-2">
            {params.category}
        </main>
    )
}
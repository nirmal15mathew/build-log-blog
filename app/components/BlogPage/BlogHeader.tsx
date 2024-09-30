export function BlogHeader({title}: {title: string}) {
    return (
        <header>
            <figure>

            </figure>
            <div className="flex items-end justify-between">
            <h1 className="text-5xl text-wrap font-bold p-2">
                {title}
            </h1>
            <span className="p-2 text-sm dark:text-neutral-300 text-neutral-700">
                {new Date().toDateString()}
            </span>
            </div>
            <hr className="my-4"/>
        </header>
    )
}
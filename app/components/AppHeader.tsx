import Link from "next/link"
import "./style.css"
export function AppHeader() {
    return <header className="p-4 flex justify-between">
        <figure className="text-5xl p-2 font-semibold flex-3">
            <span className="vt323-regular"><a href="/">Build Logs</a></span>
        </figure>
        <section className="flex justify-end flex-1 w-max items-center p-2">
        <nav className="flex items-center w-full justify-end p-2">
            <ul className="flex justify-around w-full max-w-80 text-base font-semibold p-2 dark:text-slate-200 text-slate-700">
                <li>
                    <Link href="/blogs" className="">Logs</Link>
                </li>
                <li>
                    <Link href={"/"}>About</Link>
                </li>
                <li>
                    <a href="https://nirmalthomasmathew.vercel.app" className="">
                        My Profile
                    </a>
                </li>
            </ul>
        </nav>
        </section>
        <section className="flex-3 flex justify-center items-center p-2 dark:text-slate-200 text-slate-700">
            
        </section>
    </header>
}
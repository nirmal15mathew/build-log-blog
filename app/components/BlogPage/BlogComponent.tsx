import "./style.css"
import { MDXRemote } from 'next-mdx-remote/rsc'
 
export async function BlogComponent({content}: {content: string}) {
  // MDX text - can be from a local file, database, CMS, fetch, anywhere...
  return <main className="editor p-4">
    <MDXRemote source={content} />
  </main>
}
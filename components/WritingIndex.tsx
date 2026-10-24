import Link from 'next/link'
import type { BlogPost } from '@/data/types'
import { isoFromHuman } from '@/lib/sun'
import SunStamp from './SunStamp'

/** One line per note, stamped with the sun on the day it was published. */
const WritingIndex = ({ posts }: { posts: BlogPost[] }) => (
  <ol className="index" role="list">
    {posts.map((post) => (
      <li key={post.id}>
        <Link className="index-row" href={`/writings/${post.id}`}>
          <SunStamp date={isoFromHuman(post.date)} />
          <span className="index-title">{post.title}</span>
          <span className="index-desc">{post.excerpt}</span>
          <span className="index-meta">
            {post.date} · {post.readTime}
          </span>
          <span className="arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </li>
    ))}
  </ol>
)

export default WritingIndex

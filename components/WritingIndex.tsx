import Link from 'next/link'
import type { BlogPost } from '@/data/types'
import { formatDay, isoFromHuman } from '@/lib/sun'
import SunStamp from './SunStamp'

/** One line per note, stamped with the sun on the day it was published. */
const WritingIndex = ({ posts }: { posts: BlogPost[] }) => (
  <ol className="index" role="list">
    {posts.map((post) => (
      <li key={post.id}>
        {/* Dates are written for people in the data; list meta uses the
            same short form as everywhere else that measures. */}
        <Link className="index-row" href={`/writings/${post.id}`}>
          <SunStamp date={isoFromHuman(post.date)} />
          <span className="index-title">{post.title}</span>
          <span className="index-desc">{post.excerpt}</span>
          <span className="index-meta">
            <time dateTime={isoFromHuman(post.date)}>{formatDay(isoFromHuman(post.date))}</time> · {post.readTime}
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

// Packages
import { Link } from 'react-router-dom';

export default function ImageGrid({ posts }) {
  return (

    <div>
      {/* debugger */}
      {posts.map((post) => (
        <article>
          {post.user?.username && (
            <Link to={`/profile/${post.user.id}/feed`}>
              <img src={post.img_url} alt={`${post.user.username}'s Post`} />
            </Link>
          )}
        </article>
      ))
      }
    </div>
  )
}

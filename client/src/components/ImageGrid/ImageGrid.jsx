// Packages
import { Link } from 'react-router-dom';

// CSS
import './ImageGrid.css'

export default function ImageGrid({ posts }) {
  return (
    <div className="img-grid">
      {posts.map((post) => (
        <article className="img-grid-post">
          {post.user?.username && (
            <Link to={`/profile/${post.user.id}/feed`}>
              <img className="img-grid-pic" src={post.img_url} alt={`${post.user.username}'s Post`} />
            </Link>
          )}
        </article>
      ))}
    </div>
  )
}

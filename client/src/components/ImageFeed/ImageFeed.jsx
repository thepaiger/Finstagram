// Packages
import { Link } from 'react-router-dom';

// CSS
import './ImageFeed.css'

export default function ImageFeed({ posts }) {

  return (
    <div className="img-feed">
      {posts.map((post) => (
        <article className="img-feed-post">
          {post.user?.username && (
            <>
              <Link to={`/profile/${post.user.id}`} className="img-feed-heading">
                <div className="img-feed-prof-pic-div">
                  <img className="img-feed-prof-pic" src={post.user.profile_pic_url} alt={`${post.user.username}'s Profile Picture`} />
                </div>
                <h4 className="img-feed-username-top">{post.user.username}</h4>
              </Link>
              <div className="img-feed-pic-div">
                <img className="img-feed-pic" src={post.img_url} alt={`${post.user.username}'s Post`} />
              </div>
              <div className="img-feed-details">
                <Link to={`/profile/${post.user.id}`}>
                  <h6 className="img-feed-username-bottom">{post.user.username}</h6>
                </Link>
                <p className="img-feed-caption">{post.caption}</p>
              </div>
            </>
          )}
        </article>
      ))}
    </div>
  )
}

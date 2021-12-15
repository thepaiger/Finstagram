// Packages
import { Link, useLocation } from 'react-router-dom';

// Graphics
import editIcon from './../../assets/graphics/edit-icon.svg'

// CSS
import './ImageFeed.css'

export default function ImageFeed({ posts, currentUser }) {
  const location = useLocation();

  return (
    <div className="img-feed">
      {posts.map((post) => (
        <article className="img-feed-post" key={`imagefeed ${post.id}`}>
          {post.user?.username && (
            <>
              <div className="img-feed-heading">
                <Link to={`/profile/${post.user.id}`} className="img-feed-heading-link">
                  <div className="img-feed-prof-pic-div">
                    <img className="img-feed-prof-pic" src={post.user.profile_pic_url} alt={`${post.user.username}'s Profile`} />
                  </div>
                  <h4 className="img-feed-username-top">{post.user.username}</h4>
                </Link>
                {currentUser?.id && location.pathname === `/profile/${currentUser.id}/feed` ?
                  <Link to={`/edit-post/${post.id}`}>
                    <img src={editIcon} alt='create post icon' />
                  </Link>
                  : null
                }
              </div>
              <div className="img-feed-pic-div">
                <img className="img-feed-pic" src={post.img_url} alt={`${post.user.username}'s Post`} />
              </div>
              <div className="img-feed-details">
                <p className="img-feed-caption">
                  <Link to={`/profile/${post.user.id}`} className="img-feed-username-bottom">
                    {post.user.username}
                  </Link>
                  {post.caption}
                </p>
              </div>
            </>
          )}
        </article>
      ))}
    </div>
  )
}

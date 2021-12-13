// Packages
import { Link } from 'react-router-dom';

export default function ImageFeed({ posts }) {

  return (
    <div>
      {posts.map((post) => (
        <article>
          {post.user?.username && (
            <>
              <Link to={`/profile/${post.user.id}`}>
                <img src={post.user.profile_pic_url} alt={`${post.user.username}'s Profile Picture`} />
                <h4>{post.user.username}</h4>
              </Link>
              <img src={post.img_url} alt={`${post.user.username}'s Post`} />
              <Link to={`/profile/${post.user.id}`}>
                <h6>{post.user.username}</h6>
              </Link>
              <p>{post.caption}</p>
            </>
          )};
        </article>
      ))};
    </div>
  )
}

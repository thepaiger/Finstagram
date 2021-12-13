import { Link } from 'react-router-dom';

export default function UserProfile() {
  return (
    <div>
      <header>
        <div>
          <h1>{post.user.username}</h1>
          <Link to='/create-post'><img src={addIcon} alt='create post icon' /></Link>
        </div>
        <div>
          <div>
            <img src={post.user.profile_pic_url} alt={`${post.user.username}'s Profile Picture`} />
            <div>

              <h6>Posts</h6>
            </div>
          </div>
          <h6>{post.user.name}{post.user.pronouns}</h6>
        </div>
      </header>


    </div>
  )
}

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
          <h6>{post.user.username}</h6>
          <p>{post.caption}</p>
        </>
      )
      }
    </article>
  ))
  }
</div>
// Packages
import { Link } from 'react-router-dom';

// Graphics
import addIcon from './../../assets/graphics/add-icon.svg'


export default function MainFeed({ posts }) {
  console.log(posts)
  return (
    <div>
      <header>
        <h1>Finstagram</h1>
        <Link to='/create-post'><img src={addIcon} alt='create post icon' /></Link>
      </header>

      {posts.map((post) => (
        <article>
          <img src={post.user.profile_pic_url} alt={`${post.user.username}'s Profile Picture`} />
          <h4>{post.user.username}</h4>
          <img src={post.img_url} alt={`${post.user.username}'s Post'`} />
          <h6>{post.user.username}</h6>
          <p>{post.caption}</p>
        </article>
      ))}

    </div>
  )
}

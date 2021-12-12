// Packages

export default function MainFeed({ posts }) {
  console.log(posts)
  return (
    <div>
      <h3>Posts</h3>
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

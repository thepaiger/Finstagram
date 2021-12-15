// Packages
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// Graphics
import addIcon from './../../assets/graphics/add-icon.svg'

// Components
import ImageFeed from '../../components/ImageFeed/ImageFeed';

// CSS
import './SingleUserFeed.css'

export default function SingleUserFeed({ posts, currentUser }) {
  const [userPosts, setUserPosts] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = useParams();

  useEffect(() => {
    const setPosts = () => {
      setUserPosts(posts.filter((post) => post.user?.id === Number(user_id)))
    };
    if (posts.length) setPosts();
  }, [posts, user_id]);

  useEffect(() => {
    const setUser = () => {
      setSelectedUser(userPosts[0]?.user)
    };
    if (userPosts) setUser();
  }, [userPosts]);

  return (
    <div className="single-user-feed">
      <header className="single-user-feed-header">
        <Link to="/">
          <h1 className="single-user-feed-heading">Finstagram</h1>
        </Link>
        <Link to='/create-post'>
          <img className="single-user-feed-create-post" src={addIcon} alt='create post icon' />
        </Link>
      </header>

      {selectedUser?.username && (
        <ImageFeed posts={userPosts} currentUser={currentUser} />
      )}
    </div>
  )
}

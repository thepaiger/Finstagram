// Packages
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// Components
import ImageGrid from '../../components/ImageGrid/ImageGrid';

// Graphics
import addIcon from './../../assets/graphics/add-icon.svg'

export default function UserProfile({ posts }) {
  const [userPosts, setUserPosts] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const { user_id } = useParams();

  useEffect(() => {
    const setPosts = () => {
      setUserPosts(posts.filter((post) => post.user.id === Number(user_id)))
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
    <div>
      {selectedUser?.username && (
        <>
          <header>
            <div>
              <h1>{selectedUser?.name}</h1>
              <Link to='/create-post'>
                <img src={addIcon} alt='create post icon' />
              </Link>
            </div>
            <div>
              <div>
                <img src={selectedUser.profile_pic_url} alt={`${selectedUser.username}'s Profile Picture`} />
                <div>
                  <p>{userPosts.length}</p>
                  <h6>Posts</h6>
                </div>
              </div>
              <h6>{selectedUser.name}{selectedUser.pronouns}</h6>
            </div>
          </header>

          <ImageGrid posts={userPosts} />
        </>
      )}


    </div >
  )
}
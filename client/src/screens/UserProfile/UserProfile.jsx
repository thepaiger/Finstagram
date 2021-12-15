// Packages
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

// Components
import ImageGrid from '../../components/ImageGrid/ImageGrid';

// Graphics
import addIcon from './../../assets/graphics/add-icon.svg'

// CSS
import './UserProfile.css'

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
    <div className="user-profile">
      {selectedUser?.username && (
        <>
          <header className="user-profile-header">
            <div className="user-profile-heading">
              <h1 className="user-profile-username">{selectedUser?.username}</h1>
              <Link to='/create-post'>
                <img className="user-profile-create-icon" src={addIcon} alt='create post icon' />
              </Link>
            </div>
            <div className="user-profile-details">
              <div className="user-profile-pic-posts">
                <img className="user-profile-prof-pic" src={selectedUser.profile_pic_url} alt={`${selectedUser.username}'s Profile`} />
                <div className="user-profile-posts-div">
                  <p className="user-profile-post-count">{userPosts.length}</p>
                  <h6 className="user-profile-posts">Posts</h6>
                </div>
              </div>
              <div className="user-profile-name-pronouns">
                <h6 className="user-profile-name">{selectedUser.name}</h6>
                <p className="user-profile-pronouns">{selectedUser.pronouns}</p>
              </div>
            </div>
          </header>

          <ImageGrid posts={userPosts} />
        </>
      )}


    </div >
  )
}
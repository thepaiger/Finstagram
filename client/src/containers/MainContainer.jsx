// Packages
import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

// Screens
import MainFeed from '../screens/MainFeed/MainFeed';
import PostCreate from '../screens/PostCreate/PostCreate';

// Services
import { getAllPosts } from '../services/posts';

export default function MainContainer({ currentUser }) {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    if (currentUser) fetchPosts();
    // test if this works
    // (currentUser && fetchPosts());
  }, [currentUser])

  return (
    <main>
      <Switch>
        <Route path='/profile/:user_id/feed'>
          <h2>SingleUserFeed</h2>
        </Route>
        <Route path='/profile/:user_id'>
          <h2>UserProfile</h2>
        </Route>
        <Route path='/edit-post/:post_id'>
          <h2>PostEdit</h2>
        </Route>
        <Route path='/create-post'>
          <PostCreate />
        </Route>
        <Route path='/'>
          <MainFeed posts={posts} />
        </Route>
      </Switch>
    </main>
  )
}

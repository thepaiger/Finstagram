// Packages
import { useState, useEffect } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';

// Screens
import MainFeed from '../screens/MainFeed/MainFeed';
import PostCreate from '../screens/PostCreate/PostCreate';

// Services
import { getAllPosts, postPost } from '../services/posts';

export default function MainContainer({ currentUser }) {
  const [posts, setPosts] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchPosts = async () => {
      const postList = await getAllPosts();
      setPosts(postList);
    };
    if (currentUser) fetchPosts();
    // test if this works
    // (currentUser && fetchPosts());
  }, [currentUser])

  const handleFoodCreate = async (formData) => {
    const newPost = await postPost(formData);
    setPosts(prevState => [...prevState, newPost]);
    history.push('/')
  }

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
          <PostCreate handleFoodCreate={handleFoodCreate} />
        </Route>
        <Route path='/'>
          <MainFeed posts={posts} />
        </Route>
      </Switch>
    </main>
  )
}

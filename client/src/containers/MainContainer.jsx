import { useState, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';

export default function MainContainer() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {

    }
  })

  return (
    <div>
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
          <h2>PostCreate</h2>
        </Route>
        <Route path='/'>
          <h2>MainFeed</h2>
        </Route>
      </Switch>
    </div >
  )
}

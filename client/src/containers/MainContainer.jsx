// Packages
import { useState, useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

// Screens
import MainFeed from "../screens/MainFeed/MainFeed";
import PostCreate from "../screens/PostCreate/PostCreate";
import PostEdit from "../screens/PostEdit/PostEdit";
import SingleUserFeed from "../screens/SingleUserFeed/SingleUserFeed";
import UserProfile from "../screens/UserProfile/UserProfile";

// Services
import { deletePost, getAllPosts, postPost, putPost } from "../services/posts";

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
  }, [currentUser]);

  const handlePostCreate = async (formData) => {
    const newPost = await postPost(formData);
    setPosts((prevState) => [...prevState, newPost]);
    history.push("/");
  };

  const handlePostUpdate = async (post_id, formData) => {
    const newPost = await putPost(post_id, formData);
    setPosts((prevState) =>
      prevState.map((post) => {
        return post.id === Number(post_id) ? newPost : post;
      }));
    history.push("/");
  };

  const handlePostDelete = async (post_id) => {
    await deletePost(post_id);
    setPosts((prevState) => prevState.filter((post) => post.id !== Number(post_id)));
    history.push("/");
  };

  return (
    <main>
      <Switch>
        <Route path="/profile/:user_id/feed">
          <SingleUserFeed posts={posts} />
        </Route>
        <Route path="/profile/:user_id">
          <UserProfile posts={posts} />
        </Route>
        <Route path="/edit-post/:post_id">
          <PostEdit
            posts={posts}
            handlePostUpdate={handlePostUpdate}
            handlePostDelete={handlePostDelete}
          />
        </Route>
        <Route path="/create-post">
          <PostCreate handlePostCreate={handlePostCreate} />
        </Route>
        <Route path="/">
          <MainFeed posts={posts} />
        </Route>
      </Switch>
    </main>
  );
}

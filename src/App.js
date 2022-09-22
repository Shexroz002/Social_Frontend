import Home from "./Page/Home";
import Login from './Companents/Login';
import CreateStory from "./Companents/CreateStory";
import CreatePost from "./Companents/CreatePost";
import UserProfile from "./Page/UserProfile";
import UpdateProfile from "./Companents/UpdateProfile";
import UpdatePost from "./Companents/UpdatePost";
import DeletePost from "./Companents/DeletePost";
import Followers from "./Companents/Followers";
import Following from "./Companents/Following";
import Comments from "./Companents/Comments";
import {Route,Routes} from 'react-router-dom';
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="feed"  element={<Home />} />
      <Route path="createstory"  element={<CreateStory />} />
      <Route path="createpost"  element={<CreatePost />} />
      <Route path="followers/:id"  element={<Followers />} />
      <Route path="following/:id"  element={<Following />} />
      <Route path="profile/:id"  element={<UserProfile />} />
      <Route path="updateprofile"  element={<UpdateProfile />} />
      <Route path="post/update/:id" element={<UpdatePost />} />
      <Route path="comments/:id" element={<Comments />} />
      <Route path="delete"  element={<DeletePost />} />
    </Routes>

  </>
  )
}

export default App;

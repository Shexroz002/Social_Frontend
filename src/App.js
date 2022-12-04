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
import FavoritePost from "./Companents/FavoritePost";
import ProfileImage from "./Companents/ProfileImage";
import MyStory from "./Companents/MyStory";
import Demo from "./Companents/DEmo";
import {Route,Routes} from 'react-router-dom';
import BodyUsers from "./UserList/BodyUsers";
import Chat from "./Chat/Chat";
import SearchUser from "./UserList/SearchUser";
import ImageSearch from "./Companents/ImageSearch";
import ReadingBook from "./Companents/MyBook/ReadingBook";
import PasswordGenarate from "./PasswordGanarate/Password";
// import BookDetail from "./BookCatagory/BookDetail";
import BookStatistic from "./BookCatagory/BookStatistic";
import Followinguser from "./Follow/Followinguser";
function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="demo" element={<Demo />} />
      <Route path="searchimage" element={<ImageSearch />} />
      <Route path="feed"  element={<Home />} />
      <Route path="createstory"  element={<CreateStory />} />
      <Route path="seestory"  element={<MyStory />} />
      <Route path="createpost"  element={<CreatePost />} />
      <Route path="followers/:id"  element={<Followers />} />
      <Route path="following/:id"  element={<Following />} />
      <Route path="profile/:id"  element={<UserProfile />} />
      <Route path="updateprofile"  element={<UpdateProfile />} />
      <Route path="post/update/:id" element={<UpdatePost />} />
      <Route path="comments/:id" element={<Comments />} />
      <Route path="profile/image/:id" element={<ProfileImage />} />
      <Route path="delete"  element={<DeletePost />} />
      <Route path="favorite/post"  element={<FavoritePost />} />
      <Route path="users/list"  element={<BodyUsers />} />
      <Route path="users/chat/:id"  element={<Chat />} />
      <Route path="users/search"  element={<SearchUser />} />
      <Route path="books/"  element={<ReadingBook />} />
      <Route path="password/"  element={<PasswordGenarate />} />
      <Route path="statistic/"  element={<BookStatistic />} />
      <Route path="follow/"  element={<Followinguser />} />
    </Routes>

  </>
  )
}

export default App;

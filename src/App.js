import Header from "./components/Header";
import Post from "./components/Post";
import LoginModal from './components/LoginModal';
import SignupModal from './components/SignupModal';
import SuperPowerClub from './components/SuperPowerClub';
import CreatePost from './components/CreatePost';
import uniqid from 'uniqid';
import { useEffect, useState } from "react";

function App() {
  // let [postList, setPostList] = useState([]);
  // useEffect(() => {
  //     const fetchPosts = async () => {
  //         try {
  //             const response = await fetch('http://localhost:3000/v1/post', { mode: 'cors' });
  //             const data = await response.json();
  //             setPostList(data.posts);
  //         }
  //         catch(err) {
  //             console.error(err);
  //         }
  //     }
  //     fetchPosts();
  // }, []);
  const posts = [
    {
      _id: "6260b312ba95cb5fde3f97bc",
      title: "First post!",
      body: "My first post in the new Nintendo Power online message board!  I'm really excited!  Brings me back to the days when I used to wait for the new issue of the magazine to arrive in the mail!",
      author: {
        _id: "6260b271ba95cb5fde3f97a1",
        firstName: "Matt",
        lastName: "Di Micelli",
        email: "matthewdimicelli@gmail.com",
        member: false,
        hashedPassword:
          "$2a$10$erOaTncwjC/wZPeYJy2nbutdJATCFqO3JU2F2hzKUjOzalve/GhVS",
        avatar: "link",
        admin: true,
        __v: 0,
      },
      timestamp: "2022-04-21T01:27:46.266Z",
      __v: 0,
    },
    {
      _id: "6260b3a5ba95cb5fde3f97ec",
      title: "What is this??",
      body: "I don't know what this is!  How many times do i have to tell you to GET OFF THE MACHINE!!  Youve been playing for three hours straight and I swear if you don't get off before I count to ten you won't have any machine for a week!",
      author: {
        _id: "6260b348ba95cb5fde3f97d1",
        firstName: "Anybodys",
        lastName: "Mom",
        email: "typicalmomemail@hotmail.com",
        member: false,
        hashedPassword:
          "$2a$10$z8SCWGgIxkkT0AAEDSuQ.eWyWtEAvR2lLtRrTUh5y4gr.wOt0e37S",
        avatar: "peach",
        admin: false,
        __v: 0,
      },
      timestamp: "2022-04-21T01:30:13.701Z",
      __v: 0,
    },
    {
      _id: "6260b67e655b82e6a1bca14c",
      title: "007!!",
      body: "HEADSHOT HEADSHOT HEADSHOT\r\nHEADSHOT HEADSHOT HEADSHOT\r\nHEADSHOT HEADSHOT HEADSHOT\r\nHEADSHOT HEADSHOT HEADSHOT\r\nHEADSHOT HEADSHOT HEADSHOT\r\nHEADSHOT HEADSHOT HEADSHOT\r\nHEADSHOT HEADSHOT HEADSHOT\r\nHEADSHOT HEADSHOT HEADSHOT\r\nHEADSHOT HEADSHOT HEADSHOT",
      author: {
        _id: "6260b474ba95cb5fde3f9810",
        firstName: "Little",
        lastName: "Brother of a Looooser",
        email: "dweeble@yahoo.com",
        member: true,
        hashedPassword:
          "$2a$10$W3djNB.WxZ0vmtoB8ImciOQM93645v0dwJw45I0fUb.Hrrxhr62gG",
        avatar: "fox",
        admin: false,
        __v: 0,
      },
      timestamp: "2022-04-21T01:42:22.492Z",
      __v: 0,
    },
  ];
  const postList = posts.map((post) => (
    <Post key={uniqid()} post={post} isMember={true} isAdmin={false} />
  ));

  return (
    <div className="bg-base-200 min-h-screen">
      <Header isLoggedIn={false} isMember={false} />
      <LoginModal />
      <SignupModal />
      {/* <SuperPowerClub /> */}
      <CreatePost />

      {/* {postList} */}
    </div>
  );
}

export default App;

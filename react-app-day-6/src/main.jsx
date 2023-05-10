import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import About from './routes/About.jsx';
import Posts, {loader as postsLoader} from './routes/Posts.jsx';
import RootLayout from './routes/RootLayout.jsx';
import Post, {loader as postLoader} from './routes/Post.jsx';
import AddPost, {action as AddPostAction} from './routes/AddPost.jsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/about',
        element: <About />
      },
      {
        path: '/posts',
        element: <Posts />,
        loader: postsLoader
      },
      {
        path: '/posts/:id',
        element: <Post />,
        loader: postLoader
      },
      {
        path: '/add-post',
        element: <AddPost />,
        action: AddPostAction
      }
    ]
  },

])

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <RouterProvider router={router} />
  // </React.StrictMode>,
)

import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider, Switch } from '@chakra-ui/react'
import './App.css';
import { Home } from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CreatePost } from './CreatePost';
import { Login } from './Login';
import { PostExpanded } from './PostExpanded';

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/posts/:postId" element={<PostExpanded />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App;

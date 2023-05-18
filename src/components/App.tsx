import * as React from 'react'
// 1. import `ChakraProvider` component
import { ChakraProvider, Switch } from '@chakra-ui/react'
import './App.css';
import { Home } from './Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { CreatePost } from './CreatePost';
import { Login } from './Login';

function App() {
  const handleCreatePostSubmit = (title: string, text: string): void => {
  }
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </ChakraProvider>
  )
}

export default App;

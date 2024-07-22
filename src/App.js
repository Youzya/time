import React, { useState } from 'react';
import VideoList from './components/VideoList';
import './App.css';
import VideoData from './VideoData';

export default function App() {
  const [list, setList] = useState(VideoData);
  return (
    <VideoList list={list} />
  );
}
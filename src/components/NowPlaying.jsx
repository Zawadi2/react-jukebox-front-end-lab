import * as React from 'react';
import './NowPlaying.css';

const NowPlaying = ({ track }) => {
  if(!track) return <div>There is nothing playing right now</div>
  return (
    <>
    <div className='container'>
      <h2>Now Playing</h2>
      <p><span className='track-title'>Title: </span>{track.title} <br></br> <span className='track-artist'>Artist: </span> {track.artist}</p>
    </div>
    </>
  );
};
export default NowPlaying;
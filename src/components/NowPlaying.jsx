import * as React from 'react';


const NowPlaying = ({ track }) => {
  if(!track) return <div>There is nothing playing right now</div>
  return (
    <>
    <div>
      <h2>Now Playing</h2>
      <p>{track.title} by {track.artist}</p>
    </div>
    </>
  );
};
export default NowPlaying;
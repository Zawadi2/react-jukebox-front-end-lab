import * as React from 'react';
const NowPlaying = ({ track }) => {
  return (
    <>
      <div>
        <h2>Now Playing</h2>
        {track ? (
          <p>{track.title} by {track.artist}</p>
        ) : (
          <p>No track is currently playing.</p>
        )}
      </div>
    </>
  );
};
export default NowPlaying;
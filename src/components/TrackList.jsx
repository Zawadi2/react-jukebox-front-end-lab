import {Link} from 'react-router-dom';


const TrackList = ({tracks, handleDeleteTrack, handlePlayTrack}) => {
  return (
    <div>
      {tracks.map(track => (
        <div key={track._id}>
          <h1>{track.title}</h1>
          <h4>By: {track.artist}</h4>
          <button onClick={()=>handleDeleteTrack(track._id)}>Delete Track</button>
          <Link to={`/edit-track/${track._id}`}>
            <button>Edit Track</button>
          </Link>
          <button onClick={()=>handlePlayTrack(track)}>Play Now</button>
        </div>
      ))}
    </div>
  );
};
export default TrackList;
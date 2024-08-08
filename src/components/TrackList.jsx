import {Link} from 'react-router-dom';


const TrackList = ({ handleDeleteTrack, tracks, setTracks }) => {
        
    return (
        <div> Full List of Tracks {tracks.map(track => ( 
            <div key={track._id} className='track'>
                <h1>Track: {track.title}</h1>
                <h4>By: {track.artist}</h4>
                
                <Link to={`/tracks/edit/${track._id}`}> <button>Edit Track</button></Link>
                <button onClick={()=>handleDeleteTrack(track._id)}>Delete Track</button>
            </div>))};
        </div>
    );
};

export default TrackList;
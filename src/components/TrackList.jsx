import {Link} from 'react-router-dom';


const TrackList = ({ handleDeleteTrack, tracks, setTracks }) => {
    // useEffect(() => {
    //     const getAllTracks = async () => {
    //         setTracks(await trackService.fetchAllTracks());
    //     }
    //     getAllTracks();
    // }, 
    // [setTracks]); // will use this later, commented for testing purposes
    
    
    return (
        <div> Full List of Tracks {tracks.map(track => ( 
            <div key={track._id} className='track'>
                <h1>Track: {track.title}</h1>
                <h4>By: {track.artist}</h4>
                
                <Link to={`/tracks/edit-track/${track._id}`}> <button>Edit Track</button></Link>
                <button onClick={()=>handleDeleteTrack(track._id)}>Delete</button>
            </div>))};
        </div>
    );
};

export default TrackList;
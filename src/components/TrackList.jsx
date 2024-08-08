import {Link} from 'react-router-dom';


<<<<<<< HEAD
const TrackList = ({ handleDeleteTrack, tracks, setTracks }) => {
        
=======
const TrackList = ({tracks /* assuming the alltracks is passed from parent*/}) => {
>>>>>>> origin
    return (
        <div> {tracks.map(track => ( 
            <div key={track._id}>
                <h1>{track.title}</h1>
                <h4>By: {track.artist}</h4>
                
<<<<<<< HEAD
                <Link to={`/tracks/edit/${track._id}`}> <button>Edit Track</button></Link>
                <button onClick={()=>handleDeleteTrack(track._id)}>Delete Track</button>
=======
                <Link to={`/edit-track/${track._id}`}> <button>Edit Track</button></Link>
                <button onClick={()=>props.handlePlayTrack(track)}>Play Now</button>
>>>>>>> origin
            </div>))};
        </div>
    )
}

export default TrackList;
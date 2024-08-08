import {Link} from 'react-router-dom';

const TrackList = ({ tracks }) => {
    return (
        <div> {tracks.map(track => ( 
            <div key={track._id}>
                <h1>{track.title}</h1>
                <h4>By: {track.artist}</h4>
                
                <Link to={`/edit/${track._id}`}> <button>Edit Track</button></Link>
                <button onClick={()=>NowPlaying(track)}>Play Now</button>
            </div>))};
        </div>
    )
}

export default TrackList;
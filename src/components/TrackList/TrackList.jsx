import {Link} from 'react-router-dom';

const TrackList = ({alltracks /* assuming the alltracks is passed from parent*/}) => {
    return (
        <div> {alltracks.map(track => ( 
            <div key={track._id}>
                <h1>{track.title}</h1>
                <h4>By: {track.artist}</h4>
                
                <Link to={`/edit/${track._id}`}> <button>Edit Track</button></Link>
                
            </div>))};
        </div>
    )
}

export default TrackList;
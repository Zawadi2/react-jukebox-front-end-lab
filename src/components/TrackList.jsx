import {Link} from 'react-router-dom';
import { useEffect, useState } from 'react'
import * as trackService from '../services/trackService';

const TrackList = ({ handleDeleteTrack, handlePlayTrack }) => {
    const [tracks, setTracks] = useState([]);
    useEffect(() => {
        const getAllTracks = async () => {
          try {
            const allTracksOnDB = await trackService.fetchAllTracks();
            console.log(allTracksOnDB);
            
            if (Array.isArray(allTracksOnDB)) {
                setTracks(allTracksOnDB);
            }
            else {
                console.log('Not what I wanted to return');
            }
  
          } catch (e) {
            console.log('error', e)
          } 
        };
        getAllTracks();
      }, []);
  
    return (
        <div><h1>Community Tracks</h1>
            {tracks.length === 0 ? (<p>The community has not added any songs yet</p>) 
             : (
                <ul>{tracks.map((track) => (
                    <li key={track._id}>
                        <h4>{track.title}</h4>
                        <p>By: {track.artist}</p>
                        <Link to={`/tracks/edit-track/${track._id}`}> <button>Edit Track</button></Link>
                        <button onClick={()=>handleDeleteTrack(track._id)}>Delete Track</button>
                        <button onClick={() => handlePlayTrack(track)}>Play</button>
                    </li>
                ))};</ul>
            )}

        </div>
    )
};

export default TrackList;
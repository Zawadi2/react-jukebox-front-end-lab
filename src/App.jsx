import * as trackService from './services/trackService'
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import TrackForm from './components/TrackForm';
import NowPlaying from './components/NowPlaying'
import TrackList from './components/TrackList';



const App = () => {
  const [tracks, setTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState(null);
  const navigate = useNavigate()
  // getting all the tracks from db
  
  useEffect(() => {
    navigate('/tracks');
  }, [navigate]);

  const handleAddTrack = async (trackFormData) => {
    const newTrack = await trackService.create(trackFormData)
    setTracks([newTrack, ...tracks])
    navigate('/tracks')
  }
  const handleUpdateTrack = async (trackId, trackFormData) => {
    const updatedTrack = await trackService.update(trackId, trackFormData)
    setTracks(tracks.map((track) => (trackId === track._id ? updatedTrack : track)))
    navigate('/tracks')
  }
  const handlePlayTrack = (track) => {
    setCurrentTrack(track);
  }
  const handleDeleteTrack = async (trackId) => {
    await trackService.del(trackId);
    setTracks(tracks.filter(track => 
      track._id !== trackId
    ));
    window.location.reload();
  }
  return (
    <>
      <h1>Welcome</h1>
      
      <Link to="/tracks/add-track"><button style={{ backgroundColor: 'rgba(255, 16, 0, 0.7)'}}>Add New Track</button></Link>
      <Routes>
        <Route path="/tracks/add-track" element={<TrackForm handleAddTrack={handleAddTrack} />} />
        <Route path="/tracks" element={<TrackList handlePlayTrack={handlePlayTrack} handleDeleteTrack={handleDeleteTrack}/>} />    
        <Route path="/tracks/edit-track/:trackId" element={<TrackForm handleUpdateTrack={handleUpdateTrack} />} />
      </Routes>
      <NowPlaying track={currentTrack} />
    </>
  );
};
export default App;
import * as trackService from './services/trackService'
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
    const getAllTracks = async () => {
      const allTracksOnDB = await trackService.fetchAllTracks();
      setTracks(allTracksOnDB);
    };
    getAllTracks();
  }, []);


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
  }

  return (
    <>
      <h1>Welcome</h1>
      <NowPlaying track={currentTrack} />
      <Routes>
        <Route path="/tracks/add-track" element={<TrackForm handleAddTrack={handleAddTrack} />} />
<<<<<<< HEAD
        <Route path="/tracks" element={<TrackList tracks={tracks} setTracks={setTracks} handleDeleteTrack={handleDeleteTrack}/>} />    
=======
        <Route path="/tracks" element={<TrackList tracks={tracks} setTracks={setTracks} />} />
        <Route path="/tracks/edit-track/:trackId" element={<TrackForm handleUpdateTrack={handleUpdateTrack} />} />
>>>>>>> origin
      </Routes>
    </>
  )
};


export default App;
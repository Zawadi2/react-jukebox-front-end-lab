import * as trackService from './services/trackService'
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import TrackForm from './components/TrackForm';
import NowPlaying from './components/NowPlaying'
import TrackList from './components/TrackList';



const App = () => {
  const [tracks, setTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState(null);
  const navigate = useNavigate()

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

  // const handlePlayTrack = (track) => {
  //   setCurrentTrack(track);
  // }

  // const handleDeleteTrack = async (trackId) => {
  //   await trackService.del(trackId);
  //   setTracks(tracks.filter(track => 
  //     track._id !== trackId
  //   ));
  // }

  return (
    <>
      <Routes>
        <Route path="/tracks/add-track" element={<TrackForm handleAddTrack={handleAddTrack} />} />
        <Route path="/tracks" element={<TrackList tracks={tracks} setTracks={setTracks} />} />
        <Route path="/tracks/edit-track/:trackId" element={<TrackForm handleUpdateTrack={handleUpdateTrack} />} />
      </Routes>
    </>
  )
};


export default App;
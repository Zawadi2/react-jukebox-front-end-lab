import * as trackService from './services/trackService'
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import TrackForm from './components/TrackForm';
import NowPlaying from './NowPlaying';

const App = () => {
  const [tracks, setTracks] = useState([])
  const [currentTrack, setCurrentTrack] = useState(null);
  const navigate = useNavigate()

  const handleAddTrack = async (trackFormData) => {
    const newTrack = await trackService.create(trackFormData)
    setTracks([newTrack, ...tracks])
    navigate('./tracks')
  }
  const handlePlayTrack = (track) => {
    setCurrentTrack(track);
  }

  return (
    <>
    <NowPlaying track={currentTrack} />
      <Routes>
        <Route path="/tracks/add-track" element={<TrackForm handleAddTrack={handleAddTrack} />} />
        <Route path="/tracks" element={<TrackList tracks={tracks} handlePlayTrack={handlePlayTrack} />} />
      </Routes>
    </>
  )
};


export default App;
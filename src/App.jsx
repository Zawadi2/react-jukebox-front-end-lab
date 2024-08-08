import * as trackService from './services/trackService'
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import TrackForm from './components/TrackForm';
import NowPlaying from './NowPlaying';

const App = () => {
  const [tracks, setTracks] = useState([])
  const navigate = useNavigate()

  const handleAddTrack = async (trackFormData) => {
    const newTrack = await trackService.create(trackFormData)
    setTracks([newTrack, ...tracks])
    navigate('./tracks')
  }

  return (
    <>
      <Routes>
        <Route path="/tracks/add-track" element={<TrackForm handleAddTrack={handleAddTrack} />} />
      </Routes>
    </>
  )
};


export default App;
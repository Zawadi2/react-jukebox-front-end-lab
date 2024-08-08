import * as trackService from './services/trackService'
import { useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import TrackForm from './components/TrackForm';
import NowPlaying from './components/NowPlaying';
import TrackList from './components/TrackList';


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

  const handleDeleteTrack = async (trackId) => {
    await trackService.del(trackId);
    setTracks(tracks.filter(track => 
      track._id !== trackId
    ));
  }

  const handleUpdateTrack = () => {}
  {/* need to add an edit route and a function to handle update of the track
  -- also prolly will need to make an api update request to update the db??? */}
  return (
    <>
      <Routes>
        <NowPlaying track={currentTrack} />
        <Route path="/tracks/add-track" element={<TrackForm handleAddTrack={handleAddTrack} />} />
        <Route path="/tracks" element={<TrackList tracks={tracks} setTracks={setTracks} />} />
      </Routes>
    </>
  )
};


export default App;
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import * as trackService from '../services/trackService'

const TrackForm = (props) => {
    const [formData, setFormData] = useState({ title: '', artist: '' })

    const { trackId } = useParams()

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name] : event.target.value })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.handleAddTrack(formData)
        setFormData({ title: '', artist: '' })
    }

    // useEffect(() => {
    //     const fetchTrack = async () => {
    //         const trackData = await trackService.show(trackId)
    //         setFormData(trackData)
    //     }
    //     if (trackId) fetchTrack()
    // }, [trackId])

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="title-input">Title:</label>
            <input
              required
              type="text"
              name="title"
              id="title-input"
              value={formData.title}
              onChange={handleChange}
            />

            <label htmlFor="artist-input">Artist:</label>
            <input
              required
              type="text"
              name="artist"
              id="artist-input"
              value={formData.artist}
              onChange={handleChange}
            />

            <button type="submit">SUBMIT</button>
        </form>
    )
}

export default TrackForm
